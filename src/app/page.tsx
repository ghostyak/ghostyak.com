import Image from "next/image";
import boxesIcon from "../../public/images/boxes-icon.png";
import { EditionCard } from "@/components/EditionCard";
import { FeatureCard } from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { boxes } from "@/data/products";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="product-title">
                <Image src={boxesIcon} alt="" width={84} height={84} priority />
                <p>Ghostyak Boxes</p>
              </div>
              <h1>필요한 파일이 한눈에 보이는 바탕화면</h1>
              <p className="intro">흩어진 파일과 바로가기를 나만의 박스에 모아보세요.</p>
              <div className="hero-actions">
                <a className="primary-button" href="#download">
                  Free와 Pro 비교하기
                </a>
              </div>
              <p className="hero-meta">
                버전 {boxes.version} · {boxes.platform} · {boxes.fileSize}
              </p>
              <p className="preview-notice">
                <strong>초기 개발 버전</strong> — 중요한 바탕화면 구성에서는 별도의 Windows 사용자 환경에서 먼저 시험해 주세요.
              </p>
            </div>
            <figure>
              <Image
                src="/images/boxes-hero-concept-v3.png"
                alt="넓은 바탕화면 오른쪽에 사진과 앱을 두 개의 박스로 정리한 Boxes 콘셉트 화면"
                width={1672}
                height={941}
                sizes="(max-width: 1220px) calc(100vw - 40px), 1180px"
                priority
              />
            </figure>
          </div>
        </section>

        <section className="editions" id="download" aria-labelledby="editions-title">
          <div className="container editions-inner">
            <div className="editions-heading">
              <p className="section-label">다운로드</p>
              <h2 id="editions-title">내게 맞는 Boxes로 시작하세요.</h2>
              <p>
                핵심 기능을 계속 무료로 사용하거나, 30일 동안 박스 수 제한 없는
                Pro 환경을 경험할 수 있습니다.
              </p>
            </div>
            <div className="edition-grid">
              {boxes.editions.map((edition) => (
                <EditionCard
                  key={edition.id}
                  {...edition}
                  featured={edition.id === "trial"}
                />
              ))}
            </div>
            <div className="download-details" aria-label="다운로드 정보">
              <span>버전 {boxes.version}</span>
              <span>{boxes.platform}</span>
              <span>{boxes.fileSize}</span>
              <span>{boxes.requirement}</span>
            </div>
            <p className="trial-note">
              Pro 평가가 끝나면 Free로 전환되며, 기존 박스와 파일은 그대로 유지됩니다.
            </p>
          </div>
        </section>

        <section className="features" id="features" aria-labelledby="features-title">
          <div className="container">
            <p className="section-label">주요 기능</p>
            <h2 id="features-title">
              파일은 한곳에 모으고,
              <br /> 필요한 순간 바로 찾으세요.
            </h2>
            <div className="feature-grid">
              <FeatureCard number="01" title="박스 단위로 정리" description="파일, 폴더와 바로가기를 목적에 맞는 여러 박스로 나누어 한눈에 찾을 수 있습니다." />
              <FeatureCard number="02" title="내 방식대로 배치" description="박스를 이동하거나 크기를 조절하고, 접기와 잠금으로 필요한 공간만 남길 수 있습니다." />
              <FeatureCard number="03" title="화면 구성별 복원" description="모니터 구성에 맞춰 박스의 위치와 크기를 기억해 익숙한 작업 환경을 유지합니다." />
              <FeatureCard number="04" title="사진 뷰어" description="박스 안의 사진과 폴더 속 이미지를 슬라이드쇼로 감상하고 전환 간격과 순서를 설정할 수 있습니다." />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
