# Ghostyak Notes 구매 열기: 문구

[NOTES_PURCHASE_LAUNCH.md](NOTES_PURCHASE_LAUNCH.md)에서 쓰는 문구다. 구매를 켤 때 해당 언어의 파일에 그대로 넣는다. 그 전에는 넣지 않는다. 사이트에 드러나기 때문이다.

한국어 초안은 사용자가 승인했다(2026-11-02). 예외로 `restartAnswer`는 승인한 문서가 "앱과 맞지 않는 안내를 따른다"고만 적었던 칸이라, 그 내용으로 지은 문장이다. 번역은 에이전트가 했고 원어민 검수는 받지 않았다.

앱의 화면은 한국어와 영어뿐이라, 한국어가 아닌 언어의 안내에는 앱에 보이는 영어 메뉴 이름 `Settings → License`를 적는다.

## 키와 자리

| 키 | 파일 | 한국어 파일의 줄 |
|---|---|---|
| `action` | `src/i18n/pricing/{locale}.ts`의 `pro.action` | 28 |
| `note` | 위와 같은 파일의 `pro.note` | 29 |
| `buyQuestion` | 위와 같은 파일의 "Pro는 언제 구매할 수 있나요?" 질문 | 58 |
| `buyAnswer` | 그 질문의 답 | 59 |
| `restartAnswer` | "체험판을 다시 시작할 수 있나요?"의 답 | 75 |
| `betaBadge` | `src/i18n/notes/{locale}.ts`의 `betaBadge`. 값만 바꾸고 키 이름은 그대로 둔다 | 12 |
| `heroNote` | 위와 같은 파일의 `heroNote` | 17 |
| `afterTrial` | "30일이 지나면 어떻게 되나요?"의 답 | 84 |
| `metaDescription` | "Windows x64 · 베타 테스트 중 …"의 문장 | 94 |

## 정해 둔 것

- `pro.status`의 배지는 뺀다. `NotesPricing.tsx`의 `badge={pro.status}`와 9개 파일의 `status` 키를 함께 지운다. "일회 구매"는 가격 아래에 이미 적혀 있다.
- "베타를 쓰던 PC도…" 질문은 그대로 둔다. 내용이 맞다.
- 출시 블로그 글은 고치지 않는다. 출시 당시의 기록이다.

## ko

- `action`: Pro 구매
- `note`: 구매하면 메일로 라이선스 키를 보내 드립니다. 앱의 설정 → 라이선스에 키를 붙여 넣으면 됩니다.
- `buyQuestion`: Pro는 어떻게 구매하나요?
- `buyAnswer`: 이 페이지의 Pro 구매 단추로 결제하면 라이선스 키와 내려받기 링크를 메일로 보내 드립니다.
- `restartAnswer`: 아니요. 체험판은 기기당 한 번이고 새 버전을 설치해도 기간이 늘어나지 않습니다. 기기의 날짜를 되돌리면 체험판이 바로 끝납니다.
- `betaBadge`: 30일 체험판
- `heroNote`: 처음 실행한 날부터 30일 동안 모든 기능을 쓸 수 있습니다. 그 뒤에는 Pro를 구매해 계속 쓸 수 있습니다.
- `afterTrial`: 문서를 열어 읽고 문서 안에서 찾을 수 있지만, 필기와 모든 문서에서 찾기는 쓸 수 없습니다. 만든 문서와 필기는 지워지지 않습니다. 계속 쓰려면 Pro가 필요합니다.
- `metaDescription`: Windows x64 · 30일 동안 모든 기능 사용 · Pro $29 일회 구매

## en

- `action`: Buy Pro
- `note`: After purchase, we email you a license key. Paste it into Settings → License in the app.
- `buyQuestion`: How do I buy Pro?
- `buyAnswer`: Pay with the Buy Pro button on this page, and we’ll email you a license key and a download link.
- `restartAnswer`: No. The trial is once per device, and installing a new version doesn’t extend it. Setting the device’s date back ends the trial immediately.
- `betaBadge`: 30-day trial
- `heroNote`: You can use every feature for 30 days from first launch. After that, buy Pro to keep going.
- `afterTrial`: You can open and read documents and search within a document, but handwriting and searching across all documents are turned off. Your documents and handwriting are not deleted. Pro is required to keep using them.
- `metaDescription`: Windows x64 · All features for 30 days · Pro $29 one-time purchase

