# 검색엔진 등록과 지역별 SEO

## 구현 범위

각 언어 페이지는 독립 URL, 지역 언어 코드, canonical, 상호 `hreflang`, Open Graph
로케일과 번역된 제목·설명을 제공한다. XML sitemap은 9개 언어의 공개 페이지와 상호
언어 대체 URL, 제품 대표 이미지를 포함한다. 각 Boxes 제품 페이지에는 GhostYak Boxes를 설명하는
`SoftwareApplication` JSON-LD가 서버 렌더링된다.

`/robots.txt`는 모든 공개 페이지의 크롤링을 허용하고 검색 결과용 페이지가 아닌
`/language/` 처리 경로만 제외한다. 대표 호스트는 `https://www.ghostyak.com`, sitemap은
`https://www.ghostyak.com/sitemap.xml`로 안내한다.

| 대상 | 경로 | 언어·지역 코드 | 우선 확인할 검색 도구 |
| --- | --- | --- | --- |
| 영어권 | `/en` | `en` | Google Search Console, Bing Webmaster Tools |
| 대한민국 | `/ko` | `ko` | 네이버 서치어드바이저, Google Search Console |
| 일본 | `/ja` | `ja-JP` | Google Search Console, Bing Webmaster Tools |
| 중국 | `/zh` | `zh-CN` | 바이두 검색자원 플랫폼, Bing Webmaster Tools |
| 스페인 | `/es` | `es-ES` | Google Search Console, Bing Webmaster Tools |
| 독일 | `/de` | `de-DE` | Google Search Console, Bing Webmaster Tools |
| 프랑스 | `/fr` | `fr-FR` | Google Search Console, Bing Webmaster Tools |
| 브라질 | `/pt` | `pt-BR` | Google Search Console, Bing Webmaster Tools |
| 이탈리아 | `/it` | `it-IT` | Google Search Console, Bing Webmaster Tools |

## 소유권 인증 설정

검색 도구에서 HTML 메타 태그 인증을 선택하고 `content` 값만 배포 환경 변수로
등록한다. 로컬에서는 `.env.example`을 참고해 `.env.local`에 설정할 수 있다.

```dotenv
GOOGLE_SITE_VERIFICATION=
BING_SITE_VERIFICATION=
NAVER_SITE_VERIFICATION=
BAIDU_SITE_VERIFICATION=
```

Vercel 환경 변수를 변경한 뒤에는 새 배포가 필요하다. 값이 없는 검색엔진의 인증
메타 태그는 출력하지 않는다.

## 배포 후 등록 절차

1. `https://www.ghostyak.com/en`, `https://www.ghostyak.com/ko` 등의 페이지 소스에서 canonical, `hreflang`, 인증
   메타 태그와 `application/ld+json`을 확인한다.
