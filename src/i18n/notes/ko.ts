// Approved Korean source, 2026-10-09. Written from the Ghostyak Notes product and trial documents.
// The trial and Pro terms of 2026-10-31 await the owner's review.
// The search-oriented hero title, metadata description, section titles and FAQ questions of 2026-11-01 await the owner's review.
// The hero video copy of 2026-11-02 awaits the owner's review.
// The trial terms of 2026-11-02 (hero note and FAQ) await the owner's review.
// The app language FAQ, translucent tool and pen slot copy of 2026-11-03 were corrected from the Notes app source at the owner's request.
const notes = {
  metadataTitle: "Ghostyak Notes | PDF에 필기하고 바로 찾는 Windows 노트 앱",
  metadataDescription: "PDF 위에 펜과 키보드로 필기하고, 읽은 내용은 모든 문서에서 바로 찾는 Windows 노트 앱입니다. 30일 동안 모든 기능을 써 볼 수 있습니다.",
  heroTitle: "PDF에 필기하고 바로 찾는\n노트 앱, Ghostyak Notes",
  featuredAction: "PDF 필기 노트 앱 둘러보기",
  cardDescription: "PDF 위에 펜과 키보드로 쓰고, 읽은 내용은 모든 문서에서 바로 찾는 Windows 노트 앱입니다.",
  description: "PDF 위에 펜과 키보드로 쓰고, 읽은 내용은 모든 문서에서 바로 찾으세요.",
  featuredEyebrow: "새 제품",
  betaBadge: "30일 체험판",
  trialBadge: "30일 동안 모든 기능 사용",
  downloadAction: "Windows x64 다운로드",
  featuresAction: "기능 보기",
  pricingAction: "체험판과 Pro 비교하기",
  heroNote: "처음 실행한 날부터 30일 동안 모든 기능을 쓸 수 있고, 기간이 끝나도 필기는 계속 쓸 수 있습니다.",
  screenshots: {
    annotate: { alt: "Ghostyak Notes에서 PDF 교재에 형광 표시를 하고 여백에 손글씨로 필기한 화면" },
    pen: { alt: "색 세 칸과 색 팔레트, 굵기 세 단계를 고르는 Ghostyak Notes 펜 설정 창", caption: "펜 설정 · 색과 굵기" },
    search: { alt: "‘권리’를 입력해 두 문서에서 찾은 쪽을 미리보기와 함께 보여 주는 Ghostyak Notes 전체 검색 창", caption: "모든 문서에서 찾기" },
    library: { alt: "문서 열 개를 표지 격자로 보여 주고 왼쪽에 폴더와 즐겨찾기를 둔 Ghostyak Notes 라이브러리", caption: "라이브러리 · 폴더와 표지 격자" },
    pages: { alt: "24쪽 문서의 모든 쪽을 격자로 펼치고 옮기기·복제·돌리기 단추를 둔 Ghostyak Notes 쪽 모아보기", caption: "쪽 모아보기" },
    spread: { alt: "필기한 4쪽과 5쪽을 나란히 펼친 Ghostyak Notes 두 쪽 보기", caption: "두 쪽 보기" },
  },
  video: { playAction: "소개 영상 보기", title: "Ghostyak Notes 소개 영상", posterAlt: "파란 바탕에 Ghostyak Notes 앱 아이콘과 이름, ‘PDF 위에 쓰고, 무엇이든 찾는 노트’ 문구를 둔 소개 영상 첫 화면", caption: "1분 29초 · 한국어 UI", watchOnYouTube: "YouTube에서 보기" },
  showcase: {
    eyebrow: "주요 기능",
    title: "PDF 읽기, 필기, 검색을\n한 앱에서.",
    description: "교재와 강의 자료, 보고서와 논문. PDF를 가져와 그 위에 바로 쓰고, 나중에 필요한 쪽을 다시 찾으세요.",
    items: {
      pen: {
        eyebrow: "필기",
        title: "펜, 형광펜, 지우개.\n색과 굵기는 내 손에 맞게.",
        description: "펜과 형광펜마다 자주 쓰는 색과 굵기를 세 칸에 정해 두고 바로 바꿔 쓰세요. 필기는 긋는 대로 자동 저장됩니다.",
        points: ["펜·형광펜·지우개와 올가미 선택", "선·화살표·사각형·타원 도형과 이미지 넣기", "실행 취소와 다시 실행"],
      },
      search: {
        eyebrow: "전체 검색",
        title: "어느 책에 있었는지 몰라도,\n한 번에 찾습니다.",
        description: "Ctrl+Shift+F로 라이브러리의 모든 문서 본문을 찾으세요. 결과는 문서별로 묶여 쪽 번호와 미리보기와 함께 나타나고, Enter로 그 쪽을 바로 엽니다.",
        points: ["모든 문서에서 찾기 (Ctrl+Shift+F)", "문서 안에서 찾기 (Ctrl+F)", "북마크와 PDF 목차로 이동"],
      },
      library: {
        eyebrow: "라이브러리",
        title: "교재와 노트를\n책장처럼 정리하세요.",
        description: "PDF를 가져오거나 새 노트를 만들어 폴더로 나누세요. 표지마다 어디까지 읽었는지 표시되고, 여러 문서를 탭으로 열어 오갈 수 있습니다.",
        points: ["폴더·즐겨찾기·최근 문서", "표지 격자와 목록 보기, 정렬", "지운 문서는 휴지통에 보관"],
      },
      pages: {
        eyebrow: "쪽 모아보기",
        title: "쪽을 옮기고, 더하고,\n돌리세요.",
        description: "문서의 모든 쪽을 한 화면에 펼쳐 놓고 순서를 바꾸거나 복제하고, 지우고, 돌리세요. 빈 쪽을 더하거나 다른 PDF의 쪽을 넣을 수도 있습니다.",
        points: ["북마크한 쪽·필기한 쪽만 모아 보기", "무지·줄·모눈·점 바탕의 빈 쪽", "쪽 편집도 실행 취소 가능"],
      },
      spread: {
        eyebrow: "보기",
        title: "한 쪽으로도,\n책처럼 두 쪽으로도.",
        description: "한 쪽 보기와 두 쪽 보기를 오가고, 너비나 높이에 맞춰 확대하세요. 긴 문서도 사이드바에서 원하는 쪽으로 바로 이동합니다.",
        points: ["한 쪽·두 쪽 보기", "너비·높이 맞춤과 확대·축소", "쪽·필기한 쪽·표시한 글·북마크·목차 사이드바"],
      },
    },
  },
  more: {
    eyebrow: "더 많은 기능",
    title: "공부와 업무에 필요한 도구를 담았습니다.",
    items: [
      { title: "텍스트 상자", description: "키보드로 쪽 위에 글을 씁니다. 고딕·명조·손글씨·고정폭 글꼴을 고를 수 있습니다." },
      { title: "글에 표시하기", description: "PDF의 글을 선택해 형광·밑줄·취소선으로 표시하고 복사합니다." },
      { title: "북마크", description: "중요한 쪽에 북마크를 달아 두고 목록에서 바로 이동합니다." },
      { title: "반투명", description: "필기나 텍스트 상자를 눌러 반투명하게 만들고, 그 아래의 본문을 확인합니다." },
      { title: "자동 저장", description: "저장 버튼이 없습니다. 필기는 긋는 대로 문서 파일에 저장됩니다." },
      { title: "키보드 단축키", description: "도구 선택, 검색과 쪽 이동을 단축키로 실행합니다." },
    ],
  },
  privacy: {
    eyebrow: "내 PC에 저장",
    title: "PDF와 필기는 내 PC에만 저장됩니다.",
    description: "문서는 내 PC의 문서 폴더 안 ‘Ghostyak Notes’ 폴더에 파일로 저장됩니다. 계정을 만들거나 인터넷에 연결하지 않아도 쓸 수 있고, 가져온 PDF 원본 파일은 바꾸지 않습니다.",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      { question: "체험판은 얼마나 쓸 수 있나요?", answer: "앱을 처음 실행한 날부터 30일 동안 모든 기능을 제한 없이 쓸 수 있습니다. 처음 실행할 때 사용 기간이 끝나는 날짜를 알려 줍니다." },
      { question: "30일이 지나면 어떻게 되나요?", answer: "필기는 계속 쓸 수 있습니다. 문자인식, 자동모드, 성능모드, 모든 문서에서 찾기, 모든 북마크, 모든 표시한 글, 미니맵은 쓸 수 없습니다. 만든 문서와 필기, 이미 인식한 글은 그대로 남습니다. 이 기능들을 쓰려면 Pro가 필요합니다." },
      { question: "문서는 어디에 저장되나요?", answer: "내 PC의 문서 폴더 안 ‘Ghostyak Notes’ 폴더에 저장됩니다. 라이브러리 왼쪽 아래의 ‘문서 폴더 열기’로 바로 열 수 있습니다." },
      { question: "스캔한 PDF도 검색되나요?", answer: "네. 글자 정보가 없는 스캔 PDF는 앱이 글자를 인식(OCR)해 찾을 수 있게 합니다. 인식은 내 PC 안에서 이루어지며, 손글씨 검색은 아직 지원하지 않습니다." },
      { question: "펜 태블릿 없이 마우스로도 PDF에 필기할 수 있나요?", answer: "네. 마우스로 필기하고 키보드로 텍스트 상자에 글을 쓸 수 있습니다." },
      { question: "앱은 어떤 언어로 제공되나요?", answer: "앱 화면은 한국어와 영어로 제공됩니다. 처음에는 기기의 언어를 따르고 그 밖의 언어에서는 영어로 열리며, 설정에서 바꿀 수 있습니다." },
      { question: "어떤 Windows에서 쓸 수 있나요?", answer: "Windows 64비트(x64)용입니다. Microsoft Edge WebView2 Runtime이 없으면 설치 프로그램이 내려받아 설치합니다." },
    ],
  },
  download: {
    title: "다운로드하고,\n첫 PDF를 가져와 보세요.",
    description: "Windows x64 · 30일 동안 모든 기능 사용 · Pro $10 일회 구매",
  },
} as const;

export default notes;
