import { login } from '@/api/login';
import { useRouter } from 'next/navigation';

export function useLogin() {
  const router = useRouter();

  return async (email: string, password: string) => {
    const { error } = await login(email, password);
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
      router.push('/');
    }
  };
}
