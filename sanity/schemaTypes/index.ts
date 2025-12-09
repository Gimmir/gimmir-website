import { type SchemaTypeDefinition } from 'sanity';

import { authorType } from './author';
import { categoryType } from './category';
import { newsType } from './news';
import { termsOfServiceType } from './termsOfService';
import { privacyPolicyType } from './privacyPolicy';
import { seoType } from './objects/seo';
import { settingsType } from './singletons/settings';
import { routeSeoType } from './routeSeo';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Object Types
    seoType,
    // Content Types
    authorType,
    categoryType,
    newsType,
    // Static Page SEO
    routeSeoType,
    // Legal Documents (Singletons)
    termsOfServiceType,
    privacyPolicyType,
    // Global Settings (Singleton)
    settingsType,
  ],
};
