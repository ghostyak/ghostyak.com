# 아키텍처

## 개요

ghostyak.com은 Vercel에 배포하는 Next.js 애플리케이션이다. 영어를 기본 진입 언어로 하고 9개 로케일 접두사 경로에서 GhostYak 브랜드, Boxes 제품 소개와 무료 설치 파일, Clock과 OSINTS 웹앱 링크, CSV Search Engine의 DFIR 제품 소개와 GitHub 링크, Folder History 제품 소개와 무료 설치 파일, Markdown 블로그를 제공한다. 국제화는 기본 URL과 별개로 한국어 콘텐츠를 유일한 원문으로 삼으며 세부 기준은 [INTERNATIONALIZATION.md](./INTERNATIONALIZATION.md)를 따른다.

## 기술 구성

- Next.js 16 App Router와 React 19
- TypeScript strict 설정과 React Server Components
- Tailwind CSS 4와 shadcn/ui (Radix UI, Lucide)
- `gray-matter`로 Markdown frontmatter 파싱
- `unified`, `remark-parse`, `remark-rehype`, `rehype-stringify`로 Markdown을 안전한 HTML로 변환
- 서버 전용 로케일 사전 로더와 TypeScript 사전 구조 검증
- Vercel Analytics, Google Analytics와 Google AdSense 공통 로더

AdSense는 공통 head에서 일반 `<script async>`로 로드한다. `next/script`가 자동으로 추가하는 `data-nscript` 속성을 AdSense가 지원하지 않기 때문이다. Google Analytics는 기존 `next/script`의 `afterInteractive` 방식을 유지한다.

페이지와 컴포넌트는 Server Component가 기본이다. 공개 랜딩에서는 `LanguageSwitcher`, `CopySiteLink`와 공통 헤더의 `NavDropdown`을 사용자 조작을 위해 Client Component로 둔다. 제품 메뉴의 링크와 로케일 경로는 서버의 `Header`에서 전달한다. FAQ와 설치 도움말의 shadcn Accordion도 작은 클라이언트 경계로 둔다. 사용하지 않는 자동 회전·다운로드 타이머·이전 세계시계 컴포넌트는 제거했다.

## 주요 구조

```text
content/blog/{locale}/           한국어 원문과 언어별 Markdown 블로그
public/images/demo/              교체 가능한 데모 화면 이미지
src/app/                         App Router 페이지와 메타데이터
src/app/product/boxes/           기존 Boxes URL (Proxy에서 영어 canonical로 이동)
src/app/[locale]/                영어와 한국어를 포함한 9개 언어의 canonical 경로
src/components/                  공통 헤더, 푸터와 동작 컴포넌트
src/data/products.ts             언어 중립 제품, 다운로드와 이미지 데이터
src/i18n/                        로케일 레지스트리, 원문 사전과 서버 로더
src/proxy.ts                     URL 정규화와 로케일 요청 처리
src/lib/blog.ts                  Markdown 조회와 변환
docs/                            설계, 개발과 로드맵 문서
```

`src/app/layout.tsx`가 요청 로케일에 맞는 문서 언어, 공통 메타데이터, 헤더, 푸터와 추적 스크립트를 제공한다. 모든 표시 문구와 접근성 이름은 한국어 원문과 언어별 사전에서 읽는다. 사전은 서버에서 불러오고 Client Component에는 필요한 문자열만 props로 전달한다.

## 공개 경로

- `/{locale}`: GhostYak 브랜드 홈과 제품 카드, 블로그 진입점
- `/{locale}/product/boxes`: Boxes 제품 랜딩
- `/{locale}/product/csv-search-engine`, `/{locale}/product/folder-history`: 제품 랜딩
- `/{locale}/support`: 후원 랜딩
- `/{locale}/blog`, `/{locale}/blog/[slug]`: Markdown 목록과 글
- `/{locale}/product/boxes/download`: 같은 언어 제품의 `#download`로 308 이동
- `/`, `/product/...`, `/blog/...`, `/support`: 영어 `/en/...`로 308 이동하는 legacy 경로

