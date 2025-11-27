import { type SchemaTypeDefinition } from 'sanity';

import { authorType } from './author';
import { categoryType } from './category';
import { newsType } from './news';
import { termsOfServiceType } from './termsOfService';
import { privacyPolicyType } from './privacyPolicy';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Content Types
    authorType,
    categoryType,
    newsType,
    // Legal Documents (Singletons)
    termsOfServiceType,
    privacyPolicyType,
  ],
};
