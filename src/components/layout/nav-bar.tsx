import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="sticky top-0 left-0 flex items-center justify-between h-20 px-4 bg-black border-b-2 border-custom-gray z-999 md:px-7">
      <Link href="/" aria-label="홈페이지">
        <Image
          src="/logo/logo+text.svg"
          alt="물로켓 로고 이미지"
          width={120}
          height={75}
        />
      </Link>
      <div className="flex gap-5 font-bold text-md md:text-lg">
        <Link href="/login">로그인</Link>
        <Link href="/signup">회원가입</Link>
        <Link href="/contact">문의</Link>
      </div>
    </nav>
  );
}