`src/proxy.ts`는 영어를 포함한 URL 로케일만 사용한다. 쿠키·브라우저 언어·IP 기반 이동이나 rewrite는 없다. `/products/boxes/...` 별칭, 다운로드 경로, 끝 슬래시와 공개 호스트 정규화를 한 번의 308로 처리한다. `next.config.ts`는 기본 끝 슬래시 이동을 비활성화하여 Proxy와 중복 이동하지 않게 한다. `/en`과 `/ko`를 포함한 9개 언어는 같은 동적 `[locale]` 경로를 사용하며, 기존 무접두사 페이지 모듈은 Proxy 뒤에 유지한다. sitemap·canonical·hreflang·OpenGraph·내부 링크는 `localizedPath`를 공유하고 x-default는 같은 콘텐츠의 영어 URL이다.

`RenewalLanding`은 제품 소개에 사용하는 Server Component다. `getLandingMetadata`는 승인된 원문 기반 제목·설명과 실제 스크린샷을 검색·공유 메타데이터로 제공한다. `getSoftwareApplicationJsonLd`에는 같은 무료 기능 목록과 최신 확인 버전 v0.3.38을 사용한다. 루트 레이아웃의 밝은 공통 헤더 하나만 고정하며 제품·블로그·언어 선택을 제공한다. 다운로드는 제품 본문에서 제공한다. 제품명 `Boxes`를 가장 큰 H1으로 표시하고 기존 소개 문구와 실제 스크린샷을 중앙에 순서대로 배치한다. 스크린샷 아래의 링크 복사 영역과 제품 섹션 목차는 제거했다. 언어 선택은 공통 헤더에서 한 번만 렌더링한다. 제품 랜딩도 공통 푸터를 사용하고 공개 방문 분석은 유지한다.

공개 승인된 한국어 원문은 `src/i18n/landing/ko.ts`, Server Component는 `src/components/renewal/RenewalLanding.tsx`에 둔다. 클립보드 동작은 `CopySiteLink`, FAQ·도움말은 shadcn Accordion 클라이언트 경계로 분리한다. 2026-09-07 사용자가 한국어 원문을 승인했다. `src/i18n/landing/{locale}.ts`를 각 공개 사전의 `landing` 키로 가져오며 빌드 중 모든 언어의 키를 검증한다. 상세 범위는 [RENEWAL_KO.md](./RENEWAL_KO.md)를 따른다.

공개 랜딩의 제품 스크린샷·외부 링크와 세계시계 예시 데이터는 `src/data/landing.ts`에서 관리한다. 설치 파일은 공개 화면과 같은 `boxes.download.installerUrl`을 사용하며 모든 다운로드 버튼에서 직접 연결한다. 구역 이동·원본 이미지 보기는 서버 HTML과 네이티브 브라우저 동작으로, FAQ는 shadcn Accordion으로 제공한다. 설치 안내의 PC용 링크 복사는 전달받은 현재 언어의 제품 경로를 사용한다.

## 제품과 콘텐츠 데이터

랜딩의 설치 문제 해결 도움말은 shadcn Accordion이며 기본적으로 접혀 있다. Runtime 감지 스크립트는 사용하지 않는다.

Boxes의 버전, 설치 파일 URL과 실제 이미지 경로, Clock과 OSINTS의 외부 URL은 `src/data/products.ts`에서 관리한다. 설명, 기능, 파일 크기 표시와 이미지 대체 텍스트는 한국어 원문 사전에서 관리한다. 현재 다운로드 대상은 GitHub Releases의 무료 설치 파일 하나다. 상업용 에디션은 실제 설치 파일과 정책이 준비될 때 데이터 모델과 UI에 추가한다.

홈 카드와 제품 첫 화면은 `boxes.preview`의 PNG 경로와 원본 크기를 공유한다. `boxes.screenshots`, 검색·공유 메타데이터와 sitemap도 같은 이미지를 사용한다. `landingMedia.photoDetail`은 사진 위젯의 확대 설명에 사용할 기존 스크린샷을 별도로 유지한다.

