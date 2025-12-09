import { defineField, defineType } from 'sanity';

/**
 * Reusable Portable Text configuration for legal documents.
 * Provides consistent rich-text editing capabilities across all legal pages.
 */
const legalBodyConfig = {
  type: 'array' as const,
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          { title: 'Underline', value: 'underline' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              { 
                name: 'href', 
                type: 'url', 
                title: 'URL',
                validation: (Rule: { uri: (arg0: { scheme: string[]; }) => unknown; }) => Rule.uri({
                  scheme: ['http', 'https', 'mailto', 'tel'],
                }),
              },
              { 
                name: 'blank', 
                type: 'boolean', 
                title: 'Open in new tab', 
                initialValue: true 
              },
            ],
          },
        ],
      },
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
    },
    // Allow image insertion within legal content
    { 
      type: 'image', 
      fields: [
        { name: 'alt', type: 'string', title: 'Alternative Text' }
      ] 
    },
  ],
};

/**
 * Privacy Policy Singleton Document
 * 
 * This schema represents a single, editable Privacy Policy page.
 * All content sections correspond to the hardcoded sections in the original page.tsx.
 */
export const privacyPolicyType = defineType({
  name: 'privacyPolicy',
  title: 'Privacy Policy',
  type: 'document',
  icon: () => '🔒',
  groups: [
    { name: 'meta', title: 'Meta & Hero' },
    { name: 'seo', title: 'SEO' },
    { name: 'content', title: 'Main Content Sections', default: true },
  ],
  fields: [
    // ════════════════════════════════════════════════════════════════════
    // SEO SETTINGS
    // ════════════════════════════════════════════════════════════════════
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      group: 'seo',
    }),
    // ════════════════════════════════════════════════════════════════════
    // META & HERO SECTION
    // ════════════════════════════════════════════════════════════════════
    defineField({
      name: 'title',
      title: 'Page Title (H1)',
      type: 'string',
      group: 'meta',
      initialValue: 'Global Privacy Policy',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      group: 'meta',
      initialValue: 'Our commitment to your data sovereignty and privacy, compliant with GDPR, CCPA, and international standards.',
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated Date',
      type: 'date',
      group: 'meta',
      options: {
        dateFormat: 'MMMM DD, YYYY',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'complianceBadge',
      title: 'Compliance Badge Text (Sidebar)',
      type: 'string',
      group: 'meta',
      initialValue: 'GDPR & CCPA Ready',
    }),

    // ════════════════════════════════════════════════════════════════════
    // SECTION 1: INTRODUCTION
    // ════════════════════════════════════════════════════════════════════
    defineField({
      name: 'introductionBody',
      title: '1. Introduction',
      description: 'Introductory text about Gimmir\'s approach to privacy.',
      ...legalBodyConfig,
      group: 'content',
    }),
    defineField({
      name: 'transparencyStatement',
      title: '1. Transparency Statement',
      description: 'The highlighted transparency statement shown in the callout box.',
      type: 'text',
      rows: 3,
      group: 'content',
      initialValue: 'Transparency Statement: We operate with full transparency regarding data collection protocols. This policy details the technical and legal frameworks governing your information.',
    }),

    // ════════════════════════════════════════════════════════════════════
    // SECTION 2: DATA SOVEREIGNTY & JURISDICTION
    // ════════════════════════════════════════════════════════════════════
    defineField({
      name: 'sovereigntyIntro',
      title: '2. Data Sovereignty - Introduction',
      description: 'Introductory text for the data sovereignty section.',
      type: 'text',
      rows: 3,
      group: 'content',
      initialValue: 'Your data is processed under strict legal frameworks depending on your region. We maintain distinct legal entities to ensure compliance with local regulations.',
    }),
    defineField({
      name: 'usaJurisdiction',
      title: '2. USA Jurisdiction Card',
      description: 'Details about US data processing and jurisdiction.',
      type: 'object',
      group: 'content',
      fields: [
        { name: 'title', type: 'string', title: 'Title', initialValue: 'USA Jurisdiction' },
        { name: 'governingLaw', type: 'string', title: 'Governing Law', initialValue: 'Delaware State Law' },
        { name: 'description', type: 'text', title: 'Description', rows: 3 },
      ],
    }),
    defineField({
      name: 'euJurisdiction',
      title: '2. EU Jurisdiction Card',
      description: 'Details about EU data processing and jurisdiction.',
      type: 'object',
      group: 'content',
      fields: [
        { name: 'title', type: 'string', title: 'Title', initialValue: 'EU Jurisdiction' },
        { name: 'governingLaw', type: 'string', title: 'Governing Law', initialValue: 'Estonian & EU Law' },
        { name: 'description', type: 'text', title: 'Description', rows: 3 },
      ],
    }),

    // ════════════════════════════════════════════════════════════════════
    // SECTION 3: INFORMATION WE COLLECT
    // ════════════════════════════════════════════════════════════════════
    defineField({
      name: 'explicitDataTitle',
      title: '3. Explicit Data Section Title',
      type: 'string',
      group: 'content',
      initialValue: 'Explicit Data (Input)',
    }),
    defineField({
      name: 'explicitDataDescription',
      title: '3. Explicit Data Description',
      type: 'text',
      rows: 2,
      group: 'content',
      initialValue: 'Data you voluntarily provide through our Inquiry Forms, Project Simulator, or direct correspondence.',
    }),
    defineField({
      name: 'explicitDataList',
      title: '3. Explicit Data Items',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content',
      initialValue: [
        'Full Name & Job Title',
        'Corporate Email Address',
        'Direct Phone Number',
        'Project Briefs & Technical Specs',
        'Budget Constraints',
        'Uploaded RFPs / Architecture Docs',
      ],
    }),
    defineField({
      name: 'implicitDataTitle',
      title: '3. Implicit Data Section Title',
      type: 'string',
      group: 'content',
      initialValue: 'Implicit Data (Telemetry)',
    }),
    defineField({
      name: 'implicitDataDescription',
      title: '3. Implicit Data Description',
      type: 'text',
      rows: 2,
      group: 'content',
      initialValue: 'Technical data automatically collected to optimize system performance and security.',
    }),
    defineField({
      name: 'implicitDataList',
      title: '3. Implicit Data Items',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content',
      initialValue: [
        'IP Address & Geolocation (for regional compliance)',
        'Browser Type & Version',
        'Session Duration & Simulator Interaction Metrics',
      ],
    }),

    // ════════════════════════════════════════════════════════════════════
    // SECTION 4: DATA USAGE & INTERNATIONAL TRANSFER
    // ════════════════════════════════════════════════════════════════════
    defineField({
      name: 'dataUsageBody',
      title: '4. Usage & International Transfer',
      description: 'Main content about how data is used and transferred.',
      ...legalBodyConfig,
      group: 'content',
    }),
    defineField({
      name: 'gdprGuaranteeTitle',
      title: '4. GDPR Guarantee Title',
      type: 'string',
      group: 'content',
      initialValue: 'GDPR Compliance Guarantee',
    }),
    defineField({
      name: 'gdprGuaranteeText',
      title: '4. GDPR Guarantee Text',
      type: 'text',
      rows: 3,
      group: 'content',
      initialValue: 'Any transfer of data outside the EEA is protected by Standard Contractual Clauses (SCCs) approved by the European Commission, ensuring your data rights travel with your data.',
    }),

    // ════════════════════════════════════════════════════════════════════
    // SECTION 5: SECURITY PROTOCOLS
    // ════════════════════════════════════════════════════════════════════
    defineField({
      name: 'securityTitle',
      title: '5. Security Section Title',
      type: 'string',
      group: 'content',
      initialValue: 'Enterprise-Grade Encryption',
    }),
    defineField({
      name: 'securityDescription',
      title: '5. Security Description',
      type: 'text',
      rows: 3,
      group: 'content',
      initialValue: 'We adhere to a "Security by Design" philosophy. All sensitive project data is treated as high-value intellectual property.',
    }),
    defineField({
      name: 'securityFeatures',
      title: '5. Security Features List',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content',
      initialValue: [
        'AES-256 Data at Rest',
        'TLS 1.3 Data in Transit',
        'MFA Access Control',
      ],
    }),

    // ════════════════════════════════════════════════════════════════════
    // SECTION 6: GDPR RIGHTS
    // ════════════════════════════════════════════════════════════════════
    defineField({
      name: 'gdprRightsIntro',
      title: '6. GDPR Rights Introduction',
      type: 'text',
      rows: 2,
      group: 'content',
      initialValue: 'We empower you with full control over your digital footprint. You have the right to:',
    }),
    defineField({
      name: 'gdprRights',
      title: '6. GDPR Rights List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Right Title' },
            { name: 'description', type: 'text', title: 'Description', rows: 2 },
          ],
          preview: {
            select: { title: 'title' },
          },
        },
      ],
      group: 'content',
      initialValue: [
        { title: 'Right to Access', description: 'Request a complete export of the personal and project data we hold about you.' },
        { title: 'Right to Rectification', description: 'Correct any inaccurate or incomplete data in our CRM systems.' },
        { title: "Right to Erasure ('Right to be Forgotten')", description: 'Request permanent deletion of your data from our servers, subject to legal retention obligations.' },
        { title: 'Right to Restriction', description: 'Request a temporary halt to the processing of your data.' },
      ],
    }),

    // ════════════════════════════════════════════════════════════════════
    // SECTION 7: COOKIES & TRACKING
    // ════════════════════════════════════════════════════════════════════
    defineField({
      name: 'cookiesIntro',
      title: '7. Cookies Introduction',
      type: 'text',
      rows: 2,
      group: 'content',
      initialValue: 'We utilize minimal cookies strictly necessary for system operation.',
    }),
    defineField({
      name: 'cookiesList',
      title: '7. Cookies List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Cookie Type' },
            { name: 'description', type: 'text', title: 'Description', rows: 2 },
          ],
          preview: {
            select: { title: 'name' },
          },
        },
      ],
      group: 'content',
      initialValue: [
        { name: 'Session Cookies', description: 'Essential for maintaining your state in the Project Simulator.' },
        { name: 'Analytics Cookies', description: 'Anonymized telemetry to help us improve system response times.' },
      ],
    }),

    // ════════════════════════════════════════════════════════════════════
    // SECTION 8: CONTACT DPO
    // ════════════════════════════════════════════════════════════════════
    defineField({
      name: 'contactTitle',
      title: '8. Contact Section Title',
      type: 'string',
      group: 'content',
      initialValue: 'Contact Data Protection Officer',
    }),
    defineField({
      name: 'contactDescription',
      title: '8. Contact Description',
      type: 'text',
      rows: 2,
      group: 'content',
      initialValue: 'To exercise your rights or report a vulnerability, initiate a secure channel with our DPO.',
    }),
    defineField({
      name: 'dpoEmail',
      title: '8. DPO Email Address',
      type: 'string',
      group: 'content',
      initialValue: 'privacy@gimmir.com',
      validation: (Rule) => Rule.email(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      updated: 'lastUpdated',
    },
    prepare({ title, updated }) {
      return {
        title: title || 'Privacy Policy',
        subtitle: updated ? `Last updated: ${updated}` : 'No update date set',
      };
    },
  },
});
