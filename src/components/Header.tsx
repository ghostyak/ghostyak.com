import Image from "next/image";
import Link from "next/link";
import boxesIcon from "../../public/images/boxes-icon.png";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="ghostyak.com 홈">
          <Image src={boxesIcon} alt="" width={38} height={38} />
          <span>ghostyak.com</span>
        </Link>
        <nav aria-label="주요 메뉴">
          <a href="#features">주요 기능</a>
          <a href="#download">다운로드</a>
        </nav>
      </div>
    </header>
  );
}
