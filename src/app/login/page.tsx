'use client';

import Button from '@/components/ui/button';
import FormInput from '@/components/ui/form-input';
import { supabase } from '@/lib/supabaseClient';
import { User } from '@/types/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const router = useRouter();

  const onSubmit = async (data: User) => {
    const { email, password } = data;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      switch (error.code) {
        case 'invalid_credentials':
          alert('잘못된 이메일 또는 비밀번호입니다.');
          break;
        case 'email_not_verified':
          alert('이메일을 확인해주세요.');
          break;
        default:
          alert('로그인 실패: ' + (error.message || '알 수 없는 오류'));
          break;
      }
    } else {
      console.log('로그인 성공!');
      router.push('/');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] gap-4 md:gap-6">
      <h1 className="text-4xl font-bold md:text-5xl md:mb-2">🛫 로그인</h1>
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

        <Button type="submit">로그인</Button>
        <div className="text-sm text-center">
          계정이 없으신가요?{' '}
          <Link
            href="/signup"
            className="text-custom-light-green hover:underline"
          >
            회원가입
          </Link>
        </div>
        {/* <Button type="button" buttonLabel="이메일로 로그인" /> */}
      </form>
    </div>
  );
}
