---
title: "CSV Search Engine 출시: 필요한 검색 도구를 직접 만들었습니다"
description: "Timeline Explorer 사용 중 겪은 설치 의존성과 CSV 파싱 오류에서 출발한 Rust 기반 DFIR 앱, CSV Search Engine을 소개합니다."
publishedAt: "2026-09-20"
translationKey: "csv-search-engine-launch"
sourceRevision: 1
---

**CSV Search Engine을 출시했습니다.** 디지털포렌식·침해사고대응(DFIR) 작업에서 대용량 CSV·Excel 데이터를 검색하기 위해 만든 Windows 앱입니다.

## 만들게 된 이유

시작은 Timeline Explorer를 사용하면서 겪은 불편이었습니다. 설치에 필요한 의존성을 준비해야 했고, 작업 중 CSV 파싱 오류를 만나기도 했습니다. 데이터를 살펴보려던 흐름이 도구를 준비하거나 오류를 해결하는 일로 끊기는 상황을 줄이고 싶었습니다.

이 경험을 계기로 필요한 검색 도구를 직접 만들기 시작했습니다. CSV Search Engine은 그렇게 출발한 프로젝트입니다.

## Rust로 만든 검색 도구

제작 언어는 **Rust**입니다. CSV와 Excel 파일을 열고, 열별로 검색하거나 정렬하고, 같은 값끼리 묶어 살펴볼 수 있습니다. 분석할 데이터에서 필요한 내용을 찾는 작업에 집중했습니다.

제품 페이지에서 실제 화면을 확인하고 Windows 설치 파일을 다운로드할 수 있습니다.

[CSV Search Engine 제품 둘러보기](/ko/product/csv-search-engine)

[GitHub 저장소 보기](https://github.com/ghostyak/csv-search-engine)

