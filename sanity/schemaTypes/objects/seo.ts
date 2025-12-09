import { defineField, defineType } from 'sanity';

/**
 * Reusable SEO object type
 * Can be added to any document type for comprehensive SEO control
 */
export const seoType = defineType({
  name: 'seo',
  title: 'SEO Settings',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Title for search engines (overrides main title). Recommended: 50-60 characters.',
      validation: (Rule) =>
        Rule.max(60).warning('Meta titles should be under 60 characters for best display in search results.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Description for search engines. Recommended: 120-160 characters.',
      validation: (Rule) =>
        Rule.max(160).warning('Meta descriptions should be under 160 characters for best display in search results.'),
    }),
    defineField({
      name: 'openGraphImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Share image for social media (Facebook, LinkedIn, etc.). Recommended: 1200x630 pixels.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Describe the image for accessibility and SEO.',
        },
      ],
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from Search Engines',
      type: 'boolean',
      description: 'If enabled, this page will not be indexed by search engines (adds noindex meta tag).',
      initialValue: false,
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Override the canonical URL if this content exists elsewhere or to prevent duplicate content issues.',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
  ],
  options: {
    collapsible: true,
    collapsed: false,
  },
});
