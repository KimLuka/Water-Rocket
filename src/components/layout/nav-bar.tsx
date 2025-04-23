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
    <header>
      <nav className="container sticky top-0 left-0 flex items-center justify-between h-16 px-4 border-b-2 border-custom-gray z-999 md:px-7">
        <Link
          href="/"
          aria-label="홈페이지"
          className="flex items-center gap-2"
        >
          <RocketIcon className="w-6 h-6 text-custom-light-green" />
          <span className="text-xl font-bold">물로켓</span>
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
                {/* <Button type="button" buttonLabel="로그아웃" /> */}
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login">
                  <Button type="button" buttonLabel="로그인" />
                </Link>
              </li>
              <li>
                <Link href="/signup">
                  <Button
                    type="button"
                    buttonLabel="회원가입"
                    className="text-white bg-custom-light-green"
                  />
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
