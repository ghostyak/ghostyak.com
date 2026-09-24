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
- 신규·개편 UI는 shadcn/ui 컴포넌트와 의미 기반 테마 토큰를 우선한다.
- Tailwind CSS 유틸리티로 레이아웃, 간격과 반응형 동작을 구성한다.
- UI 작업 전 [DESIGN.md](./DESIGN.md)를 확인한다.
- 표시 문구나 국제화 경로를 수정하기 전 [INTERNATIONALIZATION.md](./INTERNATIONALIZATION.md)를 확인한다.
- 320px 너비에서도 가로 스크롤 없이 핵심 메뉴와 행동을 사용할 수 있게 한다.
- 생성물인 `.next/`, `out/`, `node_modules/`는 커밋하지 않는다.

## 공개 랜딩 검토

- 승인된 공개 원문: `src/i18n/landing/ko.ts`
- 공개 화면: `src/components/renewal/RenewalLanding.tsx`
- 클립보드 동작: `src/components/renewal/CopySiteLink.tsx`
- 범위와 한국어 검토 항목: [RENEWAL_KO.md](./RENEWAL_KO.md)

320px·768px·데스크톱에서 가로 넘침, 제목·버튼 줄바꿈, FAQ 키보드 조작과 다운로드 앵커를 확인한다. 링크 복사는 성공 메시지와 실패 시 직접 복사할 주소 입력란을 제공한다. 2026-09-07 승인된 원문은 공개 사전의 `landing` 키에 연결되어 있다. 수정 시 `src/i18n/landing/ko.ts`를 먼저 확정한 뒤 나머지 8개 언어를 맞춘다. 공개 `/`와 `/product/boxes`는 영어, `/ko`와 `/ko/product/boxes`는 한국어를 제공한다. 기존 다운로드 경로는 같은 언어의 `/product/boxes#download`로 이동하며, 새 내부 다운로드 링크는 제품 페이지의 `#download`를 직접 사용한다.

## 제품 정보와 데모 이미지

홈 Boxes 카드와 `/product/boxes`의 첫 화면은 `boxes.preview`의 `public/images/demo/boxes-screen-01.png`(2560×1380)를 사용한다. 원본 비율로 전체 화면을 표시하며 크게 보기·검색·공유·sitemap 이미지도 같은 경로를 사용한다. 사진 위젯의 확대 설명은 `landingMedia.photoDetail`에서 별도로 관리한다.

Boxes 첫 화면은 중앙의 가장 큰 `Boxes` H1, 기존 소개 문구, 다운로드와 실제 스크린샷으로 구성한다. 제품 보조 헤더를 다시 추가하지 않는다. 언어 선택은 공통 헤더 하나이며, 스크린샷 아래에 링크 복사 영역이나 섹션 목차를 추가하지 않는다. 한국어·영어·긴 번역문에서 제품명 크기, 단일 헤더, `scroll-mt-24` 구역 이동, 이미지 전체 표시를 검수한다. 설치 안내의 PC용 링크 복사는 현재 언어의 `/product/boxes` 경로를 유지해야 한다.

홈의 Boxes 카드에서 제품으로 이동한 뒤에도 공통 푸터 하나가 표시되어야 한다. 주요 사이트 링크는 전체 문서 탐색을 유지한다. 공통 헤더에는 다운로드 버튼을 추가하지 않고 제품 본문의 다운로드 링크를 확인한다.

공통 헤더의 제품 메뉴는 `NavDropdown`으로 열고 닫는다. Boxes는 현재 언어의 제품 페이지, Clock과 OSINTS는 새 탭의 외부 웹앱으로 연결한다. 클릭·Enter·Space로 열기, 방향키로 항목 이동, Enter로 선택, Escape·Tab·바깥 클릭으로 닫기와 트리거 포커스 복원을 확인한다.

Boxes의 버전, 무료 설치 파일 URL과 제품 이미지 목록, Clock과 OSINTS의 외부 URL은 `src/data/products.ts`에서 수정한다. 기능 문구는 로케일 사전에서 관리한다. 홈은 네 제품을 카드로 보여주며 Clock과 OSINTS 카드는 브라우저에서 새 탭으로 웹앱을 연다. OSINTS 링크는 공통 헤더 제품 메뉴와 푸터에도 제공한다. `public/images/renewal/boxes-desktop.webp`는 사진 위젯 확대 설명에 사용한다.

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
- `src/proxy.ts`에서 URL 접두사와 legacy 정규화를 처리한다. 언어 메뉴는 `localizedPath`로 같은 콘텐츠의 canonical URL에 직접 연결한다. 브라우저 자동 감지와 쿠키 기반 언어 이동은 사용하지 않는다.

