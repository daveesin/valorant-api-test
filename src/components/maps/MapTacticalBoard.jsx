function MapTacticalBoard({ map, loading }) {
  if (loading) {
    return (
      <div className="w-full h-125 lg:h-150 bg-val-surface/40 border border-val-surface flex flex-col items-center justify-center font-mono text-xs text-val-cyan">
        <div className="w-10 h-10 border-2 border-val-red border-t-transparent animate-spin mb-3" />
        <span>// LOADING TACTICAL MAP DATA...</span>
      </div>
    );
  }

  if (!map) {
    return (
      <div className="w-full h-125 lg:h-150 bg-val-surface/40 border border-val-surface flex items-center justify-center font-mono text-xs text-val-muted">
        [NO MAP SELECTED]
      </div>
    );
  }

  return (
    <div className="relative w-full h-125 lg:h-150 bg-val-bg border border-val-surface flex items-center justify-center p-4 overflow-hidden group">
      
      {/* Tactical Back Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />

      {/* DisplayIcon returned by API */}
      {map.displayIcon ? (
        <img
          src={map.displayIcon}
          alt={`Minimapa de ${map.displayName}`}
          className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_20px_rgba(0,245,255,0.15)] relative z-10"
        />
      ) : (
        <div className="font-mono text-xs text-val-red z-10">
          [WARNING]: Minimap layout unavailable for this map.
        </div>
      )}

      <div className="absolute bottom-3 right-4 font-mono text-[10px] text-val-muted/40 z-10 select-none">
        VAL//HUB STRATEGY BOARD
      </div>
    </div>
  );
}

export default MapTacticalBoard;