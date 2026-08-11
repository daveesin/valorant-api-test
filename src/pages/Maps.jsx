import { useState, useEffect } from 'react';
import { getMaps } from '../services/valorantApi';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import MapHeader from '../components/maps/MapHeader';
import MapSelector from '../components/maps/MapSelector';
import MapTacticalBoard from '../components/maps/MapTacticalBoard';

export default function Maps() {
  const [maps, setMaps] = useState([]);
  const [selectedMap, setSelectedMap] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMaps() {
      try {
        setLoading(true);
        const mapsData = await getMaps();
        
        // Filtra mapas sem minimapa válido (ex: mapas do modo Treino/The Range)
        const playableMaps = mapsData.filter(map => map.displayIcon);
        
        setMaps(playableMaps);

        if (playableMaps.length > 0) {
          setSelectedMap(playableMaps[0]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMaps();
  }, []);

  return (
    <div className="min-h-screen bg-val-bg text-val-text font-sans flex flex-col selection:bg-val-red selection:text-white">
      <div className="h-1 bg-val-red w-full" />
      
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8 flex flex-col">
        {error ? (
          <div className="p-4 bg-val-red/10 border border-val-red font-mono text-xs text-val-red text-center my-auto">
            [ERROR]: {error}
          </div>
        ) : (
          <>
            <MapHeader map={selectedMap} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Sidebar de Seleção de Mapas */}
              <div className="lg:col-span-4 order-2 lg:order-1">
                <span className="text-[10px] font-mono text-val-muted uppercase tracking-widest mb-3 block">
                  // SELECT MAP ({maps.length})
                </span>
                <MapSelector
                  maps={maps}
                  selectedMap={selectedMap}
                  onSelectMap={setSelectedMap}
                />
              </div>

              {/* Quadro do Minimapa */}
              <div className="lg:col-span-8 order-1 lg:order-2">
                <MapTacticalBoard
                  map={selectedMap}
                  loading={loading}
                />
              </div>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}