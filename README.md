# 물로켓

- 추진력은 넘치지만 지속력이 부족한 사람들을 위한 동기부여 플랫폼

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
/water-rocket
├── public/                     # 공개 정적 파일 (favicon, 이미지 등)
│   └── rocket.png
│   └── ...
│
├── src/                        # 모든 소스코드
│   ├── app/                   # Next.js 13+ 라우팅 구조
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── (routes)
│   │       ├── login/page.tsx
│   │       ├── signup/page.tsx
│   │       ├── todos/page.tsx
│   │       ├── missions/page.tsx
│   │       └── rocket/page.tsx
│
│   ├── domains/                # 도메인 중심 구조 (DDD)
│   │   ├── auth/              # 인증 관련
│   │   │   ├── application/   # useLogin, useSignup 등
│   │   │   ├── domain/        # Entity, Types, Validation 등
│   │   │   ├── infrastructure/ # supabase-auth 등 외부 연동
│   │   │   └── ui/            # AuthForm 등 컴포넌트
│   │   ├── todo/              # 할 일 관리
│   │   ├── mission/           # 미션 할당/수락/보상
│   │   └── rocket/            # 로켓 성장/경험치/발사
│
│   ├── shared/                # 도메인에 종속되지 않는 공통 리소스
│   │   ├── components/
│   │   │   ├── ui/            # Button, FormInput 등 공용 UI
│   │   │   └── layout/        # NavBar 등 레이아웃 컴포넌트
│   │   ├── context/           # 전역 컨텍스트
│   │   ├── hooks/             # 공용 커스텀 훅
│   │   ├── lib/               # 유틸 함수, Supabase 클라이언트 등
│   │   │   ├── errorGuards.ts
│   │   │   └── supabaseClient.ts
│   │   ├── store/             # Zustand, Recoil 등 상태 관리
│   │   ├── styles/            # 글로벌 스타일
│   │   │   └── globals.css
│   │   └── types/             # 공용 타입
│   │       └── auth.d.ts
│
├── .gitignore
├── README.md
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── package.json
└── pnpm-lock.yaml (or yarn.lock / package-lock.json)
```