한국어 블로그 원문은 `content/blog/ko/*.md`, 번역은 `content/blog/{locale}/*.md`에 저장한다. 각 글은 `title`, `description`, `publishedAt`, `translationKey`, `sourceRevision` frontmatter를 가져야 한다. `src/lib/blog.ts`가 로케일별 디렉터리를 읽고 파일명을 slug로 사용해 최신 날짜순으로 정렬한다. 빌드 중 모든 공개 언어가 원문과 같은 번역 키, 리비전과 slug를 사용하는지 검사한다.

## 설계 원칙

- shadcn/ui 컴포넌트와 의미 기반 테마 토큰을 우선한다.
- 레이아웃과 반응형 동작은 Tailwind CSS 유틸리티로 표현한다.
- 애니메이션은 `prefers-reduced-motion`을 존중한다.
- 설치 파일 URL과 교체 이미지 경로를 페이지에 중복 작성하지 않는다.
- 다운로드 안내 페이지는 검색 색인에서 제외한다.
- robots.txt는 모든 공개 콘텐츠의 크롤링을 허용하고 언어 선택 처리 경로만 제외하며 대표 도메인과 sitemap을 안내한다.
- sitemap은 모든 공개 언어의 홈, Boxes, 블로그와 각 Markdown 글 및 언어 대체 URL을 포함한다.
- 번역은 확정된 한국어 원문에서만 파생하며 누락된 번역을 한국어 fallback으로 숨기지 않는다.

모든 공개 페이지는 공통 헤더와 푸터를 공유한다. 주요 사이트 탐색과 언어 변경은 전체 문서 탐색을 유지하며 블로그 내부 탐색에는 Next.js Link를 사용한다.
## shadcn/ui 구성

`components.json`은 New York 스타일, RSC, Tailwind v4와 소스 별칭을 정의한다. `src/components/ui/`의 공식 레지스트리 소스를 프로젝트에서 소유하며 `src/lib/utils.ts`의 `cn`으로 Tailwind 클래스를 병합한다. `globals.css`에는 의미 기반 테마 토큰과 기본 접근성 규칙을 둔다. DaisyUI는 제거했다. 메뉴는 Radix DropdownMenu로 키보드 포커스와 닫힘 처리를 관리한다.

홈은 Boxes·Clock·OSINTS·CSV Search Engine·Folder History의 동일한 크기 카드와 블로그 진입 영역으로 구성한다. 블로그 목록은 카드, 상세는 좁은 본문 폭을 사용한다. 모든 공개 페이지는 루트 레이아웃의 본문 건너뛰기 링크와 공통 푸터를 공유한다.

홈과 두 제품 페이지는 `PageHero` Server Component로 제목·설명·배지·행동 버튼·보조 문구를 구성한다. 타이포그래피와 상하 여백은 이 컴포넌트에서 관리하며 페이지는 현재 언어의 문구와 링크만 전달한다. `heroActionClassName`은 제품 히어로 버튼의 크기를 공유한다.
## CSV Search Engine

홈의 `CsvSearchCard`는 디지털포렌식·침해사고대응(DFIR) 제품 CSV Search Engine을 사진 없이 소개하는 Server Component다. 제품명·제품 경로·GitHub 주소·직접 다운로드 URL·스크린샷 경로와 원본 크기는 `src/data/products.ts`의 `csvSearchEngine`에서 관리한다. 문구는 각 사전의 `csvSearch`에 둔다. 소개 버튼, 공통 제품 메뉴와 푸터는 현재 언어의 `/product/csv-search-engine`으로 연결한다.

`CsvSearchProduct`는 실제 스크린샷 두 장과 Windows 설치 파일 다운로드, GitHub 링크를 제공하는 Server Component다. 9개 언어 접두사 경로를 지원하며 `csv-search-metadata.ts`에서 canonical·언어 대체 URL·공유 이미지를 설정한다. sitemap에도 모든 공개 언어의 제품 경로와 이미지를 포함한다.

