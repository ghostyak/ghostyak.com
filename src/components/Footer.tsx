export function Footer({ githubLabel }: { githubLabel: string }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} GhostYak</p>
        <a href="https://github.com/ghostyak/boxes">{githubLabel}</a>
      </div>
    </footer>
  );
}
