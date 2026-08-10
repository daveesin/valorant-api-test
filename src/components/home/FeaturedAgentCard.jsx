function FeaturedAgentCard({ agent, loading, error }) {
  return (
    <div className="lg:col-span-5 relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-val-red to-val-cyan opacity-20 blur-xl" />

      <div className="relative bg-val-surface border border-val-surface p-6 sm:p-8 space-y-6">
        
        {/* Loading case */}
        {loading && (
          <div className="h-80 flex flex-col items-center justify-center font-mono text-val-cyan text-xs">
            <div className="w-10 h-10 border-2 border-val-red border-t-transparent animate-spin mb-3" />
            <span className="animate-pulse">// LOADING AGENT DATA...</span>
          </div>
        )}

        {/* Error case */}
        {error && !loading && (
          <div className="h-80 flex items-center justify-center font-mono text-val-red text-xs text-center border border-val-red/30 bg-val-red/10 p-4">
            [ERROR]: Failed to load agent details.
          </div>
        )}

        {/* When data is okay */}
        {!loading && !error && agent && (
          <>
            <div className="flex justify-between items-start border-b border-val-bg pb-4">
              <div>
                <span className="text-[10px] font-mono text-val-cyan tracking-widest block uppercase">
                  // FEATURED AGENT
                </span>
                <h3 className="text-3xl font-black uppercase text-val-text tracking-wider">
                  {agent.displayName}
                </h3>
              </div>
              <span className="px-2 py-1 bg-val-bg text-val-red text-[10px] font-mono font-bold uppercase tracking-wider border border-val-red/30">
                {agent.role?.displayName || "AGENT"}
              </span>
            </div>

            <div className="h-80 bg-val-bg/80 flex items-center justify-center relative overflow-hidden my-4 border border-val-muted/10">
              <img 
                src={agent.fullPortrait || agent.displayIcon} 
                alt={agent.displayName}
                className="h-full object-contain drop-shadow-[0_0_15px_rgba(255,70,85,0.4)]"
              />
            </div>

            <div className="space-y-2 font-mono text-xs text-val-muted">
              <div className="flex justify-between">
                <span>ROLE:</span>
                <span className="text-val-text font-bold uppercase">{agent.role.displayName}</span>
              </div>
              <div className="flex justify-between">
                <span>MAIN ABILITY:</span>
                <span className="text-val-cyan font-bold uppercase">
                  {agent.abilities?.[0]?.displayName || "N/A"}
                </span>
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default FeaturedAgentCard;