import { defineField, defineType } from 'sanity';

export const authorType = defineType({
  name: 'author',
  title: 'Author Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'CTO, Lead Engineer, Content Strategist, etc.',
    }),

    // LOGIC SWITCH: If true, frontend uses Gimmir Logo as avatar
    defineField({
      name: 'isTeamAlias',
      title: 'Is Team Alias (e.g., Gimmir Team)?',
      type: 'boolean',
      initialValue: false,
      description:
        'Check if the author represents the brand (will use the Gimmir logo for the avatar).',
    }),

    // AVATAR & SOCIAL LINKS
    defineField({
      name: 'image',
      title: 'Author Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      description:
        'Required if "Is Team Alias" is NOT checked. The individual\'s photo.',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
      description:
        "Link to the author's professional profile for external validation.",
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
      isTeamAlias: 'isTeamAlias',
    },
    prepare({ title, subtitle, media, isTeamAlias }) {
      return {
        title,
        subtitle: isTeamAlias ? `${subtitle || ''} (Team Alias)` : subtitle,
        media,
      };
    },
  },
});
