/**
 * Sanity Seed Script - Static Pages SEO
 * 
 * Run this script to create SEO entries for all static pages.
 * Usage: npx sanity exec scripts/seed-static-pages-seo.ts --with-user-token
 */

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'uacyslus',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-11-24',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Needs write access
});

// All static pages that need SEO entries
const staticPages = [
  // Homepage
  {
    _id: 'routeSeo-home',
    _type: 'routeSeo',
    title: 'Home Page',
    pathname: { _type: 'slug', current: '/' },
    seo: {
      metaTitle: 'Engineering Digital Assets That Pass Due Diligence',
      metaDescription: 'Gimmir builds investor-ready software. We deliver MVPs, dedicated engineering teams, and code rescue services that survive technical due diligence.',
    },
  },
  // Contact
  {
    _id: 'routeSeo-contact',
    _type: 'routeSeo',
    title: 'Contact Us',
    pathname: { _type: 'slug', current: '/contact-us' },
    seo: {
      metaTitle: 'Contact Us',
      metaDescription: 'Get in touch with Gimmir. Schedule a consultation to discuss your software development needs.',
    },
  },
  // News
  {
    _id: 'routeSeo-news',
    _type: 'routeSeo',
    title: 'News & Insights',
    pathname: { _type: 'slug', current: '/news' },
    seo: {
      metaTitle: 'News & Insights',
      metaDescription: 'Technical insights, engineering best practices, and strategic advice for CTOs and founders.',
    },
  },
  // ═══════════════════════════════════════════════════════════════════════
  // COMPANY PAGES
  // ═══════════════════════════════════════════════════════════════════════
  {
    _id: 'routeSeo-about',
    _type: 'routeSeo',
    title: 'About Us',
    pathname: { _type: 'slug', current: '/company/about' },
    seo: {
      metaTitle: 'About Gimmir',
      metaDescription: 'Learn about Gimmir - our mission, values, and the team behind investor-ready software development.',
    },
  },
  {
    _id: 'routeSeo-how-we-work',
    _type: 'routeSeo',
    title: 'How We Work',
    pathname: { _type: 'slug', current: '/company/how-we-work' },
    seo: {
      metaTitle: 'How We Work',
      metaDescription: 'Our proven methodology for delivering production-ready software that passes technical due diligence.',
    },
  },
  // ═══════════════════════════════════════════════════════════════════════
  // SOLUTIONS PAGES
  // ═══════════════════════════════════════════════════════════════════════
  {
    _id: 'routeSeo-mvp-development',
    _type: 'routeSeo',
    title: 'Solution: MVP Development',
    pathname: { _type: 'slug', current: '/solutions/mvp-development' },
    seo: {
      metaTitle: 'MVP Development',
      metaDescription: 'Launch your startup MVP in 6-8 weeks. Production-ready code that passes technical due diligence and scales with your growth.',
    },
  },
  {
    _id: 'routeSeo-dedicated-teams',
    _type: 'routeSeo',
    title: 'Solution: Dedicated Teams',
    pathname: { _type: 'slug', current: '/solutions/dedicated-teams' },
    seo: {
      metaTitle: 'Dedicated Engineering Teams',
      metaDescription: 'Scale your engineering capacity with vetted, senior developers who integrate seamlessly with your existing team.',
    },
  },
  {
    _id: 'routeSeo-web-mobile',
    _type: 'routeSeo',
    title: 'Solution: Web & Mobile Development',
    pathname: { _type: 'slug', current: '/solutions/web-mobile' },
    seo: {
      metaTitle: 'Web & Mobile Development',
      metaDescription: 'Full-stack web and mobile application development with modern technologies and best practices.',
    },
  },
  {
    _id: 'routeSeo-cloud-devops',
    _type: 'routeSeo',
    title: 'Solution: Cloud & DevOps',
    pathname: { _type: 'slug', current: '/solutions/cloud-devops' },
    seo: {
      metaTitle: 'Cloud & DevOps Services',
      metaDescription: 'Cloud architecture, infrastructure automation, and DevOps practices that ensure scalability and reliability.',
    },
  },
  {
    _id: 'routeSeo-code-rescue',
    _type: 'routeSeo',
    title: 'Solution: Code Rescue',
    pathname: { _type: 'slug', current: '/solutions/code-rescue' },
    seo: {
      metaTitle: 'Code Rescue & Technical Debt',
      metaDescription: 'Rescue failing projects, eliminate technical debt, and prepare your codebase for investor due diligence.',
    },
  },
];

async function seedStaticPagesSeo() {
  console.log('🌱 Starting to seed Static Pages SEO...\n');

  for (const page of staticPages) {
    try {
      // Check if document already exists
      const existing = await client.getDocument(page._id);
      
      if (existing) {
        console.log(`⏭️  Skipping "${page.title}" - already exists`);
        continue;
      }

      // Create the document
      await client.createOrReplace(page);
      console.log(`✅ Created: ${page.title} (${page.pathname.current})`);
    } catch (error) {
      console.error(`❌ Error creating "${page.title}":`, error);
    }
  }

  console.log('\n✨ Seeding complete!');
}

// Run the seed function
seedStaticPagesSeo();
