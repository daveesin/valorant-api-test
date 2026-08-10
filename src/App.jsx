import "./App.css";

function App() {
  return(
    <div className="min-h-screen bg-val-bg text-val-text font-sans flex flex-col selection:bg-val-red selection:text-white relative overflow-x-hidden">
      
      <div className="h-1 bg-val-red w-full" />

      {/* 1. HEADER / NAVBAR */}
      <header className="border-b border-val-surface bg-val-bg/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-5 h-5 bg-val-red rotate-45 transition-transform duration-300 group-hover:rotate-180" />
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-widest uppercase leading-none">
                VAL<span className="text-val-red">//</span>HUB
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest text-val-muted">
            <a href="#agentes" className="p-3 hover:bg-val-red text-white border-white transition-colors flex items-center gap-1">
              <span className="text-white">AGENTS</span>
            </a>
            <a href="#armas" className="p-3 hover:bg-val-red text-white border-white transition-colors flex items-center gap-1">
              <span className="text-white">ARSENAL</span>
            </a>
            <a href="#mapas" className="p-3 hover:bg-val-red text-white border-white transition-colors flex items-center gap-1">
              <span className="text-white">MAPS</span>
            </a>
          </nav>

        </div>
      </header>

      {/* 2. HERO SECTION */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-val-surface border-l-2 border-val-cyan text-val-cyan text-xs font-mono tracking-widest uppercase">
              <span>TATICAL INTELLIGENCE CENTER</span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
              OUTSMART, OUTPLAY, <br />
              <span className="text-val-red drop-shadow-[0_0_20px_rgba(255,70,85,0.4)]">
                OUTRANK.
              </span>
            </h1>

            <p className="text-val-muted text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Explore datailed information about agents, skills, weapons and radar in real time. Use this platform and improve your game level.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-val-red text-white font-black uppercase text-sm tracking-widest px-8 py-4 hover:bg-val-text hover:text-val-bg transition-all duration-300 shadow-[4px_4px_0px_0px_#00F5FF]">
                EXPLORE AGENTS
              </button>
              <button className="border border-val-muted/40 text-val-text font-bold uppercase text-sm tracking-widest px-8 py-4 hover:border-val-red hover:text-val-red transition-all duration-300">
                SEE ARSENAL
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-val-surface font-mono">
              <div>
                <span className="text-2xl font-bold text-val-text block">26+</span>
                <span className="text-[11px] text-val-muted uppercase">Agents</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-val-text block">18+</span>
                <span className="text-[11px] text-val-muted uppercase">Weapons</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-val-cyan block">100%</span>
                <span className="text-[11px] text-val-muted uppercase">Sync</span>
              </div>
            </div>

          </div>

          {/* Agent Preview */}
          <div className="lg:col-span-5 relative">
            
            {/* Decoration in Background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-val-red to-val-cyan opacity-20 blur-xl" />

            <div className="relative bg-val-surface border border-val-surface p-6 sm:p-8 space-y-6">
              
              {/* Card Header */}
              <div className="flex justify-between items-start border-b border-val-bg pb-4">
                <div>
                  <span className="text-[10px] font-mono text-val-cyan tracking-widest block uppercase">
                    // FEATURED ADGENT - EXAMPLE
                  </span>
                  <h3 className="text-3xl font-black uppercase text-val-text tracking-wider">
                    JETT
                  </h3>
                </div>
                <span className="px-2 py-1 bg-val-bg text-val-red text-[10px] font-mono font-bold uppercase tracking-wider border border-val-red/30">
                  DUELIST
                </span>
              </div>

              {/* Image Preview Area */}
              <div className="h-64 bg-val-bg/80 border border-dashed border-val-muted/30 flex flex-col items-center justify-center p-4 relative group overflow-hidden">
                <div className="w-12 h-12 rounded-full border-2 border-val-red border-t-transparent animate-spin mb-3" />
                <span className="text-xs font-mono text-val-muted uppercase tracking-widest">
                  [ AGENT_API_DATA_PLACEHOLDER ]
                </span>
                <span className="text-[10px] font-mono text-val-muted/60 mt-1">
                  Waiting API Integration...
                </span>
              </div>

              {/* Card Footer */}
              <div className="space-y-2 font-mono text-xs text-val-muted">
                <div className="flex justify-between">
                  <span>FROM:</span>
                  <span className="text-val-text font-bold">SOUTH KOREA</span>
                </div>
                <div className="flex justify-between">
                  <span>MAIN SKILL:</span>
                  <span className="text-val-cyan font-bold">TAILWIND</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

      {/* 3. FOOTER */}
      <footer className="border-t border-val-surface py-6 bg-val-bg">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-val-muted">
          <div>
            <span>VAL//HUB &copy; 2026</span>
          </div>
          <div className="flex gap-4">
            <span className="hover:text-val-text cursor-pointer"><a href="https://valorant-api.com/">// VALORANT-API</a></span>
            <span className="hover:text-val-text cursor-pointer"><a href="https://github.com/daveesin">// GITHUB</a></span>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
