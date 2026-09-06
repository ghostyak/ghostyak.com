# 아키텍처

## 개요

ghostyak.com은 Vercel에 배포하는 Next.js 애플리케이션이다. 한국어를 기본으로 8개 번역 언어에서 GhostYak 브랜드, Boxes 제품 소개와 무료 설치 파일, Markdown 블로그를 제공한다. 국제화는 한국어 콘텐츠를 유일한 원문으로 삼으며 세부 기준은 [INTERNATIONALIZATION.md](./INTERNATIONALIZATION.md)를 따른다.

## 기술 구성

- Next.js 16 App Router와 React 19
- TypeScript strict 설정과 React Server Components
- Tailwind CSS 4와 DaisyUI 5
- `gray-matter`로 Markdown frontmatter 파싱
- `unified`, `remark-parse`, `remark-rehype`, `rehype-stringify`로 Markdown을 안전한 HTML로 변환
- 서버 전용 로케일 사전 로더와 TypeScript 사전 구조 검증
- Vercel Analytics, Google Analytics와 Google AdSense 공통 로더

페이지와 컴포넌트는 Server Component가 기본이다. 공개 랜딩에서는 `LanguageSwitcher`와 `CopySiteLink`만 사용자 조작을 위해 Client Component로 둔다. 이전 자동 회전·다운로드 타이머 컴포넌트는 랜딩에서 사용하지 않는다.

## 주요 구조

```text
content/blog/{locale}/           한국어 원문과 언어별 Markdown 블로그
public/images/demo/              교체 가능한 데모 화면 이미지
src/app/                         App Router 페이지와 메타데이터
src/app/product/boxes/           Boxes 소개와 무료 다운로드 경로
src/app/[locale]/                8개 번역 언어의 대응 경로
src/components/                  공통 헤더, 푸터와 동작 컴포넌트
src/data/products.ts             언어 중립 제품, 다운로드와 이미지 데이터
src/i18n/                        로케일 레지스트리, 원문 사전과 서버 로더
src/proxy.ts                     브라우저 언어 감지와 로케일 요청 처리
src/lib/blog.ts                  Markdown 조회와 변환
docs/                            설계, 개발과 로드맵 문서
```

`src/app/layout.tsx`가 요청 로케일에 맞는 문서 언어, 공통 메타데이터, 헤더, 푸터와 추적 스크립트를 제공한다. 모든 표시 문구와 접근성 이름은 한국어 원문과 언어별 사전에서 읽는다. 사전은 서버에서 불러오고 Client Component에는 필요한 문자열만 props로 전달한다.

## 공개 경로

- `/`: 바탕화면 정리 중심 히어로와 실제 제품 스크린샷, 정리 방식, 위젯, 무료 정책, FAQ, 설치 안내
- `/product/boxes`: 홈페이지와 같은 승인된 제품 랜딩; 기존 제품 URL과 언어별 canonical 유지
- `/product/boxes/download`: 같은 언어의 홈페이지 `#download` 설치 안내로 307 이동. 파일 다운로드는 사용자가 직접 버튼을 눌러 시작한다.
- `/blog`: Markdown 글 목록
- `/blog/[slug]`: Markdown 글 상세 화면
- `/{locale}/...`: 영어, 일본어, 중국어, 스페인어, 독일어, 프랑스어, 포르투갈어와 이탈리아어의 대응 화면

`src/proxy.ts`는 URL 로케일을 우선하고, 접두사가 없는 최초 방문에서는 사용자 선택 쿠키와 브라우저 `Accept-Language` 순으로 언어를 결정한다. 접두사 없는 경로는 한국어 대표 URL이고 번역 경로는 `/{locale}/...`를 사용한다. `/ko/...`는 접두사를 제거한 한국어 대표 경로로 영구 이동하며 기존 `/products/boxes/...`는 `next.config.ts`에서 현재 제품 경로로 정규화한다.

`RenewalLanding`은 홈과 제품 소개에서 재사용하는 Server Component다. `getLandingMetadata`는 승인된 원문 기반 제목·설명과 실제 스크린샷을 검색·공유 메타데이터로 제공한다. `getSoftwareApplicationJsonLd`에는 같은 무료 기능 목록과 최신 확인 버전 v0.3.38을 사용한다. 루트 레이아웃은 두 랜딩의 자체 헤더·푸터를 사용하고 공개 방문 분석은 유지한다. 블로그는 기존 공통 셸을 사용한다.

