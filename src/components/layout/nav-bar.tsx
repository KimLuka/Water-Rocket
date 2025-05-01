'use client';

import { supabase } from '@/lib/supabaseClient';
import { useAuthStore } from '@/store/authStore';
import { RocketIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '../ui/button';

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
    <header className="sticky top-0 z-50">
      <nav className="flex items-center justify-between h-16 px-4 bg-transparent md:px-7 dark:bg-custom-navy">
        <Link
          href="/"
          aria-label="홈페이지"
          className="flex items-center gap-2"
        >
          <RocketIcon className="w-6 h-6 text-custom-light-green" />
          <span className="text-xl font-bold">물로켓</span>
        </Link>
        <ul className="flex gap-2 font-bold text-md md:text-lg">
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
                {/* <Button type="button" buttonLabel="로그아웃" /> */}
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="bg-transparent border-none dark:text-white dark:bg-transparent"
                    size="sm"
                  >
                    로그인
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/signup">
                  <Button
                    variant="outline"
                    size="sm"
                    className="dark:text-white dark:bg-black dark:border dark:border-custom-light-gray"
                  >
                    회원가입
                  </Button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
