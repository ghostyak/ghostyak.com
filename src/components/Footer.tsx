export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} GhostYak</p>
        <a href="https://github.com/ghostyak/boxes">GitHub에서 Boxes 보기</a>
      </div>
    </footer>
  );
}
