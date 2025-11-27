import { defineField, defineType } from 'sanity';

export const newsType = defineType({
  name: 'news',
  title: 'News & Insights',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'meta', title: 'Metadata' },
    { name: 'technical', title: 'Technical Layout' },
    { name: 'magnet', title: 'Lead Magnet' },
  ],
  fields: [
    // ═══════════════════════════════════════════════════════════════════════
    // GENERAL & METADATA
    // ═══════════════════════════════════════════════════════════════════════
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      description: 'Optional subtitle or tagline',
      type: 'text',
      rows: 2,
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'meta',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Article Author',
      type: 'reference',
      to: [{ type: 'author' }],
      group: 'meta',
      description:
        'Required for Standard Layout. Optional for Technical/Magnet layouts.',

      // CRITICAL LOGIC: Make required only if layoutType is 'standard'
      validation: (rule) =>
        rule.custom((field, context) => {
          // Check if current layout is 'standard' AND author field is empty
          if (
            (context.document?.layoutType === 'standard' ||
              !context.document?.layoutType) &&
            !field
          ) {
            return 'Author is required for articles with "Standard (Magazine View)" layout.';
          }
          return true;
        }),

      // Optional: Hide field when not required (improves UX in Sanity Studio)
      hidden: ({ document }) =>
        document?.layoutType === 'magnet' ||
        document?.layoutType === 'technical',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      group: 'meta',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      description: 'e.g., "5 MIN READ"',
      type: 'string',
      group: 'meta',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      group: 'meta',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      group: 'meta',
      validation: (Rule) => Rule.required(),
    }),

    // ═══════════════════════════════════════════════════════════════════════
    // LAYOUT SWITCH (CRITICAL for Polymorphism)
    // ═══════════════════════════════════════════════════════════════════════
    defineField({
      name: 'layoutType',
      title: 'Card & Page Layout Style',
      description: 'Determines how the card and detail page are rendered',
      type: 'string',
      options: {
        list: [
          { title: 'Standard (Magazine View)', value: 'standard' },
          { title: 'Technical (Documentation View)', value: 'technical' },
          { title: 'Magnet (Download Gate)', value: 'magnet' },
        ],
        layout: 'radio',
      },
      initialValue: 'standard',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),

    // ═══════════════════════════════════════════════════════════════════════
    // CONTENT FIELDS
    // ═══════════════════════════════════════════════════════════════════════
    defineField({
      name: 'description',
      title: 'Description / Excerpt',
      description: 'Short excerpt shown on the card (max 200 characters)',
      type: 'text',
      rows: 3,
      group: 'content',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'mainImage',
      title: 'Hero Image',
      description: 'Featured image for Standard layout cards & detail page',
      type: 'image',
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
      group: 'content',
    }),
    defineField({
      name: 'body',
      title: 'Content Body',
      type: 'array',
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
              { title: 'Strike', value: 'strike-through' },
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
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Open in new tab',
                    initialValue: true,
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
        {
          type: 'image',
          fields: [
            {
              type: 'string',
              name: 'alt',
              title: 'Alternative Text',
            },
            {
              type: 'string',
              name: 'caption',
              title: 'Caption',
            },
          ],
        },
        {
          type: 'code',
          title: 'Code Block',
          options: {
            language: 'typescript',
            languageAlternatives: [
              { title: 'TypeScript', value: 'typescript' },
              { title: 'JavaScript', value: 'javascript' },
              { title: 'Python', value: 'python' },
              { title: 'Bash', value: 'bash' },
              { title: 'Shell', value: 'shell' },
              { title: 'JSON', value: 'json' },
              { title: 'YAML', value: 'yaml' },
              { title: 'CSS', value: 'css' },
              { title: 'HTML', value: 'html' },
              { title: 'SQL', value: 'sql' },
              { title: 'GraphQL', value: 'graphql' },
              { title: 'Markdown', value: 'markdown' },
            ],
            withFilename: true,
          },
        },
      ],
      group: 'content',
    }),

    // ═══════════════════════════════════════════════════════════════════════
    // TECHNICAL LAYOUT FIELDS (Template B)
    // Note: Icon and accentColor are now derived automatically from layoutType
    // Technical = Emerald/Green, Magnet = Amber/Orange
    // ═══════════════════════════════════════════════════════════════════════
    defineField({
      name: 'tableOfContents',
      title: 'Table of Contents',
      description: 'Navigation items for the technical documentation sidebar',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Section Title',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'id',
              type: 'string',
              title: 'Anchor ID',
              description: 'HTML Anchor ID (e.g., "forensic-analysis")',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: { title: 'title', id: 'id' },
            prepare: ({ title, id }) => ({
              title,
              subtitle: `#${id}`,
            }),
          },
        },
      ],
      group: 'technical',
      hidden: ({ document }) => document?.layoutType !== 'technical',
    }),
    defineField({
      name: 'version',
      title: 'Version',
      description: 'Document version (e.g., "v2.1")',
      type: 'string',
      group: 'technical',
      hidden: ({ document }) => document?.layoutType !== 'technical',
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      description: 'Last update date for technical docs',
      type: 'datetime',
      group: 'technical',
      hidden: ({ document }) => document?.layoutType !== 'technical',
    }),

    // ═══════════════════════════════════════════════════════════════════════
    // LEAD MAGNET FIELDS (Template C)
    // ═══════════════════════════════════════════════════════════════════════
    defineField({
      name: 'resourceFile',
      title: 'Downloadable Resource File',
      description: 'PDF, Excel, or other downloadable file',
      type: 'file',
      options: {
        accept: '.pdf,.xlsx,.xls,.doc,.docx,.zip',
      },
      group: 'magnet',
      hidden: ({ document }) => document?.layoutType !== 'magnet',
    }),
    defineField({
      name: 'magnetBenefits',
      title: 'Benefits Checklist',
      description: 'List of features/benefits to display on the download page',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'magnet',
      hidden: ({ document }) => document?.layoutType !== 'magnet',
    }),
    defineField({
      name: 'resourceType',
      title: 'Resource Type',
      description: 'e.g., "PDF + Excel Templates"',
      type: 'string',
      group: 'magnet',
      hidden: ({ document }) => document?.layoutType !== 'magnet',
    }),
    defineField({
      name: 'fileSize',
      title: 'File Size',
      description: 'e.g., "2.4 MB"',
      type: 'string',
      group: 'magnet',
      hidden: ({ document }) => document?.layoutType !== 'magnet',
    }),
    defineField({
      name: 'downloadCount',
      title: 'Download Count',
      description: 'Number of downloads (can be used for social proof)',
      type: 'number',
      initialValue: 0,
      group: 'magnet',
      hidden: ({ document }) => document?.layoutType !== 'magnet',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category.title',
      layoutType: 'layoutType',
      media: 'mainImage',
    },
    prepare({ title, category, layoutType, media }) {
      return {
        title,
        subtitle: `${category || 'No category'} • ${layoutType}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Published Date, Old',
      name: 'publishedAtAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }],
    },
  ],
});
