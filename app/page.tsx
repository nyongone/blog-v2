import PostList from "@/components/post/PostList";
import { getPosts } from "@/utils/posts";

export default async function Page() {
  const posts = await getPosts();

  return (
    <>
      <PostList posts={posts} />
    </>
  );
}
