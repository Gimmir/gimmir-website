import { type SchemaTypeDefinition } from 'sanity';

import { postType } from './post';
import { newsType } from './news';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, newsType],
};
