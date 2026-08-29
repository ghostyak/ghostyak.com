# 아키텍처

## 개요

ghostyak.com은 Vercel에 배포하는 Next.js 애플리케이션이다. 현재 공개 화면은 한국어를 기본으로 GhostYak 브랜드, Boxes 제품 소개와 무료 설치 파일, Markdown 블로그를 제공한다.

## 기술 구성

- Next.js 16 App Router와 React 19
- TypeScript strict 설정과 React Server Components
- Tailwind CSS 4와 DaisyUI 5
- `gray-matter`로 Markdown frontmatter 파싱
- `unified`, `remark-parse`, `remark-rehype`, `rehype-stringify`로 Markdown을 안전한 HTML로 변환
- Vercel Analytics, Google Analytics와 Google AdSense 공통 로더

페이지와 컴포넌트는 Server Component가 기본이다. 자동 회전에 타이머와 사용자 조작이 필요한 `AutoCarousel`, 다운로드 지연이 필요한 `DownloadCountdown`만 Client Component로 둔다.

## 주요 구조

```text
content/blog/                    Markdown 블로그 글
public/images/demo/              교체 가능한 데모 화면 이미지
src/app/                         App Router 페이지와 메타데이터
src/app/product/boxes/           Boxes 소개와 무료 다운로드 경로
src/components/                  공통 헤더, 푸터와 동작 컴포넌트
src/data/products.ts             제품, 다운로드, 회전 이미지 데이터
src/lib/blog.ts                  Markdown 조회와 변환
docs/                            설계, 개발과 로드맵 문서
```

`src/app/layout.tsx`가 모든 공개 경로에 한국어 문서 언어, 공통 메타데이터, 헤더, 푸터와 추적 스크립트를 제공한다. 헤더와 정적 페이지는 Server Component로 유지한다.

## 공개 경로

- `/`: 회전형 제품 히어로, Boxes 제품 카드와 블로그 진입점
- `/product/boxes`: Boxes 이름, 하나의 무료 다운로드 버튼, 자동 회전 데모 화면과 주요 기능
- `/product/boxes/download`: 5초 후 무료 설치 파일을 내려받는 안내 화면
- `/blog`: Markdown 글 목록
- `/blog/[slug]`: 정적으로 생성하는 Markdown 글 상세 화면

기존 `/products/boxes/...`와 이전 언어 경로는 `next.config.ts`의 영구 리디렉션으로 새 대표 경로에 연결한다. 다국어 화면과 상업용 에디션은 현재 공개 범위에 포함하지 않는다.

## 제품과 콘텐츠 데이터

Boxes의 버전, 설치 파일 URL, 기능과 데모 이미지 경로는 `src/data/products.ts`에서 관리한다. 현재 다운로드 대상은 GitHub Releases의 무료 설치 파일 하나다. 상업용 에디션은 실제 설치 파일과 정책이 준비될 때 데이터 모델과 UI에 추가한다.

블로그 글은 `content/blog/*.md`에 저장한다. 각 글은 `title`, `description`, `publishedAt` frontmatter를 가져야 한다. `src/lib/blog.ts`가 파일명을 slug로 사용하고 최신 날짜순으로 목록을 정렬하며, App Router의 `generateStaticParams`가 상세 페이지를 정적으로 생성한다.

## 설계 원칙

- DaisyUI의 의미 기반 컴포넌트와 테마를 우선한다.
- 레이아웃과 반응형 동작은 Tailwind CSS 유틸리티로 표현한다.
- 애니메이션은 `prefers-reduced-motion`을 존중한다.
- 설치 파일 URL과 교체 이미지 경로를 페이지에 중복 작성하지 않는다.
- 다운로드 안내 페이지는 검색 색인에서 제외한다.
- sitemap은 홈, Boxes, 블로그와 각 Markdown 글을 포함한다.
