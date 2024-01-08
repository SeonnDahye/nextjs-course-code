import Link from "next/link";

import S from "./main-header.module.css";

function MainHeader() {
  return (
    <header className={S.header}>
      <div className={S.logo}>
        <Link href={"/"}>로고</Link>
      </div>
      <nav className={S.navigation}>
        <ul>
          <li>
            <Link href="/events">모든 이벤트 보기</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
