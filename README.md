# 물로켓

**물로켓**은 사용자가 **목표 달성**을 위한 **도전과 기록**을 하며, 이를 **동기부여**로 삼아 더 나은 일상을 만들어가도록 돕는 서비스입니다.  
사용자는 다양한 도전 과제를 설정하고, 그 과제를 수행하면서 목표 달성 여부를 기록하고 공유할 수 있습니다.

## 🧩 핵심 기능

- **목표 설정 및 도전 과제 생성**: 사용자가 목표와 도전 과제를 설정하고 관리할 수 있습니다.
- **도전 과제 참여 및 기록**: 도전 과제를 수행하면서 성공/실패 기록을 남길 수 있습니다.
- **도전 과제에 대한 피드백**: 사용자는 각 도전 과제에 대한 피드백을 기록할 수 있습니다.
- **도전 과제 통계**: 성공과 실패 여부를 기반으로 통계를 제공하여 사용자에게 동기부여를 강화합니다.
- **소셜 기능**: 친구와의 도전 과제를 공유하거나 함께 참여할 수 있는 기능을 제공합니다.

## 🛠 기술 스택

| 영역              | 기술                                  |
| ----------------- | ------------------------------------- |
| **프레임워크**    | Next.js (App Router) + TypeScript     |
| **UI 라이브러리** | Tailwind CSS                          |
| **상태 관리**     | React Context API (추후 Zustand 가능) |
| **인증**          | Supabase Auth                         |
| **배포**          | Vercel                                |

## 📁 프로젝트 구조

/water-rocket
├── public/
│ └── favicon.ico
├── src/
│ ├── app/
│ │ ├── page.tsx // 홈 (/)
│ │ ├── login/
│ │ │ └── page.tsx // 로그인 페이지
│ │ ├── signup/
│ │ │ └── page.tsx // 회원가입 페이지
│ │ ├── challenge/
│ │ │ └── page.tsx // 도전 과제 페이지
│ │ ├── feedback/
│ │ │ └── page.tsx // 피드백 페이지
│ │ ├── history/
│ │ │ └── page.tsx // 기록 확인 페이지
│ │ └── layout.tsx // 공통 레이아웃
│
│ ├── components/
│ │ ├── ui/ // 버튼, 인풋 등 재사용 가능한 UI
│ │ │ ├── Button.tsx
│ │ │ └── Input.tsx
│ │ ├── ChallengeCard.tsx // 도전 과제 카드
│ │ ├── FeedbackForm.tsx // 피드백 폼
│ │ └── StatisticsChart.tsx // 통계 차트
│
│ ├── lib/
│ │ ├── supabaseClient.ts // Supabase 연결
│ │ └── notify.ts // 알림 기능 관련
│
│ ├── context/
│ │ └── ChallengeContext.tsx // 도전 과제 상태 관리
│
│ ├── hooks/
│ │ └── useAuth.ts // 인증 상태 확인 훅
│
│ ├── styles/
│ │ └── globals.css // Tailwind + Custom CSS
│
│ ├── types/
│ │ └── index.ts // Challenge, Feedback 등 타입 정의
│
│ └── utils/
│ └── formatDate.ts // 날짜 포맷 유틸
│
├── .env.local // Supabase 키 등 환경 변수
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── package.json

## 🚧 개발 일정 (MVP)

1일차: 프로젝트 세팅, 로그인 및 회원가입 기능
2일차: 도전 과제 생성 및 참여 기능
3일차: 피드백 작성 및 기록 페이지
4일차: 도전 과제 통계 기능 추가
5일차: 소셜 기능 (도전 과제 공유)
6~7일차: 테스트 + UI 개선
