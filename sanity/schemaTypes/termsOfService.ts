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
 * Terms of Service Singleton Document
 * 
 * This schema represents a single, editable Terms of Service page.
 * All content sections correspond to the hardcoded sections in the original page.tsx.
 */
export const termsOfServiceType = defineType({
  name: 'termsOfService',
  title: 'Terms of Service',
  type: 'document',
  icon: () => '📜',
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
      initialValue: 'Terms of Service & IP Agreement',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      group: 'meta',
      initialValue: 'Governing your use of Gimmir services, including payment terms, obligations, and the clear transfer of Intellectual Property rights.',
    }),
    defineField({
      name: 'lastRevision',
      title: 'Last Revision Date',
      type: 'date',
      group: 'meta',
      options: {
        dateFormat: 'MMMM DD, YYYY',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'jurisdiction',
      title: 'Jurisdiction Text (Sidebar)',
      type: 'string',
      group: 'meta',
      initialValue: 'Delaware, USA / EU',
    }),

    // ════════════════════════════════════════════════════════════════════
    // SECTION 1: ACCEPTANCE OF TERMS
    // ════════════════════════════════════════════════════════════════════
    defineField({
      name: 'acceptanceBody',
      title: '1. Acceptance of Terms',
      description: 'Content explaining when and how users agree to terms.',
      ...legalBodyConfig,
      group: 'content',
    }),

    // ════════════════════════════════════════════════════════════════════
    // SECTION 2: INTELLECTUAL PROPERTY
    // ════════════════════════════════════════════════════════════════════
    defineField({
      name: 'ipOwnershipBody',
      title: '2. Intellectual Property - Main Card Content',
      description: 'The content inside the "100% Work for Hire" card explaining client ownership.',
      ...legalBodyConfig,
      group: 'content',
    }),
    defineField({
      name: 'ipOwnershipChecklist',
      title: '2. Intellectual Property - Ownership Checklist',
      description: 'List of ownership guarantees (e.g., "Source Code Transfer", "IP Rights Assignment").',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content',
      initialValue: [
        'Source Code Transfer',
        'IP Rights Assignment',
        'No Hidden Licensing Fees',
      ],
    }),
    defineField({
      name: 'ipThirdPartyBody',
      title: '2. Intellectual Property - Third-Party Components',
      description: 'The text block about open-source libraries and third-party code.',
      ...legalBodyConfig,
      group: 'content',
    }),
    defineField({
      name: 'ipThirdPartyWarning',
      title: '2. Intellectual Property - Client Responsibility Warning',
      description: 'Warning text about client responsibility for third-party licenses.',
      type: 'text',
      rows: 3,
      group: 'content',
      initialValue: 'Client Responsibility: You are responsible for complying with the licenses of any specific third-party or open-source software you explicitly request us to integrate into the project.',
    }),

    // ════════════════════════════════════════════════════════════════════
    // SECTION 3: PAYMENT & REFUNDS
    // ════════════════════════════════════════════════════════════════════
    defineField({
      name: 'paymentBody',
      title: '3. Payment & Refund Policy',
      description: 'Include the Milestone-Based Billing points and Refund text here.',
      ...legalBodyConfig,
      group: 'content',
    }),
    defineField({
      name: 'paymentRefundText',
      title: '3. Refund Policy Text',
      description: 'Specific text explaining refund policy.',
      type: 'text',
      rows: 4,
      group: 'content',
      initialValue: 'Refunds: Due to the nature of custom engineering services, refunds are not provided for work already completed and approved. If you are unsatisfied with a deliverable, you must notify us within the review period (typically 5 business days) for rectification.',
    }),

    // ════════════════════════════════════════════════════════════════════
    // SECTION 4: TERMINATION & DISPUTES
    // ════════════════════════════════════════════════════════════════════
    defineField({
      name: 'terminationBody',
      title: '4. Termination Text',
      description: 'Content for the "Termination" column.',
      ...legalBodyConfig,
      group: 'content',
    }),
    defineField({
      name: 'governingLawBody',
      title: '4. Governing Law Text',
      description: 'Content for the "Governing Law" column.',
      ...legalBodyConfig,
      group: 'content',
    }),

    // ════════════════════════════════════════════════════════════════════
    // SECTION 5: ACCEPTABLE USE POLICY
    // ════════════════════════════════════════════════════════════════════
    defineField({
      name: 'acceptableUseIntro',
      title: '5. Acceptable Use Policy - Introduction',
      description: 'Introductory text before the prohibited activities list.',
      type: 'text',
      rows: 2,
      group: 'content',
      initialValue: 'You agree not to use Gimmir\'s services or the resulting software for:',
    }),
    defineField({
      name: 'acceptableUseList',
      title: '5. Acceptable Use Policy - Prohibited Activities',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of prohibited activities.',
      group: 'content',
      initialValue: [
        'Illegal activities or promotion of illegal acts.',
        'Violating the intellectual property rights of others.',
        'Distribution of malware or malicious code.',
        'Harassment, hate speech, or discrimination.',
      ],
    }),

    // ════════════════════════════════════════════════════════════════════
    // SECTION 6: LIMITATION OF LIABILITY
    // ════════════════════════════════════════════════════════════════════
    defineField({
      name: 'liabilityBody',
      title: '6. Limitation of Liability',
      description: 'Legal text limiting Gimmir\'s liability.',
      ...legalBodyConfig,
      group: 'content',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      revision: 'lastRevision',
    },
    prepare({ title, revision }) {
      return {
        title: title || 'Terms of Service',
        subtitle: revision ? `Last updated: ${revision}` : 'No revision date set',
      };
    },
  },
});
