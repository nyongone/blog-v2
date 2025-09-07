import dayjs from "dayjs";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const { metadata, default: Post } = await import(
    `@/contents/${slug}/page.mdx`
  );

  return (
    <>
      <div className="mb-8 flex flex-col gap-2">
        <span className="text-sm text-zinc-500">
          {dayjs(metadata.publishDate).format("YYYY MM DD")}
        </span>
        <h1 className="text-2xl font-bold">{metadata.title}</h1>
        <span className="text-lg text-zinc-400">{metadata.description}</span>
      </div>
      <article className="prose max-w-none">
        <Post />
      </article>
    </>
  );
}
