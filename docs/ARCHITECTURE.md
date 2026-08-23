# 아키텍처

## 개요

ghostyak.com은 Vercel에 배포하는 Next.js 애플리케이션이다. 현재는 Boxes 제품 소개와 다운로드 페이지를 제공하며, 이후 Lemon Squeezy 결제 웹훅과 자체 라이선스 API를 같은 애플리케이션에 추가한다.

## 기술 구성

- Next.js 16 App Router
- React 19
- TypeScript strict 설정
- React Server Components와 CSS
- npm 패키지 관리
- Vercel 배포

페이지와 컴포넌트는 기본적으로 Server Component로 만들고 브라우저 상태나 상호작용이 필요한 부분만 Client Component로 분리한다.

## 디렉터리 역할

```text
public/          그대로 배포할 이미지와 아이콘
src/app/         App Router 페이지, 레이아웃과 전역 스타일
src/components/ 재사용 가능한 React 컴포넌트
src/data/        제품과 다운로드 정보
docs/            설계, 개발, 로드맵 문서
```

현재 홈페이지는 `[lang]` 동적 세그먼트 아래의 언어별 레이아웃과 페이지, 헤더·푸터·기능 카드·에디션 카드, 제품 데이터 및 번역 모듈로 구성한다. `/ko`와 `/en`은 정적으로 생성하며 `/` 요청은 브라우저의 `Accept-Language`에 따라 한국어 또는 영어 주소로 리디렉션한다. 제품 데이터는 공통 버전과 다운로드 URL을 관리하고 `src/i18n.ts`는 언어별 화면 문구와 메타데이터를 관리한다. 언어별 레이아웃은 canonical과 hreflang을 포함한 검색·소셜 메타데이터를 제공하고, `src/app/sitemap.ts`와 `src/app/robots.ts`는 검색엔진용 `/sitemap.xml`과 `/robots.txt`를 생성한다. API와 데이터베이스 계층은 결제 및 라이선스 작업을 시작할 때 추가한다.

## 설계 원칙

- 마케팅 페이지는 가능한 한 정적으로 렌더링한다.
- 제품 정보는 한곳에서 관리하고 여러 페이지에서 재사용한다.
- 공통 UI만 컴포넌트로 분리하고 작은 마크업은 페이지에 유지한다.
- 이미지와 다운로드 파일은 빌드에 포함할 필요가 없으면 `public`에 둔다.
- 다운로드 파일이 크거나 릴리스가 잦으면 GitHub Releases 같은 외부 저장소를 사용한다.
- 클라이언트 JavaScript는 사용자 경험에 필요한 경우에만 추가한다.
- 결제 웹훅과 라이선스 API는 App Router Route Handler로 구현한다.

## 목표 페이지

- `/ko`: Ghostyak과 Boxes를 소개하는 한국어 홈페이지
- `/en`: Ghostyak과 Boxes를 소개하는 영어 홈페이지
- `/`: 브라우저 언어에 따라 한국어 또는 영어 홈페이지로 이동
- `/products/boxes`: Boxes 상세 정보와 다운로드 안내
- `/products`: 제품이 둘 이상일 때 추가할 제품 목록

자세한 구현 순서는 [ROADMAP.md](./ROADMAP.md)를 따른다.
