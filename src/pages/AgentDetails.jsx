import { useState, useEffect } from "react";
import { getAgentById } from "../services/valorantApi";
import { useParams } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function AgentDetails() {

    const { agentUuid } = useParams();
    const [agent, setAgent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        async function fetchAgentData(){
            try {
                setLoading(true);
                const newSelectedAgent = await getAgentById(agentUuid);

                setAgent(newSelectedAgent);
            } catch(err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }            

        }

        if(agentUuid) {
            fetchAgentData();
        }

    }, [agentUuid]);


    if (loading) {
        return <h1 className="text-black p-4 font-mono">Carregando...</h1>;
    }

    if (error) {
        return <div className="text-red-500 p-4 font-mono">[ERRO]: {error}</div>;
    }

    if (!agent) {
        return <div className="text-black p-4 font-mono">Agente não encontrado.</div>;
    }

    return (
        <div className="flex flex-col min-h-screen justify-between w-full">
            <Navbar />
            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold font-mono text-black">
                    Agent Details: {agent.displayName}
                </h1>
            </main>
            <Footer />
        </div>
    );
}

export default AgentDetails;