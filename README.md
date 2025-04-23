# 🚀 물로켓

추진력은 넘치지만 지속력이 부족한 사람들을 위한 동기부여 플랫폼

## 🧩 핵심 기능

- **할 일 인증 및 경험치 시스템**: 인증샷/메모 업로드로 경험치 획득 → 로켓 레벨업 → 발사 가능

- **로켓 발사 & 보상 시스템**: 일정 경험치 달성 시 로켓 발사, 성취감을 주는 보상 제공

- **미션 공유 기능**: 친구나 불특정 사용자에게 미션 할당 → 수락 여부 선택 → 시간 내 완료 시 보상 지급(실패 시 페널티)

## 🛠 기술 스택

- **Frontend:** `JavaScript(ES6+)` `TypeScript` `React` `Next.js`
- **Backend:** `Supabase`(Auth, Database, Storage)
- **State Management & Data Fetching** : `Zustand`
- **Styling** : `HTML` `CSS` `TailwindCSS`
- **Code Quality & Formatting** : `ESLint` `Prettier`
- **Version Control & Collaboration** : `Git` `GitHub`

## 📁 프로젝트 구조

```plaintext
/public
└── logo/
    └── logo.svg               ← 기본 프로필 이미지 등

/src
├── app/
│   ├── layout.tsx             ← 루트 레이아웃 (글로벌 스타일 등 적용)
│   ├── page.tsx               ← 홈 페이지
│   ├── login/
│   │   └── page.tsx           
│   └── signup/
│       └── page.tsx           
│
├── components/
│   ├── auth-provider.tsx      ← SupabaseProvider, AuthContext 등
│   ├── layout/
│   │   └── nav-bar.tsx        ← 네비게이션 바
│   └── ui/
│       ├── button.tsx         ← 공통 버튼 컴포넌트
│       └── form-input.tsx     ← 공통 입력 폼 컴포넌트
│
├── context/                   ← 글로벌 상태용 Context들 (예: 테마, 유저 등)
│
├── hooks/                     ← 커스텀 훅 저장소
│
├── lib/
│   ├── errorGuards.ts         ← 에러 타입 가드 함수들
│   └── supabaseClient.ts      ← supabase 클라이언트 초기화
│
├── store/
│   └── authStore.ts           ← Zustand 등 상태 관리 (ex. 로그인 상태)
│
├── styles/
│   └── globals.css            ← 전역 스타일
│
├── types/
│
└── utils/                     ← 공용 함수 모음
```
