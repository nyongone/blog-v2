import PostList from "@/components/post/PostList";
import { getPosts } from "@/utils/posts";

export default async function Page() {
  const posts = await getPosts();

  return (
    <>
      <p className="mb-4 text-sm text-zinc-400">
        조씨가 총 {posts.length}개 포스트를 썼습니다.
      </p>
      <PostList posts={posts} />
    </>
  );
}
