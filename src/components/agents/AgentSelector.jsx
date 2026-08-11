import { useState } from "react";

function AgentSelector({ agents, selectedAgent, onSelectAgent }) {

    const [searchTerm, setSearchTerm] = useState("");

    const filteredAgents = agents.filter((a) => a.displayName.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="flex flex-col gap-4 w-full">
            {/* Search input */}
            <div className="relative">
                <input
                    type="text"
                    placeholder="SEARCH AN AGENT..."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    className="w-full bg-[#171e2b]/80 border border-[#1f2f3d] px-4 py-2.5 text-xs font-mono text-white placeholder:text-gray-500 focus:outline-none focus:border-val-red transition-colors uppercase tracking-wider"
                />
            </div>

            {/* Agents Filtered List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-h-[calc(100vh-220px)] overflow-y-auto pr-1 custom-scrollbar">
                {filteredAgents.length > 0 ? (
                    filteredAgents.map((agent) => {
                        const isSelected = selectedAgent?.uuid === agent.uuid;
                        const agentImage = agent.bustPortrait || agent.displayIcon || agent.fullPortraitV2;

                        return (
                        <button
                            key={agent.uuid}
                            onClick={() => onSelectAgent(agent)}
                            className={`relative h-44 sm:h-52 overflow-hidden border text-left transition-all duration-200 group cursor-pointer bg-[#0f1923] ${
                                isSelected
                                    ? "border-val-red ring-1 ring-val-red shadow-[0_0_15px_rgba(255,70,85,0.3)]"
                                    : "border-[#1f2f3d] hover:border-gray-400/50 opacity-85 hover:opacity-100"
                            }`}
                        >
                            {/* Role Icon Fade */}
                            {agent.role?.displayIcon && (
                                <img
                                    src={agent.role.displayIcon}
                                    alt=""
                                    className="absolute top-2 right-2 w-8 h-8 opacity-10 pointer-events-none filter invert"
                                />
                            )}
                            
                            {/* Agent Image */}
                            <img
                                src={agentImage}
                                alt={agent.displayName}
                                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300 z-0"
                            />
                            
                            {/* Overlay de Gradiente Tático */}
                            <div
                            className={`absolute inset-0 bg-linear-to-t from-[#0f1923] via-[#0f1923]/40 to-transparent transition-opacity duration-300 z-10 ${
                                isSelected ? "from-[#0f1923] via-[#0f1923]/30" : "group-hover:opacity-80"
                            }`}
                            />

                            {/* Borda decorativa/corte no canto superior (Aesthetic Valorant) */}
                            <div
                            className={`absolute top-0 left-0 w-2 h-2 border-t border-l ${
                                isSelected ? "border-val-red" : "border-gray-500/40"
                            }`}
                            />

                            {/* Info no rodapé do Card */}
                            <div className="absolute bottom-3 left-3 right-3 z-20 flex flex-col gap-0.5">
                                <span className="text-[9px] font-mono text-val-cyan uppercase tracking-widest leading-none">
                                    // {agent.role?.displayName || "AGENT"}
                                </span>
                            
                                <div className="flex justify-between items-center">
                                    <span
                                        className={`font-black uppercase tracking-wider text-sm sm:text-base font-mono ${
                                            isSelected ? "text-val-red" : "text-white"
                                        }`}
                                    >
                                        {agent.displayName}
                                    </span>

                                {isSelected && (
                                    <span className="w-2 h-2 bg-val-red rounded-full animate-pulse shadow-[0_0_8px_#ff4655]" />
                                )}
                                </div>
                            </div>
                        </button>
                        );
                    })
                ) : (
                <div className="py-8 text-center font-mono text-xs text-val-muted border border-dashed border-val-surface">
                    [NO AGENTS FOUND]
                </div>
                )}
            </div>
        </div>
    );
}

export default AgentSelector;