CSV Search Engine 상세페이지 `CsvSearchProduct`는 Server Component이며 공통 `ProductLanding`에 제품 데이터와 사전 `csvSearch` 문구를 전달한다. FAQ Accordion만 클라이언트 경계다. 자동 슬라이드 `ScreenshotSlideshow`는 삭제했다. 공유 메타데이터 제목은 `csvSearch.metadataTitle`, 설명은 `csvSearch.description`이다.

`NavDropdown`은 명시적 아이콘 키와 그룹 데이터를 받는다. `윈도우즈 생산성`(Boxes·Folder History), `웹앱`(Clock·OSINTS), `디지털포렌식`(CSV Search Engine) 세 그룹을 제공한다. 분류 이름은 루트 레이아웃이 사전의 `productCategories.windowsProductivity`·`productCategories.webApps`와 `csvSearch.category`에서 읽어 `Header`에 전달한다. 홈의 `ProductCategory`도 같은 분류와 순서를 쓰며 푸터 링크도 이 순서를 따른다. 헤더 메뉴 순서는 제품, 블로그, 후원하기, 언어다. 후원하기는 드롭다운이 아니라 후원 랜딩(`/support`, `supportPagePath`)으로 가는 일반 링크다. 후원 수단은 `src/data/support.ts`의 `supportLinks`(id·이름·URL·공식 로고)에서 관리하며 후원 랜딩과 푸터 외부 링크가 같은 목록을 쓴다. 토스아이디 같은 새 수단은 이 목록과 각 사전의 `supportPage.methods.items`에 같은 id로 추가한다. 후원 메뉴 이름은 사전의 `header.support`다. 그룹은 shadcn DropdownMenuGroup·Label·Separator를 사용하며 접근성 이름을 연결한다.

## Folder History

`FolderHistoryProduct`는 Folder History 상세페이지를 그리는 Server Component이며 공통 `ProductLanding`(히어로·사용 방법·주요 기능·남색 안내·FAQ·다운로드)을 사용한다. FAQ Accordion만 클라이언트 경계로 둔다. 제품명·제품 경로·플랫폼·GitHub 저장소·직접 다운로드 URL(`releases/latest/download/Folder.History_x64-setup.exe`)·스크린샷 경로와 원본 크기는 `src/data/products.ts`의 `folderHistory`에서 관리한다. 문구는 각 사전의 `folderHistory`에 두며 무료 배지는 `home.products.freeBadge`, 저장소 링크 문구는 `csvSearch.repositoryAction`을 재사용한다. `/en/product/folder-history`를 포함한 9개 접두사 경로를 제공하고, 메타데이터는 `src/i18n/folder-history-metadata.ts`, sitemap 항목은 `src/app/sitemap.ts`에 둔다. 홈 카드, 공통 제품 메뉴와 푸터는 현재 언어의 상세페이지로 연결한다.

`SupportContent`는 후원 랜딩(`/{locale}/support`의 9개 접두사 경로)을 그리는 Server Component다. 클라이언트 경계가 없다. 문구는 사전의 `supportPage`, 메타데이터는 `src/i18n/support-metadata.ts`, sitemap 항목은 `src/app/sitemap.ts`에 둔다. 섹션 제목과 텍스트 링크 스타일은 `ProductLanding`의 `SectionHeading`·`textLink`를 재사용한다. Instagram·Threads·GitHub 주소는 `src/data/social.ts`에서 푸터와 공유한다.

## 공유 UI

`src/components/ShareLinks.tsx`는 제품 상세 페이지 다운로드 구역과 블로그 글 끝에서 X·Facebook·LinkedIn·Threads로 현재 페이지를 공유하는 링크를 제공한다. Instagram은 기기 공유 메뉴를 열고, 미지원 환경에서는 canonical URL을 복사한다. 페이지와 문구는 Server Component가 로케일 사전에서 전달하고 브라우저 공유·클립보드 접근에 필요한 이 컴포넌트만 Client Component로 둔다.
