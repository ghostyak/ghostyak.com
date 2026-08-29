import Image from "next/image";
import Link from "next/link";
import ghostyakIcon from "../../public/ghostyak.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary-content/15 bg-primary text-primary-content shadow-md">
      <div className="navbar mx-auto min-h-16 w-full max-w-6xl px-3 sm:px-6">
        <div className="navbar-start min-w-0 flex-1">
          <Link
            className="btn btn-ghost min-h-11 gap-2 px-2 text-lg font-black normal-case text-primary-content hover:bg-primary-content/10"
            href="/"
            aria-label="GhostYak 홈페이지"
          >
            <Image className="size-9 object-contain" src={ghostyakIcon} alt="" width={38} height={38} priority />
            <span className="hidden min-[390px]:inline">GhostYak</span>
          </Link>
        </div>
        <nav className="navbar-end w-auto shrink-0 gap-0 sm:gap-1" aria-label="주요 메뉴">
          <Link className="btn btn-ghost min-h-11 px-3 text-primary-content hover:bg-primary-content/10 sm:px-4" href="/product/boxes">
            제품
          </Link>
          <Link className="btn btn-ghost min-h-11 px-3 text-primary-content hover:bg-primary-content/10 sm:px-4" href="/blog">
            블로그
          </Link>
        </nav>
      </div>
    </header>
  );
}
