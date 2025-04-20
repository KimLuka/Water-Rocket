'use client';

import { supabase } from '@/lib/supabaseClient';
import { useAuthStore } from '@/store/authStore';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const { user, removeUser } = useAuthStore();
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('로그아웃 실패:', error.message);
    } else {
      removeUser();
      console.log('로그아웃 성공!');
      router.push('/');
    }
  };

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
      <ul className="flex gap-5 font-bold text-md md:text-lg">
        {user ? (
          <>
            {/* <li>
              {user['public']['Tables']['users']['Row']['profile_image_url']}
            </li> */}
            <li>
              <Link href="/myProfile">마이 프로필</Link>
            </li>
            <li>
              {/* <Link href="/">로그아웃</Link> */}
              <button type="button" onClick={handleLogout}>
                로그아웃
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/login">로그인</Link>
            </li>
            <li>
              <Link href="/signup">회원가입</Link>
            </li>
            <li>
              <Link href="/contact">문의</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
