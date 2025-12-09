import { StructureBuilder } from 'sanity/structure';
import { 
  DocumentTextIcon, 
  UsersIcon, 
  CogIcon, 
  FolderIcon,
  TagIcon,
  DocumentIcon,
  DownloadIcon,
  CodeBlockIcon,
  DocumentsIcon,
  LockIcon,
  EarthGlobeIcon,
  LinkIcon
} from '@sanity/icons';

/**
 * Custom Desk Structure for Gimmir Website CMS
 * 
 * Organizes content into logical groups:
 * 1. Main Content - News & Insights (articles)
 * 2. Legal Documents - Terms of Service, Privacy Policy (singletons)
 * 3. Configuration - Authors, Categories (relational data)
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
      // STATIC PAGES SEO
      // ═══════════════════════════════════════════════════════════════════
      S.listItem()
        .title('Static Pages SEO')
        .id('static-pages-seo')
        .icon(LinkIcon)
        .child(
          S.documentTypeList('routeSeo')
            .title('Static Pages SEO')
            .defaultOrdering([{ field: 'pathname.current', direction: 'asc' }])
        ),

      S.divider(),

      // ═══════════════════════════════════════════════════════════════════
      // LEGAL DOCUMENTS (SINGLETONS)
      // ═══════════════════════════════════════════════════════════════════
      S.listItem()
        .title('Legal Documents')
        .id('legal-section')
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title('Legal Documents')
            .items([
              // Terms of Service (Singleton)
              S.listItem()
                .title('Terms of Service')
                .id('terms-of-service')
                .icon(DocumentIcon)
                .child(
                  S.editor()
                    .id('termsOfService')
                    .schemaType('termsOfService')
                    .documentId('termsOfService')
                    .title('Terms of Service')
                ),

              // Privacy Policy (Singleton)
              S.listItem()
                .title('Privacy Policy')
                .id('privacy-policy')
                .icon(LockIcon)
                .child(
                  S.editor()
                    .id('privacyPolicy')
                    .schemaType('privacyPolicy')
                    .documentId('privacyPolicy')
                    .title('Privacy Policy')
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
              // Global SEO Settings (Singleton)
              S.listItem()
                .title('Site Settings (SEO)')
                .id('site-settings')
                .icon(EarthGlobeIcon)
                .child(
                  S.editor()
                    .id('settings')
                    .schemaType('settings')
                    .documentId('settings')
                    .title('Site Settings')
                ),

              S.divider(),

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