## ja

- `action`: Proを購入
- `note`: ご購入後、ライセンスキーをメールでお送りします。アプリの Settings → License に貼り付けてください。
- `buyQuestion`: Proはどうやって購入しますか？
- `buyAnswer`: このページの「Proを購入」ボタンからお支払いいただくと、ライセンスキーとダウンロードリンクをメールでお送りします。
- `restartAnswer`: いいえ。体験版はデバイスごとに1回で、新しいバージョンをインストールしても期間は延びません。デバイスの日付を戻すと体験版はすぐに終了します。
- `betaBadge`: 30日間体験版
- `heroNote`: 初めて起動した日から30日間、すべての機能を使えます。その後はProを購入すると引き続きご利用いただけます。
- `afterTrial`: 文書を開いて読むことと文書内の検索はできますが、手書きとすべての文書の検索は使えません。作成した文書と手書きは削除されません。引き続き使うにはProが必要です。
- `metaDescription`: Windows x64 · 30日間すべての機能を利用可能 · Pro $29 買い切り

## zh

- `action`: 购买 Pro
- `note`: 购买后，我们会通过邮件发送许可证密钥。请将其粘贴到应用的 Settings → License 中。
- `buyQuestion`: 如何购买 Pro？
- `buyAnswer`: 通过本页的“购买 Pro”按钮付款后，我们会通过邮件发送许可证密钥和下载链接。
- `restartAnswer`: 不可以。每台设备只能试用一次，安装新版本也不会延长期限。将设备日期调回会立即结束试用。
- `betaBadge`: 30 天试用版
- `heroNote`: 自首次启动之日起 30 天内可使用全部功能。之后购买 Pro 即可继续使用。
- `afterTrial`: 可以打开和阅读文档，并在文档内查找，但无法使用手写和跨所有文档搜索。已创建的文档和手写内容不会被删除。如需继续使用，需要购买 Pro。
- `metaDescription`: Windows x64 · 30 天内可用全部功能 · Pro $29 一次性购买

## es

- `action`: Comprar Pro
- `note`: Tras la compra, te enviamos una clave de licencia por correo. Pégala en Settings → License dentro de la app.
- `buyQuestion`: ¿Cómo compro Pro?
- `buyAnswer`: Paga con el botón Comprar Pro de esta página y te enviaremos por correo una clave de licencia y un enlace de descarga.
- `restartAnswer`: No. La versión de prueba es una vez por dispositivo e instalar una versión nueva no la amplía. Atrasar la fecha del dispositivo termina la prueba de inmediato.
- `betaBadge`: Prueba de 30 días
- `heroNote`: Puedes usar todas las funciones durante 30 días desde el primer inicio. Después, compra Pro para seguir usándolas.
- `afterTrial`: Puedes abrir y leer documentos y buscar dentro de un documento, pero la escritura a mano y la búsqueda en todos los documentos quedan desactivadas. Tus documentos y tu escritura a mano no se eliminan. Para seguir usándolas necesitas Pro.
- `metaDescription`: Windows x64 · Todas las funciones durante 30 días · Pro $29 en un solo pago

## de

- `action`: Pro kaufen
- `note`: Nach dem Kauf erhältst du per E-Mail einen Lizenzschlüssel. Füge ihn in der App unter Settings → License ein.
- `buyQuestion`: Wie kaufe ich Pro?
- `buyAnswer`: Bezahle über die Schaltfläche „Pro kaufen“ auf dieser Seite. Du erhältst dann per E-Mail einen Lizenzschlüssel und einen Download-Link.
- `restartAnswer`: Nein. Die Testversion gilt einmal pro Gerät, und die Installation einer neuen Version verlängert sie nicht. Wird das Gerätedatum zurückgestellt, endet die Testversion sofort.
- `betaBadge`: 30-Tage-Testversion
- `heroNote`: Ab dem ersten Start kannst du 30 Tage lang alle Funktionen nutzen. Danach kaufst du Pro, um weiterzumachen.
- `afterTrial`: Du kannst Dokumente öffnen, lesen und innerhalb eines Dokuments suchen, aber Handschrift und die Suche in allen Dokumenten sind deaktiviert. Deine Dokumente und Handschrift werden nicht gelöscht. Um weiterzumachen, brauchst du Pro.
- `metaDescription`: Windows x64 · 30 Tage alle Funktionen · Pro $29 als Einmalkauf

