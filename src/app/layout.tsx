import type { Metadata } from 'next';
import '@/styles/globals.css';
import AuthProvider from '@/components/auth-provider';

export const metadata: Metadata = {
  title: '물로켓 | 힘차게 날아올라 스리슬쩍 쉬어가는 당신에게',
  description:
    '습관, 재밌게 기를 순 없을까요? 할 일, 여유 있을 때 알려드릴까요?',
  keywords:
    '습관 기르기, 포기하지 않기, 꾸준함, 취준생 루틴, 갓생, 추진력, 목표 달성, 습관 만들기, 생산성 높이기, 자기개발, 동기 부여',
  creator: 'Luka Kim',

  // Open Graph 태그 (소셜 미디어 미리보기 설정)
  openGraph: {
    type: 'website',
    title: '물로켓',
    description:
      '금방 추진력을 잃는 당신. 이 링크를 보낸 친구와 함께라면 2단 물로켓이 될 수 있어요.',
    url: 'https://water-rocket.vercel.app/', // 웹사이트 URL
    siteName: '물로켓',
    images: [
      {
        url: 'https://water-rocket.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '물로켓 Open Graph Image',
      },
    ],
  },

  // Twitter 카드 설정 (트위터 미리보기 설정)
  twitter: {
    card: 'summary_large_image', // 트위터 카드 형식 설정
    title: '물로켓 | 갓생까지는 좀 부담스러운 당신에게', // 트위터 카드 제목
    description:
      '물로켓 3행시: 물렁한 결심, 로그아웃은 이제 그만, 켓으로 시작하는 평범한 단어가 없어요..대신 3행시 해주세요',
    images: 'https://water-rocket.vercel.app/twitter-card-image.jpg', // 트위터 카드 이미지 (서비스 대표 이미지 또는 로고)
  },

  // 추가 메타 태그 (기본적인 SEO 개선)
  viewport: 'width=device-width, initial-scale=1', // 반응형 웹사이트 설정
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <AuthProvider />
        {children}
      </body>
    </html>
  );
}
