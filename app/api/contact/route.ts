// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

export async function POST(req: NextRequest) {
  const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;
  
  if (!DISCORD_WEBHOOK_URL) {
      console.error("CRITICAL ERROR: DISCORD_WEBHOOK_URL is missing in environment variables.");
      return NextResponse.json({ 
          success: false, 
          error: "Server configuration error: Discord webhook not set." 
      }, { status: 500 });
  }

  let formData: FormData;
  try {
      formData = await req.formData();
  } catch (e) {
      console.error("Failed to parse form data:", e);
      return NextResponse.json({ success: false, error: "Invalid form data received" }, { status: 400 });
  }

  // --- 1. Витягування текстових даних ---
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const projectType = formData.get('projectType') as string;
  const briefing = formData.get('briefing') as string;
  
  // FIX: Extract NDA status
  const nda = formData.get('nda');
  const ndaRequested = nda === 'true' || nda === 'on'; // Checkbox value is 'true' or 'on' if checked
  
  // --- 2. Ідентифікація та валідація файлів ---
  const filesToAttach: { key: string, file: File }[] = [];
  let fileIndex = 0;
  
  for (const [key, value] of formData.entries()) {
      if (key.startsWith('attachment_') && value instanceof File) {
          if (value.size <= MAX_FILE_SIZE) {
              // Перейменовуємо ключ на file0, file1, file2 для Discord
              filesToAttach.push({ key: `file${fileIndex}`, file: value }); 
              fileIndex++;
          } else {
              console.warn(`File rejected due to size: ${value.name}`);
          }
      }
  }

  const fileCount = filesToAttach.length;
  const fileNames = filesToAttach.map(f => f.file.name).join(', ');
  const fileInfo = fileCount > 0 
      ? `**${fileCount}** file(s) attached: ${fileNames}` 
      : 'None.';
  
  // Обмеження Briefing до 1024 символів
  const bigBriefing = briefing.length > 1024 ? briefing.substring(0, 1021) + '...' : briefing;


  // --- 3. Створення JSON Payload для Discord (Embed) ---
  const discordPayload = {
      username: "Gimmir Web",
      content: `🔔 New Lead!`,
      
      embeds: [
          {
              title: `${firstName} ${lastName}`,
              color: 0x0062d1, 
              
              fields: [
                  { 
                      name: "📞 Contact Details", 
                      value: `
**Email:** [${email}](mailto:${email})
**Phone:** [${phone}](tel:${phone})
                      `, 
                      inline: false
                  },
                  // NDA FIELD ADDED
                  { 
                      name: "NDA Requested", 
                      value: ndaRequested ? '✅ YES' : '❌ NO', 
                      inline: true 
                  },
                  { name: "Project Type", value: projectType || 'N/A', inline: true },
                  
                  { name: "Attachment Info", value: fileInfo, inline: false }, 
                  { name: "Project Briefing", value: bigBriefing || 'No description provided.', inline: false },
              ],
              footer: { text: "Gimmir Form" },
              timestamp: new Date().toISOString()
          }
      ]
  };

  // --- 4. Підготовка фінального FormData для відправки ---
  try {
      const finalFormData = new FormData();
      
      // 1. Додаємо JSON Payload під ключем 'payload_json'
      finalFormData.append('payload_json', JSON.stringify(discordPayload));
      
      // 2. Додаємо валідні файли з перейменованими ключами
      filesToAttach.forEach((item) => {
          finalFormData.append(item.key, item.file, item.file.name); 
      });

      // --- 5. Відправка до Discord ---
      const discordResponse = await fetch(DISCORD_WEBHOOK_URL, {
          method: 'POST',
          body: finalFormData,
      });

      if (!discordResponse.ok) {
          console.error('DISCORD NOTIFICATION FAILED:', discordResponse.status, discordResponse.statusText);
          const errorText = await discordResponse.text();
          console.error('Discord API Error:', errorText);
          throw new Error(`Discord Webhook failed with status: ${discordResponse.status}. Details: ${errorText.substring(0, 100)}...`);
      }
      
      console.log("Discord notification sent successfully.");

  } catch (e: any) {
      console.error('Error sending Discord notification:', e.message);
      return NextResponse.json({ success: false, error: "Submission failed due to server-side error." }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: "Successfully submitted to Discord with files" });
}