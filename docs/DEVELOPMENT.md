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
- 320px 너비에서도 가로 스크롤 없이 핵심 메뉴와 행동을 사용할 수 있게 한다.
- 생성물인 `.next/`, `out/`, `node_modules/`는 커밋하지 않는다.

## 제품 정보와 데모 이미지

Boxes의 버전, 무료 설치 파일 URL, 기능 문구와 회전 이미지 목록은 `src/data/products.ts`에서 수정한다. 실제 이미지가 준비되면 `public/images/demo/`에 파일을 추가하고 `homeSlides`와 `boxes.screenshots`의 `src`만 교체한다.

제품 화면에는 현재 무료 다운로드 버튼 하나만 둔다. 상업용 설치 파일과 배포 정책이 확정되기 전에는 Pro 또는 구매 행동을 추가하지 않는다.

## 블로그 글 작성

블로그 글은 `content/blog/`에 영문 소문자와 하이픈으로 된 파일명으로 추가한다. 파일명이 URL slug가 된다.

```md
---
title: "글 제목"
description: "목록과 검색 메타데이터에 사용할 설명"
publishedAt: "2026-08-29"
---

Markdown 본문
```

필수 frontmatter가 없으면 빌드가 오류를 표시한다. Markdown 안의 임의 HTML은 렌더링하지 않으며, React 컴포넌트를 글에 삽입하지 않는다.

## 정적 파일

- favicon과 그대로 제공할 이미지는 `public/`에 둔다.
- 큰 설치 파일은 GitHub Releases 같은 외부 저장소에 두고 HTTPS URL을 연결한다.
- 실제 설치 파일로 바꾸기 전 다운로드 URL과 버전 정보를 함께 확인한다.
