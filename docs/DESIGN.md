# 디자인 시스템

## 기준

2026-09-20 디자인 개편부터 Tailwind CSS 4와 shadcn/ui를 사용한다. 2026-09-24 리뉴얼(`design/site-renewal`)에서 테마를 로고의 남색·금색에 맞췄다. DaisyUI 의존성과 기존 컴포넌트 클래스는 제거했다. 한국어 원문과 번역, 제품 이미지와 다운로드 데이터는 유지한다.

- shadcn 공식 New York 컴포넌트 소스는 `src/components/ui/`에서 관리한다.
- `components.json`은 RSC, TypeScript, Tailwind v4와 Lucide 아이콘을 지정한다.
- SNS 브랜드 아이콘은 트리 셰이킹 가능한 `@icons-pack/react-simple-icons` React 컴포넌트를 단색·동일 크기로 쓴다. 최신 Simple Icons가 브랜드 가이드라인에 따라 제외한 LinkedIn 마크는 공유 UI에서 같은 색·크기의 기존 SVG를 유지한다.
- `src/lib/utils.ts`의 `cn`으로 조건부 클래스와 Tailwind 우선순위를 병합한다.
- 공통 패턴은 Button, Badge, Card, DropdownMenu, Accordion, Input을 우선 사용한다.
- 배치와 반응형 처리는 Tailwind 유틸리티로 작성한다. 글로벌 CSS는 테마, 기본 접근성, 모션 감소 규칙만 관리한다.

## 색상과 타이포그래피

로고(`public/favicon.svg`)의 남색 `#0d1520`과 금색 `#ffd036`을 브랜드 색으로 쓴다. 밝은 영역은 따뜻한 종이색 배경 `#f7f5ef`, 흰 카드, 남색 글자와 남색 주요 버튼을 사용한다. 반복 색상은 `background`, `foreground`, `card`, `primary`, `muted`, `muted-foreground`, `accent`, `border`, `ring` 토큰과 브랜드 토큰 `ink`, `brand`, `brand-foreground`로 표현한다.

- `brand`(금색 채움)는 배지·단계 번호·강조 배경에 쓰고 그 위 글자는 항상 `ink`로 쓴다. 금색을 밝은 배경의 글자색으로 직접 쓰지 않는다.
- `brand-foreground`는 배경 위에서 읽을 수 있는 금색 글자다. 밝은 영역에서는 `#8a5a00`(흰 배경 대비 약 5.9:1), 남색 영역에서는 `#ffd036`이다. 섹션 상단 문구(eyebrow)와 보조 아이콘에 쓴다.
- 남색 강조 영역은 `globals.css`의 `.surface-ink` 클래스를 부모에 지정한다. 이 클래스는 같은 이름의 토큰을 다시 정의하므로 내부의 shadcn 컴포넌트는 별도 변형 없이 어두운 색으로 표시되고 `primary` 버튼은 금색 채움과 남색 글자가 된다.
- 남색 영역은 홈 히어로, 블로그 목록의 최신 글 카드, 블로그 글 머리말, Boxes의 무료 기능 카드·정리 방식 박스 예시·세계시계 예시·다운로드 구역, 공통 푸터에 쓴다.
- 텍스트 링크는 금색 두 줄 밑줄(`decoration-brand decoration-2`)로 표시한다.

큰 제목은 굵기 600과 좁은 자간을 사용한다. 설명은 충분한 줄 간격과 읽을 수 있는 대비를 유지한다. 카드는 `rounded-3xl`, 행동 버튼은 알약형(`rounded-full`)을 기본으로 한다. 주요 콘텐츠의 최대 폭은 `max-w-7xl`, 블로그 본문은 `max-w-3xl`이다.

