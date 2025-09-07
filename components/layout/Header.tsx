import GithubIcon from "@/components/icons/GithubIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import EmailIcon from "@/components/icons/EmailIcon";

const Header = () => {
  return (
    <header className="m-[0_auto] flex h-24 w-[min(896px,100%)] flex-row items-center justify-between px-6">
      <a href="/" className="text-lg">
        <span className="text-zinc-500">어이 조씨, </span>
        <span className="font-semibold">코딩</span>
        <span className="text-zinc-500">이나 해.</span>
      </a>
      <nav className="flex flex-row items-center justify-center gap-6">
        <a href="https://github.com/nyongone" target="_blank">
          <GithubIcon />
        </a>
        <a href="https://instagram.com/imwoniya" target="_blank">
          <InstagramIcon />
        </a>
        <a href="mailto:auau3@kakao.com" target="_blank">
          <EmailIcon />
        </a>
      </nav>
    </header>
  );
};

export default Header;
