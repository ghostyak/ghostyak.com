# 개발 가이드

## 요구사항

- Node.js 22.12 이상
- npm

## 시작하기

```sh
npm install
npm run dev
```

개발 서버를 백그라운드에서 실행하려면 다음 명령을 사용한다.

```sh
npx astro dev --background
```

## 주요 명령어

```sh
npm run dev      # 개발 서버
npm run build    # 프로덕션 정적 빌드
npm run preview  # 빌드 결과 미리보기
npm run astro    # Astro CLI
```

변경을 완료하기 전에 최소한 `npm run build`를 실행한다.

## 작업 규칙

- 한 번에 로드맵의 작은 작업 하나를 구현한다.
- Astro 기본 기능과 `.astro` 컴포넌트를 우선한다.
- 새로운 의존성은 기존 기능으로 해결하기 어려울 때만 추가한다.
- 모바일 화면을 먼저 고려하고 넓은 화면으로 확장한다.
- 링크와 버튼은 키보드로 사용할 수 있어야 한다.
- 제품 버전과 다운로드 URL을 여러 파일에 중복해서 작성하지 않는다.
- 생성물인 `dist/`, `.astro/`, `node_modules/`는 커밋하지 않는다.

## 정적 파일

- favicon과 그대로 제공할 이미지는 `public/`에 둔다.
- 작은 설치 파일은 `public/downloads/`에 둘 수 있다.
- 큰 설치 파일은 외부 릴리스 저장소에 올리고 HTTPS URL로 연결한다.

## 문서 관리

- 작업 순서와 완료 여부: [ROADMAP.md](./ROADMAP.md)
- 구조와 기술 결정: [ARCHITECTURE.md](./ARCHITECTURE.md)
- 구조가 변경되면 코드와 관련 문서를 함께 수정한다.