홈·Boxes·CSV Search Engine·Folder History의 첫 화면은 공통 `PageHero`를 사용한다. 제목은 36px/48px/60px(기본/640px 이상/1024px 이상), 굵기 600, 줄 높이 1.15, 자간 -0.045em으로 통일한다. 설명은 16px/18px, 줄 높이 32px, 최대 폭 672px다. 상단 여백은 56px/96px, 다음 콘텐츠까지 여백은 56px/80px로 맞춘다. 상단 브랜드 문구 또는 배지는 최소 28px 높이이고 제목과 24px 간격을 둔다. 제품 아이콘은 배지에 넣으며 제목 앞에 별도 대형 아이콘이나 장식 마침표를 두지 않는다. 설명·버튼·보조 문구 간격은 각각 24px·32px·20px이며 버튼은 최소 48px 높이로 맞춘다.

## 화면 구성

- 공통 헤더: 종이색 반투명 고정 헤더. GhostYak 로고, 제품 드롭다운, 블로그와 언어 선택을 제공한다. 모바일 64px, 데스크톱 80px 높이다. 메뉴 버튼은 알약형이고 제품 메뉴 항목은 남색 칸 안의 금색 아이콘을 사용한다. 제품 메뉴는 `윈도우즈 생산성`(Boxes·Folder History), `웹앱`(Clock·OSINTS), `디지털포렌식`(CSV Search Engine) 세 그룹을 이름 라벨과 구분선으로 나눈다. 메뉴 순서는 제품, 블로그, 후원하기, 언어다. 후원하기는 블로그와 같은 알약형 링크로 후원 랜딩(`/{locale}/support`)을 열며 금색 하트 손 아이콘을 앞에 둔다. 640px 미만에서는 아이콘만 보이고 이름은 화면 낭독기용 텍스트로 유지한다. 후원 랜딩에서는 현재 페이지로 표시한다.
- 홈: 남색 히어로 영역에 금색 광원과 옅은 격자를 깔고 브랜드 문구·H1·설명을 가운데 정렬로 세로 배치한다. 제목은 최대 896px, 설명은 최대 672px로 제한한다. 제품 카드 그리드는 히어로 아래쪽에 96px/128px(기본/640px 이상) 겹쳐 올라온다. 제품 카드는 `윈도우즈 생산성`(Boxes·Folder History), `웹앱`(Clock·OSINTS), `디지털포렌식`(CSV Search Engine) 세 분류로 나눠 진열한다. 분류마다 남색 원 안의 금색 아이콘과 이름을 담은 흰 알약형 제목(h2)을 두고, 그 아래 공통 `ProductCard`를 쓰는 동일한 크기의 2열 카드(제품명 h3)를 놓는다. 첫 분류 제목은 남색 히어로 위에 걸치므로 흰 배경으로 대비를 유지한다. 분류 사이 간격은 48px/64px이다. 아래 블로그 영역은 제목·설명·블로그 보기 버튼과 최신 글 3편 카드를 보여준다.
- Boxes: 제품명 중심 히어로, 직접 다운로드·설치 안내, 큰 실제 스크린샷, 정리 방식, 위젯, 무료 범위, FAQ와 설치 절차 순서다.
- 블로그 목록: 최신 글은 두 열을 차지하는 남색 카드, 나머지는 흰 카드다. 카드는 날짜·제목·설명·읽기 표시로 구성하며 제목 링크 하나가 카드 전체를 덮어 클릭 영역을 넓힌다(접근 가능한 링크는 제목 하나).
- 블로그 본문: 남색 머리말에 경로 표시·제목·설명·날짜를 두고, 아래 좁은 본문 폭에 글을 표시한다. 본문 인용은 금색 왼쪽 선, 링크는 금색 밑줄을 쓴다.
- 모든 페이지는 동일한 남색 공통 푸터를 사용한다. 위쪽 구분선으로 Boxes 다운로드 구역과 나뉜다. 푸터 메뉴 마지막에 후원 랜딩 링크를 둔다. 하단 외부 링크는 Instagram, Threads, GitHub 다음에 `supportLinks`의 후원 링크(현재 Buy Me a Coffee `https://buymeacoffee.com/ghostyak`, 크티 `https://ctee.kr/place/ghostyak/donation`)를 두며 새 탭으로 연다. 서비스 이름은 번역하지 않는다.

