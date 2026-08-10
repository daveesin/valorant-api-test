function Footer() {
  return (
    <footer className="border-t border-val-surface py-6 bg-val-bg">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-val-muted">
        <div>
          <span>VAL//HUB &copy; 2026</span>
        </div>
        <div className="flex gap-4">
          <a href="https://valorant-api.com/" target="_blank" rel="noreferrer" className="hover:text-val-text">// VALORANT-API</a>
          <a href="https://github.com/daveesin" target="_blank" rel="noreferrer" className="hover:text-val-text">// GITHUB</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;