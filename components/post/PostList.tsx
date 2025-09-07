import { Post } from "@/types/post";
import dayjs from "dayjs";

interface Props {
  posts: Post[];
}

const PostList = ({ posts }: Props) => {
  return (
    <ul className="flex flex-col gap-4">
      {posts.map((post) => (
        <li
          key={dayjs(post.publishedAt).format("YYYYMMDDHHmmss")}
          className="h-24 w-full"
        >
          <a
            href={`/posts/${post.slug}`}
            className="flex h-full w-full flex-col items-start justify-start gap-1"
          >
            <span className="text-sm text-zinc-500">
              {dayjs(post.publishedAt).format("YYYY MM DD")}
            </span>
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-sm text-zinc-500">{post.description}</p>
          </a>
        </li>
      ))}
      {posts.length <= 0 && (
        <li className="flex w-full flex-col items-start justify-start gap-2">
          <span className="text-lg">헉! 아직 작성된 포스트가 없습니다.</span>
          <span className="text-base text-zinc-500">
            조용원이 게으른가 봅니다.
          </span>
        </li>
      )}
    </ul>
  );
};

export default PostList;
