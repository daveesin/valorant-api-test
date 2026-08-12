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
        return (
            <div className="min-h-screen bg-[#0f1923] text-white flex flex-col items-center justify-center font-mono gap-3">
                <div className="w-12 h-12 border-4 border-val-red border-t-transparent rounded-full animate-spin" />
                <h1 className="text-val-red tracking-widest text-sm animate-pulse">// INITIALIZING TACTICAL DATA...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-[#0f1923] text-white flex flex-col items-center justify-center font-mono p-4">
                <div className="border border-red-500/50 bg-red-950/20 p-6 max-w-md w-full text-center">
                    <span className="text-xs text-red-500 uppercase tracking-widest block mb-2">// SYSTEM ERROR</span>
                    <div className="text-red-400 text-sm font-semibold mb-4">[ERRO]: {error}</div>
                    <button 
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-red-600/20 border border-red-500 text-red-400 text-xs tracking-wider uppercase hover:bg-red-600 hover:text-white transition-colors"
                    >
                        Retry Connection
                    </button>
                </div>
            </div>
        );
    }

    if (!agent) {
        return (
            <div className="min-h-screen bg-[#0f1923] text-white flex flex-col items-center justify-center font-mono p-4">
                <div className="border border-[#1f2f3d] bg-[#171e2b]/80 p-6 text-center">
                    <span className="text-xs text-val-cyan uppercase tracking-widest block mb-1">// 404 DATA NOT FOUND</span>
                    <div className="text-gray-300 text-sm font-semibold">Agente não encontrado.</div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen justify-between w-full bg-[#0f1923] text-white selection:bg-val-red selection:text-white">
            <div className="h-1 bg-val-red w-full" />
            <Navbar />
            
            <main className="flex-1 container mx-auto px-4 py-8 flex flex-col justify-center">
                {/* Hero Section Tática do Agente */}
                <div className="relative border border-[#1f2f3d] bg-[#171e2b]/50 p-6 sm:p-10 overflow-hidden">
                    {/* Linhas e Marcas Táticas de Fundo */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-val-red" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-val-red" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-val-red" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-val-red" />
                    
                    {/* Marca d'água com o nome gigante no fundo */}
                    <span className="absolute -bottom-10 right-0 text-7xl sm:text-9xl font-black font-mono text-white/5 uppercase select-none pointer-events-none tracking-tighter">
                        {agent.displayName}
                    </span>

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        {/* Arte/Retrato do Agente */}
                        <div className="relative w-full max-w-sm aspect-square sm:aspect-4/5 flex items-center justify-center bg-[#0f1923]/80 border border-[#1f2f3d]">
                            <img 
                                src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon} 
                                alt={agent.displayName} 
                                className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:scale-105"
                            />
                            {/* Marcação de Categoria no Canto */}
                            {agent.role?.displayIcon && (
                                <div className="absolute top-3 left-3 bg-[#0f1923]/90 border border-[#1f2f3d] p-1.5 flex items-center gap-2">
                                    <img src={agent.role.displayIcon} alt="" className="w-5 h-5 brightness-200 drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]" />
                                    <span className="text-[10px] font-mono text-gray-300 uppercase tracking-wider">{agent.role.displayName}</span>
                                </div>
                            )}
                        </div>

                        {/* Informações Básicas do Agente */}
                        <div className="flex-1 flex flex-col gap-4">
                            <div>
                                <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-widest block mb-1">
                                    // AGENT DOSSIER
                                </span>
                                <h1 className="text-4xl sm:text-6xl font-black font-mono text-white uppercase tracking-wider">
                                    {agent.displayName}
                                </h1>
                            </div>

                            {/* Biografia / Descrição */}
                            {agent.description && (
                                <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed border-l-2 border-val-red pl-4 bg-[#0f1923]/40 py-2">
                                    {agent.description}
                                </p>
                            )}

                            {/* Habilidades Rápidas */}
                            {agent.abilities && agent.abilities.length > 0 && (
                                <div className="mt-4">
                                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-3">
                                        // SPECIAL ABILITIES
                                    </span>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                        {agent.abilities.map((ability, idx) => (
                                            <div 
                                                key={ability.slot || idx}
                                                className="bg-[#0f1923] border border-[#1f2f3d] p-3 flex flex-col items-center text-center gap-2 group hover:border-val-red transition-colors"
                                            >
                                                {ability.displayIcon ? (
                                                    <img src={ability.displayIcon} alt={ability.displayName} className="w-10 h-10 object-contain brightness-200 drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,70,85,0.8)] transition-all duration-300" />
                                                ) : (
                                                    <div className="w-8 h-8 flex items-center justify-center font-mono text-xs text-gray-500">[N/A]</div>
                                                )}
                                                <span className="text-xs font-mono text-gray-200 uppercase font-bold tracking-wider truncate w-full">
                                                    {ability.displayName}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default AgentDetails;