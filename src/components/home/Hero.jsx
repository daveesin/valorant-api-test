function Hero() {
  return (
    <div className="lg:col-span-7 space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-val-surface border-l-2 border-val-cyan text-val-cyan text-xs font-mono tracking-widest uppercase">
        <span>VALORANT INFO CENTER</span>
      </div>

      <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
        OUTSMART, OUTPLAY, <br />
        <span className="text-val-red drop-shadow-[0_0_20px_rgba(255,70,85,0.4)]">
          OUTRANK.
        </span>
      </h1>

      <p className="text-val-muted text-base sm:text-lg max-w-xl font-normal leading-relaxed">
        Explore detailed information about agents, skills, weapons and radar in
        real time. Use this platform to info yourself and improve your game level.
      </p>

      <div className="flex flex-wrap gap-4 pt-4">
        <button className="bg-val-red text-white font-black uppercase text-sm tracking-widest px-8 py-4 hover:bg-val-text hover:text-val-bg transition-all duration-300 shadow-[4px_4px_0px_0px_#00F5FF] cursor-pointer">
          EXPLORE AGENTS
        </button>
        <button className="border border-val-muted/40 text-val-text font-bold uppercase text-sm tracking-widest px-8 py-4 hover:border-val-red hover:text-val-red transition-all duration-300 cursor-pointer">
          SEE ARSENAL
        </button>
      </div>

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
  );
}

export default Hero;