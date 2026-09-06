# 개발 가이드

## 요구사항과 실행

- Node.js 22.12 이상
- npm

```sh
npm install
npm run dev
```

변경을 완료하기 전에 다음 검사를 모두 실행한다.

```sh
npm run lint
npm run build
```

## 작업 규칙

- Next.js App Router와 Server Component를 기본으로 사용한다.
- 브라우저 상태, 이벤트 또는 타이머가 필요한 가장 작은 경계만 Client Component로 만든다.
- 신규·개편 UI는 DaisyUI 컴포넌트와 의미 기반 테마 클래스를 우선한다.
- Tailwind CSS 유틸리티로 레이아웃, 간격과 반응형 동작을 구성한다.
- UI 작업 전 [DESIGN.md](./DESIGN.md)를 확인한다.
- 표시 문구나 국제화 경로를 수정하기 전 [INTERNATIONALIZATION.md](./INTERNATIONALIZATION.md)를 확인한다.
- 320px 너비에서도 가로 스크롤 없이 핵심 메뉴와 행동을 사용할 수 있게 한다.
- 생성물인 `.next/`, `out/`, `node_modules/`는 커밋하지 않는다.

## 공개 랜딩과 개발 시안 검토

`npm run dev` 후 `/preview/boxes`에서 한국어 시안을 확인한다. `NODE_ENV=development`일 때만 접근할 수 있으며 언어 쿠키와 브라우저 언어에 관계없이 한국어로 제공한다. 프로덕션 빌드에서는 시안 콘텐츠가 열리지 않아야 한다.

- 승인된 공개 원문: `src/i18n/landing/ko.ts`
- 공개·시안 공용 화면: `src/components/renewal/RenewalLanding.tsx`
- 클립보드 동작: `src/components/renewal/CopySiteLink.tsx`
- 범위와 한국어 검토 항목: [RENEWAL_KO.md](./RENEWAL_KO.md)

320px·768px·데스크톱에서 가로 넘침, 제목·버튼 줄바꿈, FAQ 키보드 조작과 다운로드 앵커를 확인한다. 링크 복사는 성공 메시지와 실패 시 직접 복사할 주소 입력란을 제공한다. 2026-09-07 승인된 원문은 공개 사전의 `landing` 키에 연결되어 있다. 수정 시 `src/i18n/landing/ko.ts`를 먼저 확정한 뒤 나머지 8개 언어를 맞춘다. 공개 `/`, `/product/boxes`는 시안 배너 없이 같은 컴포넌트를 사용한다. 기존 다운로드 경로는 같은 언어의 `/#download`로 이동한다.

## 제품 정보와 데모 이미지

Boxes의 버전, 무료 설치 파일 URL과 제품 이미지 목록은 `src/data/products.ts`에서 수정한다. 기능 문구는 로케일 사전에서 관리한다. 공개 랜딩의 실제 스크린샷은 `public/images/renewal/boxes-desktop.webp`다. 기존 데모 파일은 랜딩에서 사용하지 않는다.

랜딩의 위젯 문구는 `landing.widgets`, 예시 시점·도시 시간대·외부 링크는 `src/data/landing.ts`에서 관리한다. 세계시계는 고정 예시이며 현재 로케일의 날짜 형식을 사용한다.

제품의 모든 다운로드 버튼은 하나의 공식 설치 파일로 연결한다. 상업용 설치 파일과 배포 정책이 확정되기 전에는 Pro 또는 구매 행동을 추가하지 않는다.

## 블로그 글 작성

한국어 블로그 원문은 `content/blog/ko/`에 영문 소문자와 하이픈으로 된 파일명으로 추가한다. 파일명이 한국어 대표 URL의 slug가 된다.

```md
---
title: "글 제목"
description: "목록과 검색 메타데이터에 사용할 설명"
publishedAt: "2026-08-29"
translationKey: "stable-content-id"
sourceRevision: 1
---

Markdown 본문
```

