export default function NotFound() {
  return (
    <div className="flex h-auto w-full flex-col items-start justify-start gap-2">
      <h2 className="text-xl">어.. 잘못 찾아오신 것 같은데요?</h2>
      <span className="text-base text-zinc-500">
        여기엔 아무것도 없는 것 같아요.
      </span>
      <a href="/" className="text-base text-zinc-500">
        다시 돌아가셔서 천천히 둘러보세요.
      </a>
    </div>
  );
}
