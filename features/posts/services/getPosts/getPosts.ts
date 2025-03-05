import { PostModel } from "@/features/posts";
import { getDocumentData } from "@/utils";

const POST_COLLECTION_NAME = "posts";
const POST_COLLECTION_PROJECTION = ["title", "description"];

export const getPosts = async () => {
  return await getDocumentData<PostModel>(
    POST_COLLECTION_NAME,
    POST_COLLECTION_PROJECTION
  );
};