## 개발 전용 리뉴얼 시안

`/preview/boxes`는 한국어 리뉴얼 원문과 화면을 검토하는 development 전용 경로다. `src/lib/renewal-preview.ts`의 환경·경로 검사로 제한하며, 프로덕션 페이지에서는 `notFound()`를 반환한다. 개발 환경의 proxy는 이 경로를 한국어로 고정하고 루트 레이아웃은 시안 전용 헤더·푸터 사용을 위해 공개 셸과 추적 스크립트를 생략한다. sitemap에는 등록하지 않으며 `noindex, nofollow` 메타데이터를 제공한다.

공개 승인된 한국어 원문은 `src/i18n/landing/ko.ts`, Server Component는 `src/components/renewal/RenewalLanding.tsx`에 둔다. 클립보드 동작만 `CopySiteLink` Client Component로 분리한다. 2026-09-07 사용자가 한국어 시안을 승인했다. `src/i18n/landing/{locale}.ts`를 각 공개 사전의 `landing` 키로 가져오며 빌드 중 모든 언어의 키를 검증한다. 개발 시안도 같은 한국어 원문을 읽는다. 상세 범위는 [RENEWAL_KO.md](./RENEWAL_KO.md)를 따른다.

공개 랜딩의 제품 스크린샷·외부 링크와 세계시계 예시 데이터는 `src/data/landing.ts`에서 관리한다. 설치 파일은 공개 화면과 같은 `boxes.download.installerUrl`을 사용하며 모든 다운로드 버튼에서 직접 연결한다. 모바일 메뉴·구역 이동·FAQ·원본 이미지 보기는 서버 HTML과 네이티브 브라우저 동작으로 제공한다.

## 제품과 콘텐츠 데이터

랜딩의 설치 문제 해결 도움말은 Server Component 안의 네이티브 `details`/`summary`이며 기본적으로 접혀 있다. 클라이언트 상태나 Runtime 감지 스크립트는 사용하지 않는다.

Boxes의 버전, 설치 파일 URL과 실제 이미지 경로는 `src/data/products.ts`에서 관리한다. 설명, 기능, 파일 크기 표시와 이미지 대체 텍스트는 한국어 원문 사전에서 관리한다. 현재 다운로드 대상은 GitHub Releases의 무료 설치 파일 하나다. 상업용 에디션은 실제 설치 파일과 정책이 준비될 때 데이터 모델과 UI에 추가한다.

한국어 블로그 원문은 `content/blog/ko/*.md`, 번역은 `content/blog/{locale}/*.md`에 저장한다. 각 글은 `title`, `description`, `publishedAt`, `translationKey`, `sourceRevision` frontmatter를 가져야 한다. `src/lib/blog.ts`가 로케일별 디렉터리를 읽고 파일명을 slug로 사용해 최신 날짜순으로 정렬한다. 빌드 중 모든 공개 언어가 원문과 같은 번역 키, 리비전과 slug를 사용하는지 검사한다.

## 설계 원칙

- DaisyUI의 의미 기반 컴포넌트와 테마를 우선한다.
- 레이아웃과 반응형 동작은 Tailwind CSS 유틸리티로 표현한다.
- 애니메이션은 `prefers-reduced-motion`을 존중한다.
- 설치 파일 URL과 교체 이미지 경로를 페이지에 중복 작성하지 않는다.
- 다운로드 안내 페이지는 검색 색인에서 제외한다.
- robots.txt는 모든 공개 콘텐츠의 크롤링을 허용하고 언어 선택 처리 경로만 제외하며 대표 도메인과 sitemap을 안내한다.
- sitemap은 모든 공개 언어의 홈, Boxes, 블로그와 각 Markdown 글 및 언어 대체 URL을 포함한다.
- 번역은 확정된 한국어 원문에서만 파생하며 누락된 번역을 한국어 fallback으로 숨기지 않는다.

공개 랜딩과 블로그는 서로 다른 헤더·푸터를 사용한다. 공통 헤더·푸터의 페이지 링크와 랜딩의 블로그 링크는 전체 문서 탐색으로 전환해 루트 레이아웃이 새 경로에 맞는 셸을 다시 선택하도록 한다. 블로그 목록과 글 사이의 내부 링크는 Next.js Link를 유지한다.
