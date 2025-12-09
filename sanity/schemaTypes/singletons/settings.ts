import { defineField, defineType } from 'sanity';

/**
 * Global Site Settings Singleton
 * Contains default SEO values and site-wide configuration
 */
export const settingsType = defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'general', title: 'General', default: true },
    { name: 'seo', title: 'Default SEO' },
    { name: 'social', title: 'Social Media' },
  ],
  fields: [
    // ═══════════════════════════════════════════════════════════════════════
    // GENERAL SETTINGS
    // ═══════════════════════════════════════════════════════════════════════
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      description: 'The main title of your website.',
      group: 'general',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleTemplate',
      title: 'Title Template',
      type: 'string',
      description: 'Template for page titles. Use %s as placeholder for the page title (e.g., "%s | Gimmir").',
      group: 'general',
      initialValue: '%s | Gimmir',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
      description: 'The production URL of your website (used for generating absolute URLs in sitemaps and OG tags).',
      group: 'general',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['https'],
        }),
    }),

    // ═══════════════════════════════════════════════════════════════════════
    // DEFAULT SEO SETTINGS
    // ═══════════════════════════════════════════════════════════════════════
    defineField({
      name: 'defaultMetaDescription',
      title: 'Default Meta Description',
      type: 'text',
      rows: 3,
      description: 'Default description used when a page does not have its own description. Recommended: 120-160 characters.',
      group: 'seo',
      validation: (Rule) =>
        Rule.required().max(160).warning('Meta descriptions should be under 160 characters.'),
    }),
    defineField({
      name: 'defaultOgImage',
      title: 'Default Open Graph Image',
      type: 'image',
      description: 'Default share image used when a page does not have its own OG image. Recommended: 1200x630 pixels.',
      group: 'seo',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),

    // ═══════════════════════════════════════════════════════════════════════
    // SOCIAL MEDIA SETTINGS
    // ═══════════════════════════════════════════════════════════════════════
    defineField({
      name: 'twitterHandle',
      title: 'Twitter/X Handle',
      type: 'string',
      description: 'Your Twitter/X username (without the @ symbol).',
      group: 'social',
    }),
    defineField({
      name: 'facebookAppId',
      title: 'Facebook App ID',
      type: 'string',
      description: 'Facebook App ID for enhanced sharing analytics (optional).',
      group: 'social',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
        subtitle: 'Global SEO & Configuration',
      };
    },
  },
});
