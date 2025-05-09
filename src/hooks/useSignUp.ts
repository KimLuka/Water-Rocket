import { signUp } from '@/api/signUp';
import { DEFAULT_PROFILE_IMAGE_URL } from '@/constants/profile';
import { isPostgrestError } from '@/lib/errorGuards';
import { supabase } from '@/lib/supabaseClient';
import { User } from '@/types/auth';
import { isAuthError, PostgrestError } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

export function useSignUp() {
  const router = useRouter();

  return async (data: User) => {
    const { email, nickname } = data;

    try {
      const { data: signUpData, error: signUpError } = await signUp(data);

      if (signUpError) {
        throw new Error(signUpError.message || '회원가입 중 알 수 없는 오류');
      }

      const userId = signUpData?.user?.id;
      if (!userId) {
        throw new Error('회원 ID가 존재하지 않습니다');
      }

      const { error: insertError } = await supabase.from('users').insert({
        id: userId,
        email,
        nickname,
        profile_image_url: DEFAULT_PROFILE_IMAGE_URL,
        level: 1,
        exp: 0,
        streak: 0,
        rockets: [],
        achievements: {},
      });

      if (insertError) {
        throw insertError;
      }

      router.push('/');
    } catch (error: unknown) {
      if ((error as PostgrestError)?.code === '23505') {
        const message = (error as PostgrestError).message;

        if (message.includes('users_email_key')) {
          alert('이미 등록된 이메일입니다.');
        } else if (message.includes('users_nickname_key')) {
          alert('이미 사용 중인 닉네임입니다.');
        } else {
          alert('중복된 값이 존재합니다.');
        }
      } else if (isAuthError(error)) {
        alert(`회원가입 실패: ${error.message}`);
      } else if (isPostgrestError(error)) {
        alert(`DB 저장 실패: ${error.message}`);
      } else if (error instanceof Error) {
        alert(error.message || '알 수 없는 오류가 발생했습니다.');
      }
    }
  };
}