브랜드 로고와 파비콘은 `public/favicon.svg`를 사용한다. Boxes 미리보기는 `boxes.preview`의 원본 비율을 보존하고 자르지 않는다. 사진 위젯의 확대 설명만 기존에 지정된 스크린샷 크롭을 사용한다. 세계시계는 고정 예시이며 도시·날짜와 예시 안내는 현재 로케일로 표시한다.

## 동작과 접근성

- 제품과 언어 선택은 Radix 기반 shadcn DropdownMenu다. 방향키, Enter, Escape, 바깥 클릭, 현재 항목 표시를 지원한다.
- FAQ는 여러 항목을 열 수 있는 Accordion이며 첫 항목을 기본으로 연다. 설치 문제 해결은 기본적으로 닫힌 단일 Accordion이다.
- 설치 파일 링크는 항상 공식 설치 파일로 직접 연결한다. 설치 안내 링크만 `#download`로 이동한다.
- PC용 링크 복사는 현재 언어의 제품 URL을 복사하고 성공 상태 또는 실패 시 읽기 전용 Input을 제공한다.
- 320px부터 가로 넘침 없이 사용할 수 있어야 한다. 긴 번역의 버튼은 줄바꿈을 허용한다.
- 메뉴, 버튼과 주요 링크는 최소 44px 높이를 확보한다.
- 모든 페이지에 번역된 본문 건너뛰기 링크와 명확한 키보드 포커스를 제공한다.
- `prefers-reduced-motion`에서는 부드러운 스크롤과 전환·애니메이션을 줄인다.

## 서버와 클라이언트 경계

홈, 제품, 블로그, 헤더와 푸터는 Server Component다. 메뉴, Accordion과 클립보드처럼 상호작용이 필요한 부분만 Client Component로 둔다. 서버에서는 링크 스타일에 `buttonVariants`를 사용할 수 있다. 표시 문구는 서버 사전에서 읽고 필요한 문자열만 클라이언트 경계에 전달한다.

번역과 콘텐츠 수정 기준은 [INTERNATIONALIZATION.md](./INTERNATIONALIZATION.md)를 따른다. 기존 승인 원문은 [RENEWAL_KO.md](./RENEWAL_KO.md)에 기록되어 있다.

## CSV Search Engine 카드와 제품 분류

홈의 네 번째 제품은 CSV Search Engine이다. `디지털포렌식`과 `DFIR`, Windows x64를 표시하고 사용자 지정 소개 “대용량 CSV·Excel 검색을 한 번에.”를 카드와 상세페이지에서 공유한다. Excel 설치·원본 변경·외부 업로드에 대한 보조 문구는 표시하지 않는다. 홈 카드에는 사진 대신 장식용 표 줄무늬 위에 테이블 아이콘과 CSV 문자를 표시하며 상세페이지로 연결한다. 제품 메뉴는 기존 제품 아래 구분선을 두고 `디지털포렌식` 그룹에 CSV Search Engine을 배치한다.

CSV Search Engine 상세페이지는 2026-09-24부터 Folder History와 같은 공통 `ProductLanding` 구성을 쓴다. 히어로 배지는 `디지털포렌식`(남색)·`DFIR`·`Windows · x64`·`비상업적 용도 무료`(금색)이고, 첫 화면에 MFT 데이터 스크린샷을, 주요 기능 아래에 파일 열기 스크린샷을 한 장 둔다. 이어서 남색 오프라인 분석 안내, FAQ, 다운로드 구역(Windows 직접 다운로드와 GitHub 링크)을 둔다. 사용자 요청으로 자동 스크린샷 슬라이드와 `ScreenshotSlideshow` 컴포넌트를 삭제했다.

홈 제품 카드는 768px 이상에서 동일한 너비·높이의 2×2 그리드로, 모바일에서는 한 열로 표시한다. 미리보기는 모두 240px 높이이며 Boxes는 전체 이미지를 `object-contain`으로 표시하고 CSV Search Engine은 아이콘을 표시한다. 제목·설명·행동 버튼의 크기와 본문 여백은 Clock·OSINTS에 맞춘다. 제품 상세 페이지에는 이 크기 변경을 적용하지 않는다.