라우팅, 사전 구조, 번역 문체, SEO와 완료 조건은 [국제화 및 번역 기준](./INTERNATIONALIZATION.md)을 따른다.

한국어 원문 사전은 `src/i18n/dictionaries/ko.ts`, 번역 사전은 같은 디렉터리의 로케일별 파일, 로케일 상태는 `src/i18n/locales.ts`에서 관리한다. 표시 문구를 추가할 때는 페이지에 직접 작성하지 않고 한국어 사전에 의미 기반 키를 먼저 추가한 뒤 모든 공개 사전에 번역한다. 언어 중립 값만 `src/data/`에 둔다.

## 정적 파일

설치 안내는 자동 실행을 기본 절차로 설명한다. WebView2 링크는 접힌 도움말 안에만 있어야 하며 키보드로 열고 닫을 수 있어야 한다. 사진 안내는 실제 메뉴 `사진 뷰어 → 시작`과 일치시킨다.

랜딩 수정 시 320px·390px·768px·데스크톱에서 메뉴와 가로 넘침을 확인한다. 무료 다운로드 링크가 설치 파일로 직접 연결되는지, 설치 안내 구역 이동 후 제목이 헤더에 가리지 않는지, FAQ 키보드 조작과 PC 링크 복사가 동작하는지 확인한다. 이미지 출처와 제품·설치 정보의 근거는 [RENEWAL_KO.md](./RENEWAL_KO.md)에 기록한다. 화면 검증에서 설치 파일을 실행할 필요는 없다.

- favicon과 그대로 제공할 이미지는 `public/`에 둔다.
- 기본 파비콘은 `public/favicon.svg`이며 루트 레이아웃의 `icons` 메타데이터로 모든 언어에 적용한다. 중복 아이콘이 자동 등록되지 않도록 `src/app/favicon.ico`와 `src/app/icon.png`는 두지 않는다.
- 큰 설치 파일은 GitHub Releases 같은 외부 저장소에 두고 HTTPS URL을 연결한다.
- 실제 설치 파일로 바꾸기 전 다운로드 URL과 버전 정보를 함께 확인한다.

## 배포 검증

이 저장소는 GitHub `main` 변경을 Vercel Production에 자동 배포한다. 커밋 전 lint·build, 공개 9개 언어의 홈·제품·다운로드 이동·메타데이터와 블로그를 검사한다. 배포 후 GitHub deployment 상태와 실제 도메인 응답을 확인한다.

## shadcn/ui 유지보수

홈·Boxes·CSV Search Engine·Folder History 히어로 수정은 `src/components/PageHero.tsx`를 기준으로 한다. 페이지별 제목 크기·상단 여백을 따로 덮어쓰지 않는다. 320px·768px·데스크톱에서 세 페이지의 제목 크기·설명 줄 높이·배지 간격·버튼 높이를 함께 확인한다.

`components.json`과 `src/components/ui/`를 디자인 시스템의 기준으로 사용한다. 필요 시 `npx shadcn@latest add <component>`로 공식 컴포넌트를 추가하고 변경 내용을 검토한다. 서버 링크는 `buttonVariants`, 조건부 클래스는 `cn`으로 구성한다. 버튼의 번역문이 길면 `h-auto min-h-11 whitespace-normal`을 적용한다. 메뉴와 Accordion 이외의 페이지 전체를 클라이언트 컴포넌트로 바꾸지 않는다.

공통 헤더는 64px/80px 높이이며 모든 주요 구역은 `scroll-mt-24`로 이동 여백을 확보한다. 모바일 메뉴, FAQ·설치 도움말 키보드 조작, 직접 다운로드 URL, 언어 전환, 복사 성공·실패 상태, 본문 건너뛰기 링크와 모션 감소 설정을 검수한다. DaisyUI 의존성과 미사용 자동 회전·다운로드 타이머·이전 세계시계 컴포넌트는 제거했다.
## CSV Search Engine 관리

