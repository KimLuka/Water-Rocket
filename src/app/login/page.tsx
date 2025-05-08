'use client';

import FormField from '@/components/common/form-field';
import Button from '@/components/ui/button';
import { useLogin } from '@/hooks/useLogin';
import { User } from '@/types/auth';
import { RocketIcon } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({ mode: 'all' });

  const login = useLogin();

  const onSubmit = (data: User) => {
    login(data.email, data.password);
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
        <div className="flex flex-col gap-2">
          <FormField id="email">
            <FormField.Label className="text-sm font-bold">
              이메일
            </FormField.Label>
            <FormField.Input
              placeholder="이메일을 입력해주세요"
              type="email"
              className="input-base"
              {...register('email', {
                required: '이메일은 필수 입력 항목입니다',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: '이메일 형식이 올바르지 않습니다',
                },
              })}
            />
            <FormField.ErrorMessage
              message={errors.email?.message}
              className="text-sm text-custom-dark-green"
            />
          </FormField>
        </div>

        <div className="flex flex-col gap-2">
          <FormField id="password">
            <FormField.Label className="text-sm font-bold">
              비밀번호
            </FormField.Label>
            <FormField.Input
              id="password"
              aria-describedby="password-desc"
              placeholder="8자 이상, 특수문자 1개 이상 포함해주세요"
              type="password"
              className="input-base"
              {...register('password', {
                required: '비밀번호는 필수 입력 항목입니다',
                pattern: {
                  value: /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                  message: '8자 이상, 특수문자 1개 이상 포함해주세요',
                },
              })}
            />
            <FormField.Description
              description="8자 이상, 특수문자 1개 이상 포함해주세요"
              className="sr-only"
            />

            <FormField.ErrorMessage
              message={errors.password?.message}
              className="text-sm text-custom-dark-green"
            />
          </FormField>
        </div>
        <Button type="submit">로그인</Button>
      </form>

      <div className="mt-4 text-sm text-center">
        계정이 없으신가요?{' '}
        <Link
          href="/signup"
          className="text-custom-light-green hover:underline"
        >
          회원가입
        </Link>
      </div>
    </div>
  );
}
