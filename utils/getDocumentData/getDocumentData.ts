import { load } from "outstatic/server";

export const getDocumentData = async <T>(
  collectionName: string,
  collectionFields: string[]
) => {
  const db = await load();
  const documents = await db
    .find<T>({
      collection: collectionName,
    })
    .project(collectionFields)
    .toArray();
  return documents;
};
