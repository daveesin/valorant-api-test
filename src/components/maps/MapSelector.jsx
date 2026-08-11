import { useState } from 'react';

function MapSelector({ maps, selectedMap, onSelectMap }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtra os mapas ignorando letras maiúsculas/minúsculas
  const filteredMaps = maps.filter((map) =>
    map.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-3">
      {/* Search input */}
      <div className="relative">
        <input
          type="text"
          placeholder="SEARCH MAP..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="w-full bg-val-surface/60 border border-val-surface px-4 py-2 text-xs font-mono text-val-text placeholder:text-val-muted/50 focus:outline-none focus:border-val-red transition-colors uppercase tracking-wider"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-val-muted hover:text-val-red"
          >
            [X]
          </button>
        )}
      </div>

      {/* Lista de Mapas Filtrados */}
      <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto max-h-[60vh] p-1 custom-scrollbar">
        {filteredMaps.length > 0 ? (
          filteredMaps.map((map) => {
            const isSelected = selectedMap?.uuid === map.uuid;

            return (
              <button
                key={map.uuid}
                onClick={() => onSelectMap(map)}
                className={`relative shrink-0 w-44 lg:w-full h-20 overflow-hidden border text-left transition-all duration-200 group cursor-pointer ${
                  isSelected
                    ? 'border-val-red ring-1 ring-val-red'
                    : 'border-val-surface hover:border-val-muted/40 opacity-70 hover:opacity-100'
                }`}
              >
                {/* Background Image */}
                <img
                  src={map.listViewIcon || map.splash}
                  alt={map.displayName}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay de Gradiente */}
                <div className={`absolute inset-0 bg-linear-to-t from-val-bg via-val-bg/60 to-transparent ${
                  isSelected ? 'from-val-bg/90' : ''
                }`} />

                {/* Nome do Mapa */}
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
          })
        ) : (
          <div className="py-8 text-center font-mono text-xs text-val-muted border border-dashed border-val-surface">
            [NO MAPS FOUND]
          </div>
        )}
      </div>
    </div>
  );
}

export default MapSelector;