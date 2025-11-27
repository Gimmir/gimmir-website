import { StructureBuilder } from 'sanity/structure';
import { 
  DocumentTextIcon, 
  UsersIcon, 
  CogIcon, 
  FolderIcon,
  TagIcon,
  DocumentIcon,
  DownloadIcon,
  CodeBlockIcon
} from '@sanity/icons';

/**
 * Custom Desk Structure for Gimmir Website CMS
 * 
 * Organizes content into logical groups:
 * 1. Main Content - News & Insights (articles)
 * 2. Configuration - Authors, Categories (relational data)
 */
export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content Manager')
    .items([
      // ═══════════════════════════════════════════════════════════════════
      // MAIN CONTENT
      // ═══════════════════════════════════════════════════════════════════
      S.listItem()
        .title('News & Insights')
        .id('news-section')
        .icon(DocumentTextIcon)
        .child(
          S.list()
            .title('News & Insights')
            .items([
              // All Articles
              S.listItem()
                .title('All Articles')
                .id('all-articles')
                .icon(FolderIcon)
                .child(
                  S.documentList()
                    .title('All Articles')
                    .filter('_type == "news"')
                    .schemaType('news')
                    .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
                ),

              S.divider(),

              // Filter by Layout Type
              S.listItem()
                .title('Standard Articles')
                .id('standard-articles')
                .icon(DocumentIcon)
                .child(
                  S.documentList()
                    .title('Standard Articles (Magazine View)')
                    .filter('_type == "news" && layoutType == "standard"')
                    .schemaType('news')
                    .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
                ),

              S.listItem()
                .title('Technical Docs')
                .id('technical-articles')
                .icon(CodeBlockIcon)
                .child(
                  S.documentList()
                    .title('Technical Documentation')
                    .filter('_type == "news" && layoutType == "technical"')
                    .schemaType('news')
                    .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
                ),

              S.listItem()
                .title('Lead Magnets')
                .id('magnet-articles')
                .icon(DownloadIcon)
                .child(
                  S.documentList()
                    .title('Lead Magnets (Downloads)')
                    .filter('_type == "news" && layoutType == "magnet"')
                    .schemaType('news')
                    .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
                ),
            ])
        ),

      S.divider(),

      // ═══════════════════════════════════════════════════════════════════
      // CONFIGURATION & SETTINGS
      // ═══════════════════════════════════════════════════════════════════
      S.listItem()
        .title('Configuration')
        .id('config-section')
        .icon(CogIcon)
        .child(
          S.list()
            .title('Configuration & Settings')
            .items([
              // Author Profiles
              S.listItem()
                .title('Author Profiles')
                .id('authors')
                .icon(UsersIcon)
                .child(
                  S.documentTypeList('author')
                    .title('Author Profiles')
                    .defaultOrdering([{ field: 'name', direction: 'asc' }])
                ),

              // Categories
              S.listItem()
                .title('Categories')
                .id('categories')
                .icon(TagIcon)
                .child(
                  S.documentTypeList('category')
                    .title('Categories (Taxonomy)')
                    .defaultOrdering([{ field: 'order', direction: 'asc' }])
                ),
            ])
        ),
    ]);
