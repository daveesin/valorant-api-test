import { getAgents} from "../services/valorantApi";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import AgentSelector from "../components/agents/AgentSelector";
import { useEffect, useState } from "react";

function Agents() {

    const [agents, setAgents] = useState([]);
    const [selectedAgent, setSelectedAgent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchAgents(){
            try{
                setLoading(true);
                const newAgents = await getAgents();

                setAgents(newAgents);
            } catch(err){
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        
        fetchAgents();

    }, []);

    return (
        <div className="w-full min-h-screen flex flex-col justify-between bg-val-bg text-val-text font-sans p-4 md:p-8">
            <div className="h-1 bg-val-red w-full" />
            <Navbar />
            <main className="w-full flex-1 my-6">
                {error ? (
                    <div className="p-4 bg-val-red/10 border border-val-red font-mono text-xs text-val-red text-center my-auto">
                        [ERROR]: {error}
                    </div>
                ) : (
                    <>
                    <div className="w-full">
                        <AgentSelector
                            agents={agents}
                            selectedAgent={selectedAgent}
                            onSelectAgent={setSelectedAgent}
                        />
                    </div>
                    </>
                )}
            </main>
            <Footer />
        </div>
    );
}

export default Agents;