# 개발 가이드

## 요구사항

- Node.js 22.12 이상
- npm

## 시작하기

```sh
npm install
npm run dev
```

Tailwind CSS와 DaisyUI는 npm 개발 의존성으로 설치되며 `npm install` 시 함께 준비된다. GhostYak 테마는 `src/app/globals.css`, PostCSS 연결은 `postcss.config.mjs`에서 관리한다.

## 주요 명령어

```sh
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버
npm run lint     # ESLint 검사
```

변경을 완료하기 전에 `npm run lint`와 `npm run build`를 실행한다.

## 작업 규칙

- 한 번에 로드맵의 작은 작업 하나를 구현한다.
- Next.js App Router와 Server Component를 우선한다.
- 브라우저 API나 상태가 필요할 때만 `"use client"`를 추가한다.
- 새로운 의존성은 기존 기능으로 해결하기 어려울 때만 추가한다.
- 신규·개편 UI는 DaisyUI 컴포넌트와 의미 기반 테마 클래스를 우선 사용한다.
- 레이아웃, 간격과 반응형 동작은 Tailwind CSS 유틸리티를 우선 사용한다.
- 사용자 정의 CSS는 DaisyUI와 Tailwind CSS로 요구사항을 표현할 수 없을 때만 추가한다.
- UI 작업 전 [DESIGN.md](./DESIGN.md)를 확인하고 독자적인 레거시 컴포넌트 CSS를 다시 추가하지 않는다.
- 모바일 화면을 먼저 고려하고 넓은 화면으로 확장한다.
- 링크와 버튼은 키보드로 사용할 수 있어야 한다.
- 제품 버전과 다운로드 URL을 여러 파일에 중복해서 작성하지 않는다.
- 제품·에디션·다운로드 경로는 `/{lang}/products/boxes/...` 계층을 사용하고, 기존 영문 `/products/boxes/...` 경로도 유지한다.
- 다운로드 카운트다운을 수정할 때 자동 다운로드와 직접 링크가 같은 설치 파일 URL을 사용하는지 확인한다.
- 지원 언어와 경로는 `src/locales.ts`, 언어별 문구는 `src/i18n.ts`에서 관리한다.
- 생성물인 `.next/`, `out/`, `node_modules/`는 커밋하지 않는다.

## 정적 파일

- favicon과 그대로 제공할 이미지는 `public/`에 둔다.
- 작은 설치 파일은 `public/downloads/`에 둘 수 있다.
- 큰 설치 파일은 외부 릴리스 저장소에 올리고 HTTPS URL로 연결한다.

## 문서 관리

- 작업 순서와 완료 여부: [ROADMAP.md](./ROADMAP.md)
- 구조와 기술 결정: [ARCHITECTURE.md](./ARCHITECTURE.md)
- UI와 디자인 시스템: [DESIGN.md](./DESIGN.md)
- 검색엔진 인증과 sitemap 제출: [SEO.md](./SEO.md)
- 구조가 변경되면 코드와 관련 문서를 함께 수정한다.
