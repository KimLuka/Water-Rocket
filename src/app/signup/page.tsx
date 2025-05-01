'use client';

import Button from '@/components/ui/button';
import FormInput from '@/components/ui/form-input';
import { isPostgrestError } from '@/lib/errorGuards';
import { supabase } from '@/lib/supabaseClient';
import { isAuthError } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { User } from '@/types/auth';

const DEFAULT_PROFILE_IMAGE_URL = '/logo/logo.svg';

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<User>();

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
    <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] gap-4 md:gap-6">
      <h1 className="text-4xl font-bold md:text-5xl md:mb-2">👋🏻 회원가입</h1>
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
          patternValue={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
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
        {/* <Button
          type="button"
          buttonLabel="이메일로 회원가입"
        /> */}
      </form>
    </div>
  );
}
