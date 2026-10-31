// Korean source of 2026-11-01, awaiting the owner's review. Written from the Notes licensing and trial documents.
const pricing = {
  eyebrow: "가격",
  title: "30일 써 보고,\nPro로 계속 쓰세요.",
  description: "체험판은 30일 동안 Pro와 똑같습니다. 기간이 끝난 뒤에도 필기와 전체 검색을 쓰려면 Pro 하나면 됩니다.",
  plans: {
    label: "체험판과 Pro",
    includes: "체험판의 모든 기능과 더불어:",
    trial: {
      name: "체험판",
      tagline: "먼저 써 보기",
      price: "30일",
      priceUnit: "처음 실행한 날부터",
      points: [
        "펜·형광펜·텍스트 상자로 PDF에 필기",
        "모든 문서에서 한 번에 찾기",
        "쪽 편집, 목차 만들기, 문서 합치기",
        "스캔한 쪽의 글자 인식(OCR)",
        "필기를 포함해 PDF로 내보내기와 인쇄",
        "기간이 끝나면 읽기 전용, 문서와 필기는 유지",
      ],
    },
    pro: {
      name: "Pro",
      tagline: "기간 제한 없이",
      status: "곧 제공 예정",
      priceUnit: "USD · 일회 구매",
      action: "곧 구매 가능",
      note: "구매 기능을 만들고 있습니다. 그동안 체험판으로 모든 기능을 써 보세요.",
      points: ["필기와 전체 검색을 기간 제한 없이", "키 하나로 기기 3대까지 활성화", "활성화한 뒤에는 인터넷 없이 사용", "구매한 버전은 계속 사용"],
    },
  },
  footnote: "*체험판이 끝나면 문서를 열어 읽을 수만 있습니다. 문서와 필기는 지워지지 않으며, 필기를 포함해 PDF로 내보낼 수 있습니다.",
  compare: {
    eyebrow: "기능 비교",
    title: "무엇이 달라지나요?",
    description: "30일 동안은 Pro와 같습니다. 기간이 끝나면 읽기 전용이 되고, 문서와 필기는 그대로 남습니다.",
    feature: "기능",
    during: "30일 동안",
    after: "기간이 끝난 뒤",
    available: "사용 가능",
    unavailable: "사용 불가",
    readGroup: "읽기 · 찾기 · 내보내기",
    writeGroup: "쓰기 · 정리 · 전체 검색",
    readFeatures: [
      "문서 읽기, 이미 한 필기 보기, 글 선택과 복사",
      "문서 안에서 찾기, 빠른 이동, 북마크·목차로 가기",
      "PDF 가져오기, 문서 정리",
      "PDF로 내보내기(필기 포함), 인쇄",
      "스캔한 쪽의 글자 인식(OCR)",
      "사전 찾기",
    ],
    writeFeatures: ["필기, 글 표시, 북마크 달기, 쪽 편집, 실행 취소", "새 노트, 문서 합치기", "모든 문서에서 찾기"],
  },
  faq: {
    items: [
      {
        question: "Pro는 언제 구매할 수 있나요?",
        answer: "구매 기능을 만들고 있으며 곧 제공될 예정입니다. 그동안에는 체험판으로 모든 기능을 써 볼 수 있습니다.",
      },
      {
        question: "Pro는 구독인가요?",
        answer: "아니요. 한 번 구매하는 일회 구매입니다. 구매한 버전은 계속 쓸 수 있고, 큰 버전으로 업그레이드할 때는 비용이 듭니다.",
      },
      {
        question: "Pro는 PC 몇 대에서 쓸 수 있나요?",
        answer: "키 하나로 기기 3대까지 활성화할 수 있습니다. 인터넷은 활성화할 때만 필요하고, 그 뒤에는 인터넷 없이 쓸 수 있습니다.",
      },
      {
        question: "체험판이 끝나면 문서는 어떻게 되나요?",
        answer: "문서와 필기는 지워지지 않습니다. 계속 열어 읽을 수 있고, 필기를 포함해 PDF로 내보낼 수 있습니다.",
      },
      {
        question: "체험판을 다시 시작할 수 있나요?",
        answer: "체험판은 기기마다 한 번입니다. 새 버전을 설치해도 기간이 늘어나지 않으며, 기기의 날짜를 되돌리면 체험판이 바로 끝납니다.",
      },
      {
        question: "베타를 쓰던 PC도 체험판을 쓸 수 있나요?",
        answer: "네. v1.0.0을 설치하면 30일 체험판이 새로 시작됩니다.",
      },
    ],
  },
} as const;

export default pricing;