필수 frontmatter가 없거나 `sourceRevision`이 숫자가 아니면 빌드가 오류를 표시한다. 한국어 글의 의미가 바뀌면 `sourceRevision`을 올린다. Markdown 안의 임의 HTML은 렌더링하지 않으며, React 컴포넌트를 글에 삽입하지 않는다.

## 국제화 작업

- 한국어 콘텐츠를 먼저 작성하고 화면·접근성·메타데이터 검수를 끝낸 뒤 번역한다.
- 번역 언어에서 한국어 원문에 없는 기능이나 약속을 추가하지 않는다.
- 한국어도 페이지와 컴포넌트에 하드코딩하지 않고 원문 사전에서 읽는다.
- 지원 로케일은 필수 화면과 메타데이터를 모두 번역한 뒤 공개한다.
- 누락 번역은 한국어로 자동 대체하지 않고 검사에서 실패시킨다.
- 블로그 번역은 한국어 글의 `translationKey`와 원문 리비전에 연결한다.
- 번역 글은 현재 한국어 원문과 같은 파일명 slug와 `sourceRevision`을 사용한다.
- 새 번역 로케일은 필수 UI와 블로그를 모두 번역한 뒤 `src/i18n/locales.ts`의 공개 목록과 사전 로더에 추가한다.
- `npm run build`는 공개 사전의 빈 문자열·placeholder와 블로그 번역의 원문 리비전을 검사한다.
- 브라우저 자동 감지와 언어 쿠키 동작은 `src/proxy.ts`, 언어 선택 이동은 `src/app/language/[locale]/route.ts`에서 관리한다.

라우팅, 사전 구조, 번역 문체, SEO와 완료 조건은 [국제화 및 번역 기준](./INTERNATIONALIZATION.md)을 따른다.

한국어 원문 사전은 `src/i18n/dictionaries/ko.ts`, 번역 사전은 같은 디렉터리의 로케일별 파일, 로케일 상태는 `src/i18n/locales.ts`에서 관리한다. 표시 문구를 추가할 때는 페이지에 직접 작성하지 않고 한국어 사전에 의미 기반 키를 먼저 추가한 뒤 모든 공개 사전에 번역한다. 언어 중립 값만 `src/data/`에 둔다.

## 정적 파일

설치 안내는 자동 실행을 기본 절차로 설명한다. WebView2 링크는 접힌 도움말 안에만 있어야 하며 키보드로 열고 닫을 수 있어야 한다. 사진 안내는 실제 메뉴 `사진 뷰어 → 시작`과 일치시킨다.

랜딩 수정 시 320px·390px·768px·데스크톱에서 메뉴와 가로 넘침을 확인한다. 무료 다운로드 링크가 설치 파일로 직접 연결되는지, 설치 안내 구역 이동 후 제목이 헤더에 가리지 않는지, FAQ 키보드 조작과 PC 링크 복사가 동작하는지 확인한다. 이미지 출처와 제품·설치 정보의 근거는 [RENEWAL_KO.md](./RENEWAL_KO.md)에 기록한다. 시안 검증에서 설치 파일을 실행할 필요는 없다.

- favicon과 그대로 제공할 이미지는 `public/`에 둔다.
- 큰 설치 파일은 GitHub Releases 같은 외부 저장소에 두고 HTTPS URL을 연결한다.
- 실제 설치 파일로 바꾸기 전 다운로드 URL과 버전 정보를 함께 확인한다.

## 배포 검증

이 저장소는 GitHub `main` 변경을 Vercel Production에 자동 배포한다. 커밋 전 lint·build, 공개 9개 언어의 홈·제품·다운로드 이동·메타데이터와 블로그를 검사한다. 배포 후 GitHub deployment 상태와 실제 도메인 응답을 확인한다. 개발 시안은 프로덕션에서 404와 noindex를 유지한다.
