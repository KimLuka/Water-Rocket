import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="sticky top-0 left-0 flex items-center justify-between h-20 px-4 bg-black border-b-2 border-custom-gray z-999 md:px-7">
      logo
      <div className="flex gap-5 text-md md:text-lg">
        <Link href="/login">로그인</Link>
        <Link href="/signup">회원가입</Link>
        <Link href="/contact">문의</Link>
      </div>
    </nav>
  );
}
