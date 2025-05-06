# 🚀 물로켓

추진력은 넘치지만 지속력이 부족한 사람들을 위한 할 일 관리 서비스

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
├── images/
/src
├── api/
│   └── login.ts

├── app/
│   ├── layout.tsx              ← 전체 레이아웃 (전역 스타일 등)
│   ├── page.tsx                ← 홈 페이지
│   ├── login/page.tsx
│   ├── signup/page.tsx
│   ├── todos/page.tsx
│   └── (test)/test/page.tsx    ← 테스트용 페이지

├── components/
│   ├── auth-provider.tsx       ← SupabaseProvider 및 AuthContext
│   ├── layout/
│   │   ├── nav-bar.tsx
│   │   └── footer.tsx
│   ├── ui/
│   │   ├── button.tsx
│   │   └── form-input.tsx
│   ├── home/                   ← 홈 구성 요소
│   │   ├── hero-banner.tsx
│   │   ├── call-to-action-section.tsx
│   │   ├── overview-section.tsx
│   │   ├── floating-icons.tsx
│   │   └── scroll-to-overview-button.tsx
│   └── common/form-field/      ← 입력 컴포넌트 모듈화
│       ├── input.tsx, label.tsx, error-message.tsx 등

├── context/                    ← 전역 컨텍스트 (예: 유저, 테마 등)
├── hooks/                      ← 커스텀 훅 (ex. useLogin)
├── lib/
│   ├── supabaseClient.ts       ← Supabase 초기화
│   └── errorGuards.ts          ← 에러 핸들링 유틸
├── store/
│   └── authStore.ts            ← Zustand를 이용한 상태관리
├── styles/
│   └── globals.css             ← 글로벌 스타일
├── types/                      ← 전역 타입 정의
└── utils/                      ← 공통 유틸 함수
```
