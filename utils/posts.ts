import { Post } from "@/types/post";
import dayjs from "dayjs";
import { readdir } from "fs/promises";
import path from "path";

export async function getPosts(): Promise<Post[]> {
  const postPath = path.join(process.cwd(), "contents");

  const slugs = (await readdir(postPath, { withFileTypes: true })).filter(
    (dirent) => dirent.isDirectory(),
  );

  const posts: Post[] = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await import(`../contents/${slug.name}/page.mdx`);
      return { slug: slug.name, ...metadata };
    }),
  );

  posts.sort((a, b) => dayjs(b.publishedAt).diff(dayjs(a.publishedAt)));

  return posts;
}