제품 데이터는 `csvSearchEngine`, 홈 UI는 `CsvSearchCard`, 상세 UI는 `CsvSearchProduct`, 문구는 9개 사전의 `csvSearch`에서 관리한다. 사진은 상세페이지에만 표시한다. 원본 이미지는 `public/images/demo/CSV search Engine.png`(889×484)와 `CSV search Engine 2.png`(879×542)다. 공백이 포함된 이미지 URL과 Next Image 응답을 확인하고, 메뉴의 디지털포렌식 그룹·키보드 이동·현재 언어의 상세페이지 연결·GitHub 링크·320px 줄바꿈을 검수한다. `downloadUrl`은 사용자가 지정한 GitHub Releases의 `csv-search-engine-setup.exe` 직접 다운로드 주소다. 상세페이지의 9개 언어 경로·언어 전환·canonical·sitemap과 다운로드 주소를 확인한다. 기능 설명의 근거는 [공개 README](https://github.com/ghostyak/csv-search-engine#readme)이며, 로컬 개발 버전에만 있는 기능을 공개 설명에 넣지 않는다.

홈 제품 카드 크기를 변경할 때 네 카드의 2열 너비·행 높이, 240px 미리보기, 하단 행동 버튼 정렬을 함께 검수한다. 모바일에서는 본문 길이에 따라 높이가 늘어날 수 있으며 이미지는 자르지 않는다.

CSV 상세페이지는 공통 `ProductLanding`을 쓰므로 Folder History 페이지와 함께 검수한다. 제품 설명의 근거는 공개 저장소 README(`ghostyak/csv-search-engine`)와 개발 저장소의 사용자 가이드·`docs/OFFLINE_FREE.md`다. 사용 조건(비상업적 용도 무료, 상업적 사용 금지)이 바뀌면 배지·FAQ·다운로드 설명을 한국어 원문부터 고쳐 승인받는다. 스크린샷 순서는 `CsvSearchProduct`의 `screenshotOrder`에서 정한다.

## 후원 수단 관리

후원 수단은 `src/data/support.ts`의 `supportLinks` 한 곳에서 관리한다. 새 수단을 추가할 때는 목록에 항목(id·이름·URL·공식 로고 경로와 원본 크기)을 넣고, 서비스가 공개한 공식 로고 SVG를 `public/images/support/`에 원본 그대로 저장한 뒤(색·비율 변경 금지), 같은 id로 9개 사전의 `supportPage.methods.items`에 설명을 추가한다(한국어 원문 먼저). 사전 키가 빠지면 TypeScript와 빌드 검증이 실패한다. 후원 랜딩과 푸터에 자동으로 표시된다.

## Folder History 관리

제품 설명의 근거는 Folder History 저장소(`ghostyak/folder-history`)의 README와 `docs/`다. 앱 동작이 바뀌면 한국어 `folderHistory` 원문을 먼저 고쳐 승인받은 뒤 8개 번역에 반영한다. 설치 파일 이름이나 저장소가 바뀌면 `src/data/products.ts`의 `folderHistory.downloadUrl`·`url`만 수정한다. 스크린샷은 `public/images/folder-history/`에 두며 교체 시 `folderHistory.screenshots`의 원본 크기와 각 사전의 대체 텍스트·캡션을 함께 갱신한다.

## SEO URL 회귀 검증

`npm run lint`와 `npm run build` 후 별도 터미널에서 `npm run start -- --port 3100`을 실행하고 `npm run test:seo`로 검증한다. 다른 서버는 `npm run test:seo -- https://www.ghostyak.com`으로 지정한다. Node 내장 fetch/assert만 사용하며 새 테스트 프레임워크는 필요 없다.

검증은 sitemap 전체 페이지의 200·self canonical·상호 hreflang·HTML lang·indexability·OpenGraph·JSON-LD·본문/공통 내부 링크, 무접두사 URL과 별칭의 단일 308, 끝 슬래시, 추적 query, 상충하는 언어 쿠키/헤더, 404, robots를 검사한다. 로컬에서는 Host 헤더로 공개 호스트 정규화도 검사한다. CDN의 HTTP/HTTPS와 apex/www 리디렉션은 앱에 도달하기 전에 실행될 수 있으므로 배포 후 실제 4개 origin 변형도 확인한다. 언어 메뉴는 같은 콘텐츠로 전체 문서 탐색하며 스타일과 컴포넌트 경계는 유지한다.

## 페이지 공유

`ShareLinks`는 제품 랜딩과 블로그 글에서 공유 네트워크 URL 및 canonical 페이지 주소를 받는다. 플랫폼별 링크 생성, 기기 공유와 복사 상태는 이 컴포넌트의 작은 Client Component 경계에 둔다. UI 문구는 한국어 사전의 `share` 원문에서 시작하며 모든 공개 언어의 같은 키·자리표시자를 완성한 뒤 공개한다.