## Folder History 랜딩

Folder History와 CSV Search Engine 상세페이지는 공통 `ProductLanding`(`src/components/ProductLanding.tsx`)을 쓴다. 첫 스크린샷이 히어로이고 나머지는 주요 기능 아래에 둔다(두 장이면 2열, 한 장이면 가운데 최대 768px). Folder History 상세페이지(`/{locale}/product/folder-history`)는 Boxes 랜딩과 같은 시각 언어를 쓴다. 순서는 제품명 히어로(`무료`·`Windows 11 · x64` 배지, 직접 다운로드·사용 방법 버튼), 남색 프레임의 최근 방문 목록 스크린샷, 사용 방법 3단계 카드, 주요 기능 6개 카드와 제외 규칙·설정 스크린샷 두 장, 남색 로컬 저장 안내, FAQ Accordion, 남색 다운로드 구역(다운로드 버튼과 GitHub 저장소 링크)이다. 스크린샷은 원본 비율을 유지하고 클릭하면 원본 이미지를 연다. 캡션에는 한국어 UI임을 표시한다. 홈 카드는 대표 스크린샷을 `object-contain`으로 표시하고, 제품 메뉴에서는 Clock·OSINTS 다음, 디지털포렌식 그룹 앞에 둔다.

## 후원 랜딩

후원 랜딩(`/{locale}/support`)은 제품 랜딩과 같은 시각 언어를 쓴다. 순서는 `PageHero`(남색 `후원하기` 배지, 후원 방법 보기·제품 둘러보기 버튼), 후원 방법 카드 2열(흰 칸 안의 서비스 공식 로고, 서비스 이름 h3, 설명, 새 탭으로 여는 후원 버튼), 옅은 배경의 후원 사용처 카드 3개(새 기능과 새 제품·유지 보수·웹 서비스 운영), 후원 외 도움 카드 3개(주변에 알리기 → 홈 제품 목록, 의견 보내기 → GitHub, 소식 공유하기 → Instagram·Threads), 남색 감사 구역(후원 수단별 버튼, 첫 수단은 금색 채움, 버튼 앞에 흰 칩 안의 공식 로고)이다. 후원 수단 로고는 각 서비스의 공식 로고를 쓴다: Buy Me a Coffee는 공식 버튼용 컵 로고(`https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg`), 크티는 공식 심볼 로고(`https://assets.ctee.kr/common/landing-v2/logo-ctee-symbol-color.svg`)를 `public/images/support/`에 원본 그대로 저장했다. 로고는 자체 색을 가지므로 남색 대신 흰 배경 위에 두고 색·비율을 바꾸지 않는다. 서비스 이름이 옆에 있으므로 로고의 대체 텍스트는 비운다. 후원 방법 카드는 768px 미만에서 한 열로 쌓인다. 외부 링크에는 바깥 화살표 아이콘을 붙인다.

## 다국어 URL과 언어 메뉴

영어도 `/en/...`을 사용하는 9개 로케일 접두사 정책을 따른다. 언어 메뉴는 현재 콘텐츠의 다른 언어 canonical URL로 직접 이동하며 중간 `/language/...` 처리 경로를 거치지 않는다. 전체 문서 탐색, 메뉴 외형과 접근성 동작은 유지한다. 상세 URL 정책은 [SEO.md](./SEO.md)를 따른다.

## 페이지 공유

Boxes·CSV Search Engine·Folder History는 다운로드 구역에 공유 영역을 둔다. 블로그 글은 본문 끝에서 공유할 수 있다. X·Facebook·LinkedIn·Threads 아이콘은 44px 원형 키보드 접근 대상이며 Threads 작성 화면은 새 탭에서 연다. Instagram은 기기 공유 메뉴를 호출하고 미지원 시 canonical URL을 복사한다. 링크 복사 성공·실패 상태를 화면 낭독기에 전달한다. SNS SDK나 추적 위젯을 추가하지 않는다.
