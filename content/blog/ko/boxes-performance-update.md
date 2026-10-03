---
title: "Boxes 성능 최적화: v0.4.1을 곧 출시합니다"
description: "Boxes가 더 빠르고 가볍게 동작하도록 바탕화면 정리 기능 중심으로 성능 최적화를 진행했습니다. 최적화된 v0.4.1을 곧 출시합니다."
publishedAt: "2026-10-03"
translationKey: "boxes-performance-update"
sourceRevision: 1
image: "/images/boxes/ghostyak-boxes-1920x1080.png"
imageAlt: "Windows 바탕화면의 앱·사진·음악·프로젝트 박스, 목록 보기로 연 다운로드 박스와 접어 둔 박스 두 개"
---

**Boxes v0.4.1을 곧 출시합니다.** 이번 버전은 Boxes가 더 빠르고 가볍게 동작하도록 성능 최적화에 집중했습니다.

## 왜 최적화했나요

바탕화면 정리 도구는 PC를 켤 때마다 가장 먼저 만나는 작업 공간입니다. 이전 버전은 박스를 웹 화면(WebView2)으로 그렸기 때문에, 로그인 직후 박스가 늦게 나타나거나 화면 배율이 다른 모니터에서 표시가 어긋나는 문제가 반복됐습니다.

## 무엇이 달라지나요

- **박스를 바탕화면에 직접 그립니다.** 웹 화면 대신 Windows의 그래픽 기능(DirectComposition·Direct2D)으로 박스와 아이콘을 그리도록 새로 만들었습니다.
- **메뉴와 설정 창도 Windows 기본 화면으로 바꿨습니다.** 박스 메뉴, 설정 창과 트레이 메뉴가 Windows 표준 메뉴와 창으로 열려 더 가볍게 동작합니다.
- **바탕화면 정리에 집중합니다.** 성능을 위해 v0.4부터 사진 뷰어·시계 등 위젯 기능을 모두 제외했습니다. 위젯을 사용해 오셨다면 너그럽게 양해해 주세요.

## 출시 안내

v0.4.1은 준비가 끝나는 대로 GitHub Releases와 Boxes 제품 페이지에서 받을 수 있습니다. 파일·폴더·앱 바로가기를 박스로 정리하는 기능은 지금처럼 개인·회사·업무용 모두 무료입니다.

사용 중 문제가 생기거나 개선할 점이 보이면 사용 중인 Windows와 Boxes 버전, 문제가 발생한 상황을 함께 알려 주세요.

[Boxes 제품 둘러보기](/ko/product/boxes)

[최신 릴리스 확인](https://github.com/ghostyak/boxes/releases/latest)

[문제와 의견 남기기](https://github.com/ghostyak/boxes/issues)
