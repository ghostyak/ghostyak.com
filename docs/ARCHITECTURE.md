# 아키텍처

## 개요

ghostyak.com은 Vercel에 배포하는 Next.js 애플리케이션이다. 현재 공개 화면은 한국어를 기본으로 GhostYak 브랜드, Boxes 제품 소개와 무료 설치 파일, Markdown 블로그를 제공한다. 국제화는 한국어 콘텐츠를 유일한 원문으로 삼아 단계적으로 추가하며 세부 기준은 [INTERNATIONALIZATION.md](./INTERNATIONALIZATION.md)를 따른다.

## 기술 구성

- Next.js 16 App Router와 React 19
- TypeScript strict 설정과 React Server Components
- Tailwind CSS 4와 DaisyUI 5
- `gray-matter`로 Markdown frontmatter 파싱
- `unified`, `remark-parse`, `remark-rehype`, `rehype-stringify`로 Markdown을 안전한 HTML로 변환
- 서버 전용 로케일 사전 로더와 TypeScript 사전 구조 검증
- Vercel Analytics, Google Analytics와 Google AdSense 공통 로더

페이지와 컴포넌트는 Server Component가 기본이다. 자동 회전에 타이머와 사용자 조작이 필요한 `AutoCarousel`, 다운로드 지연이 필요한 `DownloadCountdown`만 Client Component로 둔다.

## 주요 구조

```text
content/blog/ko/                 한국어 Markdown 블로그 원문
public/images/demo/              교체 가능한 데모 화면 이미지
src/app/                         App Router 페이지와 메타데이터
src/app/product/boxes/           Boxes 소개와 무료 다운로드 경로
src/components/                  공통 헤더, 푸터와 동작 컴포넌트
src/data/products.ts             언어 중립 제품, 다운로드와 이미지 데이터
src/i18n/                        로케일 레지스트리, 원문 사전과 서버 로더
src/lib/blog.ts                  Markdown 조회와 변환
docs/                            설계, 개발과 로드맵 문서
```

`src/app/layout.tsx`가 모든 공개 경로에 한국어 문서 언어, 공통 메타데이터, 헤더, 푸터와 추적 스크립트를 제공한다. 현재 모든 표시 문구와 접근성 이름은 `src/i18n/dictionaries/ko.ts`의 한국어 원문 사전에서 읽는다. 사전은 서버에서 불러오고 Client Component에는 필요한 문자열만 props로 전달한다.

## 공개 경로

- `/`: 회전형 제품 히어로, Boxes 제품 카드와 블로그 진입점
- `/product/boxes`: Boxes 이름, 하나의 무료 다운로드 버튼, 자동 회전 데모 화면과 주요 기능
- `/product/boxes/download`: 5초 후 무료 설치 파일을 내려받는 안내 화면
- `/blog`: Markdown 글 목록
- `/blog/[slug]`: 정적으로 생성하는 Markdown 글 상세 화면

기존 `/products/boxes/...`와 이전 언어 경로는 `next.config.ts`의 리디렉션으로 현재 대표 경로에 연결한다. 현재는 한국어만 공개한다. `/ko/...`는 접두사를 제거한 한국어 대표 경로로 영구 이동하고, 과거에 공개했지만 아직 번역이 준비되지 않은 `/en/...` 등의 경로는 같은 한국어 콘텐츠로 임시 이동해 로케일 구조 변경만으로 404가 발생하지 않게 한다. 국제화 구현 후에도 접두사 없는 경로는 한국어 대표 URL로 유지하고 번역 경로만 `/{locale}/...` 접두사를 사용한다.

## 제품과 콘텐츠 데이터

Boxes의 버전, 설치 파일 URL과 데모 이미지 경로는 `src/data/products.ts`에서 관리한다. 설명, 기능, 파일 크기 표시와 이미지 대체 텍스트는 한국어 원문 사전에서 관리한다. 현재 다운로드 대상은 GitHub Releases의 무료 설치 파일 하나다. 상업용 에디션은 실제 설치 파일과 정책이 준비될 때 데이터 모델과 UI에 추가한다.

한국어 블로그 원문은 `content/blog/ko/*.md`에 저장한다. 각 글은 `title`, `description`, `publishedAt`, `translationKey`, `sourceRevision` frontmatter를 가져야 한다. `src/lib/blog.ts`가 로케일별 디렉터리를 읽고 파일명을 slug로 사용해 최신 날짜순으로 정렬하며, App Router의 `generateStaticParams`가 상세 페이지를 정적으로 생성한다.

## 설계 원칙

- DaisyUI의 의미 기반 컴포넌트와 테마를 우선한다.
- 레이아웃과 반응형 동작은 Tailwind CSS 유틸리티로 표현한다.
- 애니메이션은 `prefers-reduced-motion`을 존중한다.
- 설치 파일 URL과 교체 이미지 경로를 페이지에 중복 작성하지 않는다.
- 다운로드 안내 페이지는 검색 색인에서 제외한다.
- sitemap은 홈, Boxes, 블로그와 각 Markdown 글을 포함한다.
- 번역은 확정된 한국어 원문에서만 파생하며 누락된 번역을 한국어 fallback으로 숨기지 않는다.
