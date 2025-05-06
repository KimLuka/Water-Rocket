'use client';

import Button from '@/components/ui/button';
import FormInput from '@/components/ui/form-input';
import { isPostgrestError } from '@/lib/errorGuards';
import { supabase } from '@/lib/supabaseClient';
import { isAuthError } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { User } from '@/types/auth';
import Link from 'next/link';
import { RocketIcon } from 'lucide-react';
// import { useEffect } from 'react';
// import { useDebounce } from 'use-debounce';

const DEFAULT_PROFILE_IMAGE_URL = '/logo/logo.svg';

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    // setError,
    // clearErrors,
    formState: { errors },
  } = useForm<User>({ mode: 'onChange' });

  // const nickname = watch('nickname');
  // const [debouncedNickname] = useDebounce(nickname, 500);

  // const checkDuplicate = async (debouncedNickname: string) => {
  //   const { data } = await supabase
  //     .from('users')
  //     .select('nickname')
  //     .eq('nickname', debouncedNickname)
  //     .single();

  //   return data && data.length > 0;
  // };

  // const checkDuplicate = async (debouncedNickname: string) => {
  //   const { data } = await supabase
  //     .from('users')
  //     .select('nickname')
  //     .eq('nickname', debouncedNickname)
  //     .single();

  //   return data && data.length > 0;
  // };

  // useEffect(() => {
  //   if (
  //     !debouncedNickname ||
  //     debouncedNickname.length < 2 ||
  //     debouncedNickname.length > 12
  //   )
  //     return;

  //   const checkNickname = async () => {
  //     const isDuplicate = await checkDuplicate(debouncedNickname);

  //     if (isDuplicate) {
  //       setError('nickname', {
  //         type: 'manual',
  //         message: '이미 사용 중인 닉네임입니다',
  //       });
  //     } else {
  //       clearErrors('nickname');
  //     }
  //   };
  //   checkNickname();
  // }, [debouncedNickname, setError, clearErrors]);

  const router = useRouter();

  const onSubmit = async (data: User) => {
    const { email, nickname, password } = data;

    try {
      const { data: signUpData, error: signUpError } =
        await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              nickname,
              profile_image_url: DEFAULT_PROFILE_IMAGE_URL,
            },
          },
        });

      if (signUpError) {
        throw new Error();
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

      console.log('회원가입 성공!');
      router.push('/');
    } catch (error: unknown) {
      if (isAuthError(error)) {
        alert(`회원가입 실패: ${error.message}`);
      } else if (isPostgrestError(error)) {
        alert(`DB 저장 실패: ${error.message}`);
      } else if (error instanceof Error) {
        alert(`기타 에러: ${error.message}`);
      } else {
        alert('알 수 없는 오류');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link
        href="/"
        aria-label="로고, 홈페이지 이동 링크"
        className="flex items-center justify-center gap-2 pb-8"
      >
        <RocketIcon className="w-10 h-10 text-custom-light-green" />
        <span className="text-4xl font-bold">물로켓</span>
      </Link>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center gap-4 w-75 md:gap-6 md:w-120"
      >
        <FormInput
          inputLabel="이메일"
          htmlFor="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          required
          patternValue={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
          patternMessage="이메일 형식이 올바르지 않습니다"
          register={register}
          registerName="email"
          errors={errors}
        />

        <FormInput
          inputLabel="닉네임"
          htmlFor="nickname"
          type="text"
          placeholder="2자 이상, 12자 이하로 입력해주세요"
          required
          register={register}
          registerName="nickname"
          minLength
          minLengthValue={2}
          minLengthMessage="닉네임은 최소 2자 이상이어야 합니다"
          maxLength
          maxLengthValue={12}
          maxLengthMessage="닉네임은 12자 이하로 입력해주세요"
          errors={errors}
        />

        <FormInput
          inputLabel="비밀번호"
          htmlFor="password"
          type="password"
          placeholder="8자 이상, 특수문자 1개 이상 포함해주세요"
          required
          patternValue={/^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/}
          patternMessage="8자 이상, 특수문자 1개 이상 포함해주세요"
          register={register}
          registerName="password"
          errors={errors}
        />

        <FormInput
          inputLabel="비밀번호 확인"
          htmlFor="confirmPassword"
          type="password"
          placeholder="비밀번호를 한 번 더 입력해주세요"
          required
          register={register}
          registerName="confirmPassword"
          validate={(value) =>
            value === watch('password') || '비밀번호가 일치하지 않습니다'
          }
          errors={errors}
        />

        <Button type="submit">회원가입</Button>
      </form>
      <div className="mt-4 text-sm text-center">
        계정이 있으신가요?{' '}
        <Link href="/login" className="text-custom-light-green hover:underline">
          로그인
        </Link>
      </div>
    </div>
  );
}
