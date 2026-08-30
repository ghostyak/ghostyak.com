# 검색엔진 등록과 지역별 SEO

## 구현 범위

각 언어 페이지는 독립 URL, 지역 언어 코드, canonical, 상호 `hreflang`, Open Graph
로케일과 번역된 제목·설명을 제공한다. XML sitemap은 9개 언어의 공개 페이지와 상호
언어 대체 URL, 제품 대표 이미지를 포함한다. 각 Boxes 제품 페이지에는 GhostYak Boxes를 설명하는
`SoftwareApplication` JSON-LD가 서버 렌더링된다.

`/robots.txt`는 모든 공개 페이지의 크롤링을 허용하고 검색 결과용 페이지가 아닌
`/language/` 처리 경로만 제외한다. 대표 호스트는 `https://ghostyak.com`, sitemap은
`https://ghostyak.com/sitemap.xml`로 안내한다.

| 대상 | 경로 | 언어·지역 코드 | 우선 확인할 검색 도구 |
| --- | --- | --- | --- |
| 대한민국 | `/` | `ko-KR` | 네이버 서치어드바이저, Google Search Console |
| 영어권 | `/en` | `en` | Google Search Console, Bing Webmaster Tools |
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

1. `https://ghostyak.com/`, `https://ghostyak.com/en` 등의 페이지 소스에서 canonical, `hreflang`, 인증
   메타 태그와 `application/ld+json`을 확인한다.
2. [Google Search Console](https://search.google.com/search-console),
   [Bing Webmaster Tools](https://www.bing.com/webmasters),
   [네이버 서치어드바이저](https://searchadvisor.naver.com/),
   [바이두 검색자원 플랫폼](https://ziyuan.baidu.com/)에서 사이트 소유권을 인증한다.
3. 각 도구에 `https://ghostyak.com/sitemap.xml`을 제출한다. Bing은 Google Search
   Console에서 사이트와 sitemap을 가져오는 방식도 지원한다.
4. Google Rich Results Test에서 각 언어 페이지의 `SoftwareApplication` 구조화
   데이터를 검사한다.
5. 색인 범위, 크롤링 오류, 검색어와 노출 페이지를 정기적으로 확인한다.

소유권 인증과 sitemap 제출은 검색엔진이 페이지를 발견하도록 돕지만 색인이나 검색
순위를 보장하지는 않는다. 중국 대상 노출은 바이두 크롤러가 실제 배포 서버와 정적
자산에 안정적으로 접근할 수 있는지도 함께 점검한다.
