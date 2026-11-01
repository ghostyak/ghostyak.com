# Ghostyak Notes 구매 열기

사용자가 "구매를 켜라"고 하면 이 문서대로 바꾼다. **그 말이 있기 전에는 구매 단추를 켜지 않는다.** 결제 주소는 `src/data/products.ts`의 `notes.checkoutUrl`에 넣어 두었고 아직 어디에도 연결하지 않았다.

## 켜기 전에 끝나 있어야 하는 것

| 조건 | 왜 | 상태 |
|---|---|---|
| Freemius 계정 인증 승인 | 승인 전에는 판매와 정산을 할 수 없다 | 심사 중(2026-11-02) |
| 활성화가 들어간 앱의 새 버전 공개 | v1.0.0에는 키를 넣을 곳이 없다 | 코드 완료, 출시 전 |
| 앱에서 Sandbox 키로 실제 활성화 확인 | 앱에서 Freemius까지 가는 길을 끝까지 본다 | 확인함(2026-11-02) |
| 환불한 키의 동작 확인 | 계정 인증이 승인되어야 환불할 수 있다. 앱 저장소 `docs/12-licensing.md`의 "하루 한 번의 확인" | 승인 뒤 |
| 개인정보처리방침, 이용약관, 환불 정책 | 활성화 때와 하루 한 번의 확인 때 보내는 값, 대행사를 밝혀야 한다 | 작성 전 |
| 판매 페이지 하단의 사업자 정보 | [ROADMAP](ROADMAP.md)의 판매 시작 전 항목 | 작성 전 |

새 버전보다 사이트를 먼저 열면 손님이 키를 받아도 쓸 곳이 없다. 사이트는 맨 나중에 연다.

## 코드

### `src/components/NotesPricing.tsx`

Pro 칸의 꺼진 단추를 결제 링크로 바꾼다. `Button`을 더 쓰지 않으면 import에서 뺀다.

```tsx
action={<a className={cn(buttonVariants({ size: "lg", className: "h-auto min-h-12 w-full whitespace-normal rounded-full px-6 py-3" }))} href={notes.checkoutUrl}>{pro.action}</a>}
```

`Plan`의 `badge={pro.status}`를 빼고, 9개 언어 파일의 `status` 키를 지운다.

### `src/seo.ts`

`getNotesJsonLd` 위의 주석 "Pro cannot be bought yet"를 지우고 `offers`를 더한다. 값은 `notes.proPrice`에서 읽는다.

```ts
offers: {
  "@type": "Offer",
  price: String(notes.proPrice.amount),
  priceCurrency: notes.proPrice.currency,
  availability: "https://schema.org/InStock",
  url: `${siteUrl}${localizedPath(locale, notes.pagePath)}#pricing`,
},
```

### `src/data/products.ts`

- `proPrice` 위의 주석에서 "Purchase is not open yet."를 지운다.
- `checkoutUrl` 위의 주석을 지운다.
- `updatedAt`을 바꾼 날로 고친다.

### 고칠 뒤 맞출 문서

- `docs/ROADMAP.md`의 구매 기능 연결 항목을 끝낸다.
- `docs/SEO.md`에 구매 전이라 `offers`가 없다고 적힌 내용이 있으면 고친다.

## 문구

한국어 초안은 사용자가 승인했고(2026-11-02), 9개 언어의 최종 문구는 [NOTES_PURCHASE_LAUNCH_STRINGS.md](NOTES_PURCHASE_LAUNCH_STRINGS.md)에 있다. 구매를 켤 때 그 문서의 문구를 그대로 넣는다. 아래 표는 무엇이 왜 바뀌는지 보이려고 남긴 것이다. 줄 번호는 2026-11-02의 한국어 파일 기준이다.

### `src/i18n/pricing/ko.ts`

| 줄 | 키 | 지금 | 초안 |
|---|---|---|---|
| 26 | `status` | 곧 제공 예정 | 뺀다 |
| 28 | `action` | 곧 구매 가능 | Pro 구매 |
| 29 | `note` | 아직 베타 테스트 중이라 구매 기능을 만들고 있습니다… | 구매하면 메일로 라이선스 키를 보내 드립니다. 앱의 설정 → 라이선스에 키를 붙여 넣으면 됩니다. |
| 58 | FAQ 질문 | Pro는 언제 구매할 수 있나요? | Pro는 어떻게 구매하나요? |
| 59 | FAQ 답 | 아직 베타 테스트 중이라… | 이 페이지의 Pro 구매 단추로 결제하면 라이선스 키와 내려받기 링크를 메일로 보내 드립니다. |
| 74, 75 | FAQ | 체험판을 다시 시작할 수 있나요? / 베타 테스트 중에는 새 버전을 설치하면… | 문구 문서의 `restartAnswer` |

### `src/i18n/notes/ko.ts`

| 줄 | 키 | 지금 | 초안 |
|---|---|---|---|
| 12 | `betaBadge` | 베타 테스트 중 | 30일 체험판 |
| 17 | `heroNote` | 아직 베타 테스트 중이라 구매 기능은 준비 중입니다… | 처음 실행한 날부터 30일 동안 모든 기능을 쓸 수 있습니다. 그 뒤에는 Pro를 구매해 계속 쓸 수 있습니다. |
| 84 | FAQ 답 | …베타 테스트 중에는 새 버전을 다시 설치하면 30일 더… 구매 기능이 준비되면… | 문서를 열어 읽고 문서 안에서 찾을 수 있지만, 필기와 모든 문서에서 찾기는 쓸 수 없습니다. 만든 문서와 필기는 지워지지 않습니다. 계속 쓰려면 Pro가 필요합니다. |
| 94 | 메타 설명 | Windows x64 · 베타 테스트 중 · 30일 동안 모든 기능 사용 | Windows x64 · 30일 동안 모든 기능 사용 · Pro $29 일회 구매 |

`betaBadge`는 `NotesFeatureCard.tsx`와 `NotesProduct.tsx`가 쓴다. 값만 바꾼다.

`content/blog/ko/notes-100-release.md`의 "구매 기능은 만들고 있으며"는 출시 당시의 기록이라 고치지 않는다.

### 앱과 맞지 않는 안내

지금 사이트는 "새 버전을 다시 설치하면 30일 더 쓸 수 있다"고 안내한다. **앱의 1.0.0은 그렇지 않다.** 체험은 기기당 한 번이고 새 버전을 깔아도 늘지 않는다(앱 저장소의 `docs/11-beta.md`). 구매를 켤 때까지 기다리지 않고 먼저 고쳐도 되는 문구다.

## 시험과 배포

```sh
pnpm lint
pnpm build
```

`pnpm test:seo`는 빌드한 사이트가 떠 있어야 돈다. 다른 터미널에서 `pnpm start --port 3100`을 띄운 뒤 돌린다.

- 9개 언어의 `/{locale}/product/notes#pricing`에서 단추가 결제 화면으로 가는지 본다.
- 결제 화면의 상품, 가격 $29, 기기 3대가 맞는지 본다.
- 실제 결제로 메일, 내려받기, 활성화까지 한 번 끝내고 환불한다.
