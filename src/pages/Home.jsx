import { useState, useEffect } from 'react';
import { getAgents } from '../services/valorantApi';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Hero from '../components/home/Hero';
import FeaturedAgentCard from '../components/home/FeaturedAgentCard';

export default function Home() {
  
  //Create states to controll dynamic content:
  const [agents, setAgents] = useState([]);
  const [featuredAgent, setFeaturedAgent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //useEffect hook to load api data on the component render:
  useEffect(() => {
    async function fetchInitialData() {
      try {
        setLoading(true);
        const agentsData = await getAgents();
        setAgents(agentsData);

        if (agentsData.length > 0) {
          setFeaturedAgent(agentsData[0]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchInitialData();
  }, []);

  //Define functions to handle the buttons on the featured agent card:
  function handleNextFeaturedAgent() {
    if (!featuredAgent || agents.length === 0) return;
    const actualIndex = agents.findIndex(a => a.uuid === featuredAgent.uuid);
    const nextIndex = (actualIndex + 1) % agents.length;
    setFeaturedAgent(agents[nextIndex]);
  }

  function handlePrevFeaturedAgent() {
    if (!featuredAgent || agents.length === 0) return;
    const actualIndex = agents.findIndex(a => a.uuid === featuredAgent.uuid);
    const nextIndex = (actualIndex - 1 + agents.length) % agents.length;
    setFeaturedAgent(agents[nextIndex]);
  }

  return (
    <div className="min-h-screen bg-val-bg text-val-text font-sans flex flex-col selection:bg-val-red selection:text-white relative overflow-x-hidden">
      <div className="h-1 bg-val-red w-full" />
      
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Hero />
          <FeaturedAgentCard 
            agent={featuredAgent} 
            loading={loading} 
            error={error} 
            onNext={handleNextFeaturedAgent}
            onPrev={handlePrevFeaturedAgent}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}