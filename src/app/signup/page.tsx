'use client';

import { useForm } from 'react-hook-form';
import { User } from '@/types/auth';
import Link from 'next/link';
import { RocketIcon } from 'lucide-react';
import FormField from '@/components/common/form-field';
import { useSignUp } from '@/hooks/useSignUp';
import Button from '@/components/common/button';

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<User>({ mode: 'onChange' });

  const signUp = useSignUp();

  const onSubmit = (data: User) => {
    signUp(data);
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
        className="flex flex-col justify-center gap-4 w-75 md:w-100"
      >
        <div className="flex flex-col gap-2">
          <FormField>
            <FormField.Label htmlFor="email" className="text-sm font-bold">
              이메일
            </FormField.Label>
            <FormField.Input
              id="email"
              placeholder="이메일을 입력해주세요"
              type="email"
              className="input-md input-primary"
              {...register('email', {
                required: '이메일은 필수 입력 항목입니다',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: '이메일 형식이 올바르지 않습니다',
                },
              })}
            />
            <FormField.ErrorMessage className="text-sm text-custom-dark-green">
              {errors.email?.message}
            </FormField.ErrorMessage>
          </FormField>
        </div>

        <div className="flex flex-col gap-2">
          <FormField>
            <FormField.Label htmlFor="nickname" className="text-sm font-bold">
              닉네임
            </FormField.Label>
            <FormField.Input
              id="nickname"
              placeholder="2자 이상, 12자 이하로 입력해주세요"
              type="nickname"
              className="input-md input-primary"
              {...register('nickname', {
                required: '닉네임은 필수 입력 항목입니다',
                minLength: {
                  value: 2,
                  message: '닉네임은 최소 2자 이상이어야 합니다.',
                },
                maxLength: {
                  value: 12,
                  message: '닉네임은 최대 10자까지 입력할 수 있습니다.',
                },
              })}
            />
            <FormField.ErrorMessage className="text-sm text-custom-dark-green">
              {errors.nickname?.message}
            </FormField.ErrorMessage>
          </FormField>
        </div>

        <div className="flex flex-col gap-2">
          <FormField>
            <FormField.Label htmlFor="password" className="text-sm font-bold">
              비밀번호
            </FormField.Label>
            <FormField.Input
              id="password"
              aria-describedby="password-desc"
              placeholder="8자 이상, 특수문자 1개 이상 포함해주세요"
              type="password"
              className="input-md input-primary"
              {...register('password', {
                required: '비밀번호는 필수 입력 항목입니다',
                pattern: {
                  value: /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                  message: '8자 이상, 특수문자 1개 이상 포함해주세요',
                },
              })}
            />
            <FormField.Description id="password-desc">
              8자 이상, 특수문자 1개 이상 포함해주세요
            </FormField.Description>

            <FormField.ErrorMessage className="text-sm text-custom-dark-green">
              {errors.password?.message}
            </FormField.ErrorMessage>
          </FormField>
        </div>

        <div className="flex flex-col gap-2">
          <FormField>
            <FormField.Label
              htmlFor="confirmPassword"
              className="text-sm font-bold"
            >
              비밀번호 확인
            </FormField.Label>
            <FormField.Input
              id="confirmPassword"
              aria-describedby="password-desc"
              placeholder="8자 이상, 특수문자 1개 이상 포함해주세요"
              type="password"
              className="input-md input-primary"
              {...register('confirmPassword', {
                required: '비밀번호를 한 번 더 입력해주세요',
                validate: (value) =>
                  value === watch('password') || '비밀번호가 일치하지 않습니다',
              })}
            />
            <FormField.Description id="confirmPassword-desc">
              비밀번호를 한 번 더 입력해주세요
            </FormField.Description>

            <FormField.ErrorMessage className="text-sm text-custom-dark-green">
              {errors.confirmPassword?.message}
            </FormField.ErrorMessage>
          </FormField>
        </div>

        <Button type="submit" className="rounded-md button-md button-primary">
          회원가입
        </Button>
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
