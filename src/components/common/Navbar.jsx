import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="border-b border-val-surface bg-val-bg/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-5 h-5 bg-val-red rotate-45 transition-transform duration-300 group-hover:rotate-180" />
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-widest uppercase leading-none">
              VAL<span className="text-val-red">//</span>HUB
            </span>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest text-val-muted">
          <a href="#agentes" className="p-3 hover:bg-val-red text-white transition-colors flex items-center gap-1">
            <span>AGENTS</span>
          </a>
          <a href="#armas" className="p-3 hover:bg-val-red text-white transition-colors flex items-center gap-1">
            <span>ARSENAL</span>
          </a>
          <Link to='/maps' className="p-3 hover:bg-val-red text-white transition-colors flex items-center gap-1">
            MAPS
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;