## fr

- `action`: Acheter Pro
- `note`: Après l’achat, nous vous envoyons une clé de licence par e-mail. Collez-la dans Settings → License dans l’application.
- `buyQuestion`: Comment acheter Pro ?
- `buyAnswer`: Payez avec le bouton Acheter Pro de cette page : nous vous enverrons par e-mail une clé de licence et un lien de téléchargement.
- `restartAnswer`: Non. La version d’essai est limitée à une fois par appareil et installer une nouvelle version ne la prolonge pas. Reculer la date de l’appareil met fin immédiatement à la version d’essai.
- `betaBadge`: Essai de 30 jours
- `heroNote`: Vous pouvez utiliser toutes les fonctionnalités pendant 30 jours à compter du premier lancement. Ensuite, achetez Pro pour continuer.
- `afterTrial`: Vous pouvez ouvrir et lire les documents et faire des recherches dans un document, mais l’écriture manuscrite et la recherche dans tous les documents sont désactivées. Vos documents et votre écriture manuscrite ne sont pas supprimés. Pour continuer, Pro est nécessaire.
- `metaDescription`: Windows x64 · Toutes les fonctionnalités pendant 30 jours · Pro $29 en achat unique

## pt

- `action`: Comprar Pro
- `note`: Após a compra, enviamos uma chave de licença por e-mail. Cole-a em Settings → License no aplicativo.
- `buyQuestion`: Como compro o Pro?
- `buyAnswer`: Pague pelo botão Comprar Pro nesta página e enviaremos por e-mail uma chave de licença e um link de download.
- `restartAnswer`: Não. A versão de teste é uma vez por dispositivo, e instalar uma nova versão não a prolonga. Atrasar a data do dispositivo encerra o teste imediatamente.
- `betaBadge`: Teste de 30 dias
- `heroNote`: Você pode usar todos os recursos por 30 dias a partir da primeira abertura. Depois disso, compre o Pro para continuar.
- `afterTrial`: Você pode abrir e ler documentos e pesquisar dentro de um documento, mas a escrita à mão e a pesquisa em todos os documentos ficam desativadas. Seus documentos e sua escrita à mão não são excluídos. Para continuar, é preciso ter o Pro.
- `metaDescription`: Windows x64 · Todos os recursos por 30 dias · Pro $29 em compra única

## it

- `action`: Acquista Pro
- `note`: Dopo l’acquisto ti inviamo una chiave di licenza via e-mail. Incollala in Settings → License nell’app.
- `buyQuestion`: Come acquisto Pro?
- `buyAnswer`: Paga con il pulsante Acquista Pro in questa pagina e ti invieremo via e-mail una chiave di licenza e un link per il download.
- `restartAnswer`: No. La versione di prova è una per dispositivo e installare una nuova versione non la prolunga. Riportare indietro la data del dispositivo termina subito la prova.
- `betaBadge`: Prova di 30 giorni
- `heroNote`: Puoi usare tutte le funzioni per 30 giorni dal primo avvio. Dopo, acquista Pro per continuare.
- `afterTrial`: Puoi aprire e leggere i documenti e cercare all’interno di un documento, ma la scrittura a mano e la ricerca in tutti i documenti sono disattivate. I tuoi documenti e la tua scrittura a mano non vengono eliminati. Per continuare serve Pro.
- `metaDescription`: Windows x64 · Tutte le funzioni per 30 giorni · Pro $29 con acquisto una tantum
