function MapSelector({ maps, selectedMap, onSelectMap }) {
  return (
    <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto max-h-[70vh] p-1 custom-scrollbar">
      {maps.map((map) => {
        const isSelected = selectedMap?.uuid === map.uuid;

        return (
          <button
            key={map.uuid}
            onClick={() => onSelectMap(map)}
            className={`relative shrink-0 w-44 lg:w-full h-20 overflow-hidden border text-left transition-all duration-200 group ${
              isSelected
                ? 'border-val-red ring-1 ring-val-red'
                : 'border-val-surface hover:border-val-muted/40 opacity-70 hover:opacity-100'
            }`}
          >
            {/* Map Backimage */}
            <img
              src={map.listViewIcon || map.splash}
              alt={map.displayName}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Gradiant overlay */}
            <div className={`absolute inset-0 bg-linear-to-t from-val-bg via-val-bg/60 to-transparent ${
              isSelected ? 'from-val-bg/90' : ''
            }`} />

            {/* Unnamed content */}
            <div className="absolute bottom-2 left-3 right-3 flex justify-between items-end">
              <span className={`font-black uppercase tracking-wider text-sm ${
                isSelected ? 'text-val-red' : 'text-val-text'
              }`}>
                {map.displayName}
              </span>
              {isSelected && (
                <span className="w-1.5 h-1.5 bg-val-red rounded-full animate-pulse" />
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default MapSelector;