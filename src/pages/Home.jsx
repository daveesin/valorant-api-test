import { useState, useEffect } from 'react';
import { getAgents } from '../services/valorantApi';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Hero from '../components/home/Hero';
import FeaturedAgentCard from '../components/home/FeaturedAgentCard';

export default function Home() {
  const [agents, setAgents] = useState([]);
  const [featuredAgent, setFeaturedAgent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}