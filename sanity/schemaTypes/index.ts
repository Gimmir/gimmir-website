import { type SchemaTypeDefinition } from 'sanity';

import { authorType } from './author';
import { categoryType } from './category';
import { newsType } from './news';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorType, categoryType, newsType],
};
