function MapHeader({ map }) {
  if (!map) return null;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-val-surface pb-4 mb-6">
      <div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-val-cyan tracking-widest uppercase">
            // TACTICAL MAP
          </span>
          {map.coordinates && (
            <span className="text-[10px] font-mono text-val-muted">
              [{map.coordinates}]
            </span>
          )}
        </div>
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-val-text">
          {map.displayName}
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs font-mono text-val-muted uppercase">
          TACTICAL BOARD STATUS: <span className="text-val-cyan">READY</span>
        </span>
      </div>
    </div>
  );
}

export default MapHeader;