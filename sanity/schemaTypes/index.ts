import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
// import { categoryType } from "./categoryType";
import { postType } from "./postType";
// import { authorType } from "./authorType";
import { jobType } from "./jobsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, postType, jobType],
};