2. [Google Search Console](https://search.google.com/search-console),
   [Bing Webmaster Tools](https://www.bing.com/webmasters),
   [네이버 서치어드바이저](https://searchadvisor.naver.com/),
   [바이두 검색자원 플랫폼](https://ziyuan.baidu.com/)에서 사이트 소유권을 인증한다.
3. 각 도구에 `https://www.ghostyak.com/sitemap.xml`을 제출한다. Bing은 Google Search
   Console에서 사이트와 sitemap을 가져오는 방식도 지원한다.
4. Google Rich Results Test에서 각 언어 페이지의 `SoftwareApplication` 구조화
   데이터를 검사한다.
5. 색인 범위, 크롤링 오류, 검색어와 노출 페이지를 정기적으로 확인한다.

소유권 인증과 sitemap 제출은 검색엔진이 페이지를 발견하도록 돕지만 색인이나 검색
순위를 보장하지는 않는다. 중국 대상 노출은 바이두 크롤러가 실제 배포 서버와 정적
자산에 안정적으로 접근할 수 있는지도 함께 점검한다.

## 블로그 글

블로그 글의 메타데이터는 `src/i18n/blog-metadata.ts`에서 만든다. 제목·설명·canonical·`hreflang`·Open Graph 게시일을 제공하고, frontmatter에 선택 항목 `image`(public 경로)와 `imageAlt`를 지정하면 Open Graph·트위터 카드 이미지(`summary_large_image`)로 사용한다. 이미지가 없으면 트위터 카드는 `summary`다. `image`를 지정하면 `imageAlt`도 필수이며 빌드 중 검사한다.

모든 블로그 글 본문에는 `BlogPosting` JSON-LD가 서버 렌더링된다(`src/seo.ts`의 `getBlogPostingJsonLd`). 제목, 설명, 게시일, 언어, 절대 URL, 대표 이미지와 작성자·게시자 GhostYak을 포함한다. 배포 후 Rich Results Test로 각 언어의 글을 검사한다.

검색 유입을 위한 글은 제목과 설명(검색 결과 요약문)에 핵심 검색 표현을 넣고, H2 소제목은 실제 검색 문장에 가까운 질문형으로 쓰며, 본문 끝에서 해당 언어의 제품 페이지로 내부 링크를 연결한다.

## canonical URL 정책 (2026-09-24)

대표 origin은 `https://www.ghostyak.com`이며 콘텐츠 URL에는 끝 슬래시와 tracking query를 넣지 않는다. 모든 9개 언어에 접두사를 사용한다. canonical, OpenGraph URL, JSON-LD의 페이지/게시자 URL, sitemap과 내부 링크는 같은 정책을 사용한다. SoftwareApplication의 `@id`는 언어별 페이지 주소가 아닌 기존 제품 식별자로 유지한다. Twitter에는 별도 페이지 URL 필드가 없다. WebSite·WebPage·BreadcrumbList JSON-LD는 현재 구현되어 있지 않다.

| 요청 경로 | 상태 | 목적지/역할 |
| --- | --- | --- |
| `/` | 308 | `/en` 진입점 |
| `/en`, `/ko` | 200 | 영어·한국어 canonical 홈 |
| `/product/boxes` | 308 | `/en/product/boxes` |
| `/en/product/boxes`, `/ko/product/boxes` | 200 | 언어별 canonical |
| `/product/csv-search-engine` | 308 | `/en/product/csv-search-engine` |
| `/en/product/csv-search-engine`, `/ko/product/csv-search-engine` | 200 | 언어별 canonical |
| `/product/folder-history`, `/blog`, `/blog/{slug}`, `/support` | 308 | 같은 `/en/...` 콘텐츠 |
| `/{locale}/product/boxes/download` | 308 | `/{locale}/product/boxes#download` |
| `/products/boxes/...`, `/{locale}/products/boxes/...` | 308 | 최종 언어별 Boxes 제품(다운로드 별칭은 `#download`) |
| `/{locale}/.../` | 308 | 끝 슬래시 없는 경로 |
| `/xx/...`, `/docs`, 존재하지 않는 글 | 404 | 미공개 콘텐츠 |

무접두사 URL의 목적지는 기존 기본 언어인 영어다. 사용자 설정·Accept-Language·IP·국가로 바꾸지 않는다. `/en`과 `/ko`는 설정에 관계없이 200이며 한국어 HTML lang/hreflang은 `ko`, 영어는 `en`이다. x-default는 같은 콘텐츠의 200 영어 페이지다. 모든 번역은 빌드에서 대응 원문/slug/리비전을 검증한다. sitemap은 200 canonical만 포함하며 홈 진입점, 다운로드 별칭, language 처리 경로, 404는 포함하지 않는다.

리디렉션의 query는 보존하지만 canonical/alternate/OpenGraph에는 포함하지 않는다. Proxy는 legacy·끝 슬래시·공개 호스트와 프로토콜을 함께 정규화한다. localhost와 preview 호스트는 강제 이동하지 않는다. Vercel이 앱보다 먼저 처리하는 HTTPS·도메인 이동은 저장소에서 확인할 수 없으므로 배포 후 HTTP/HTTPS × apex/www 네 가지 요청의 최종 주소와 hop 수를 재검증해야 한다.

기존 코드에서는 `/en/...`가 무접두사 영어 URL로 308 이동한 뒤 쿠키/Accept-Language에 따라 다른 언어로 307 이동할 수 있었다. sitemap의 영어 URL도 같은 조건부 이동에 노출되었다. 메타데이터가 서로 다른 정책을 쓰던 것이 아니라 공통 URL 정책과 요청 언어 감지가 충돌한 문제였다. IP/국가 감지와 rewrite는 없었다. 한국어 블로그의 제품 링크 2개, 영어 블로그 링크 3개, 언어 메뉴의 중간 이동을 직접 canonical 링크로 수정했다. 기타 서브도메인은 이번 조사·수정 대상이 아니다.

검증 명령은 [DEVELOPMENT.md](./DEVELOPMENT.md)의 `test:seo`를 따른다. 배포 후 sitemap을 다시 제출하고 `/en`, `/ko`와 주요 제품의 URL 검사를 요청한다. 기존 무접두사 URL에 “리디렉션이 포함된 페이지”가 남는 것은 의도된 결과다. 그 수를 0으로 만들기보다 canonical 200, 직접 내부 링크, redirect 없는 sitemap과 상호 alternate가 유지되는지 확인한다. 실제 재색인 시점은 배포만으로 보장하지 않는다.

참고: [Google 다국어 사이트 가이드](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites)는 언어별 URL과 직접 언어 선택 링크를 권장하며 언어 추정에 따른 자동 이동을 피하도록 설명한다.

## 작업 검증 기록 (2026-09-24)

- `npm run lint`, `npm run build`, `npm run test:seo` 통과.
- 로컬 프로덕션 서버에서 sitemap의 108개 URL을 전수 검사했다. 전부 200, self canonical, 상호 hreflang, 올바른 HTML lang, indexable 상태와 일치하는 OpenGraph를 확인했다. 렌더링된 내부 링크와 JSON-LD, tracking query, 상충하는 쿠키/언어 헤더, 404와 robots도 통과했다.
- 56개 legacy/슬래시/다운로드/언어 설정 조합은 308 한 번으로 200 canonical에 도달했다. 로컬 Host/전달 프로토콜 검사에서 HTTP apex·www와 HTTPS apex는 최종 HTTPS www URL로 이동하고 HTTPS www canonical은 200으로 루프 없이 응답했다.
- 배포 전 운영 서버의 `/en/product/boxes`에 HEAD 요청을 보냈다. `http://ghostyak.com`은 HTTPS apex → HTTPS www → 무접두사 영어 제품으로 3회, `https://ghostyak.com`은 2회, `http://www.ghostyak.com`은 2회, `https://www.ghostyak.com`은 1회 이동해 마지막에 200이었다. 이는 아직 기존 코드가 서비스 중인 결과다.
- 이번 코드는 배포하지 않았다. Vercel의 HTTP → HTTPS 및 apex → www 이동은 앱 실행 전 계층에서 발생하므로 앱 내부의 단일 이동 검증과 구분한다. 배포 후 `/en/...`의 역방향 이동이 사라졌는지 다시 확인하고, HTTP apex 요청의 CDN 추가 hop은 Vercel 도메인 설정에서 별도 점검한다.
