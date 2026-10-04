# ghostyak.com

Next.js로 만든 ghostyak.com 웹사이트 프로젝트입니다.

UI는 Tailwind CSS 4와 DaisyUI 5, GhostYak 사용자 테마로 구성합니다.

Boxes 소개 페이지는 한국어, 영어, 일본어, 중국어, 스페인어, 독일어,
프랑스어, 포르투갈어(브라질), 이탈리아어를 지원합니다.

Boxes 제품과 에디션 페이지는 `/products/boxes` 아래에 있으며 Community와
Pro 다운로드 페이지는 10초 후 GitHub Releases 설치 파일을 내려받습니다.
Community는 기간과 박스 수 제한 없이 사용할 수 있습니다.

## 개발

```sh
pnpm install
pnpm dev
```

## 명령어

- `pnpm dev`: 개발 서버 실행
- `pnpm build`: 프로덕션 빌드 생성
- `pnpm start`: 프로덕션 서버 실행
- `pnpm lint`: 코드 검사
