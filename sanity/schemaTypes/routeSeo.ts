import { defineField, defineType } from 'sanity';

/**
 * Static Route SEO Document
 * 
 * Allows managing SEO metadata for hardcoded Next.js routes
 * (Home, Solutions pages, Contact, About, etc.)
 */
export const routeSeoType = defineType({
  name: 'routeSeo',
  title: 'Static Page SEO',
  type: 'document',
  icon: () => '🔗',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Name',
      type: 'string',
      description: 'Internal name for this entry (e.g., "Home Page", "Solution: MVP Development").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pathname',
      title: 'URL Path',
      type: 'slug',
      description: 'The exact URL path (e.g., "/", "/solutions/mvp-development", "/contact-us").',
      options: {
        // No auto-generation since these are manual paths
        slugify: (input: string) => input.toLowerCase().trim(),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      description: 'SEO metadata for this page.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      pathname: 'pathname.current',
    },
    prepare({ title, pathname }) {
      return {
        title: title || 'Untitled',
        subtitle: pathname || 'No path set',
      };
    },
  },
  orderings: [
    {
      title: 'Path',
      name: 'pathnameAsc',
      by: [{ field: 'pathname.current', direction: 'asc' }],
    },
    {
      title: 'Name',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
});
