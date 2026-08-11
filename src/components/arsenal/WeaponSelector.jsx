import { useState } from "react";

function WeaponSelector( {weapons, selectedWeapon, onSelectWeapon} ) {

    const [searchTerm, setSearchTerm] = useState("");

    const filteredWeapons = weapons.filter((w) =>
        w.displayName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(

        <aside className="w-full md:w-80 bg-[#171e2b] border-r border-[#1f2f3d] p-4 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono text-val-cyan uppercase tracking-widest">// ARSENAL INDEX</span>
            <h2 className="text-xl font-bold tracking-wider uppercase font-mono">SELECT WEAPON</h2>
            </div>

            <input
                type="text"
                placeholder="SEARCH WEAPON..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#0f1923] border border-[#1f2f3d] focus:border-val-cyan px-3 py-2 text-xs font-mono text-white outline-none transition-colors"
            />

            <div className="flex flex-col gap-2 overflow-y-auto max-h-[70vh] pr-1 custom-scrollbar">
            {filteredWeapons.map((weapon) => {
                const isSelected = selectedWeapon?.uuid === weapon.uuid;
                return (
                <button
                    key={weapon.uuid}
                    onClick={() => onSelectWeapon(weapon)}
                    className={`flex items-center justify-between p-3 border text-left transition-all cursor-pointer ${
                    isSelected
                        ? 'bg-val-red/10 border-val-red text-white'
                        : 'bg-[#0f1923]/60 border-[#1f2f3d] text-gray-400 hover:border-gray-500 hover:text-white'
                    }`}
                >
                    <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wider font-mono">{weapon.displayName}</span>
                    <span className="text-[9px] font-mono text-gray-500 uppercase">
                        {weapon.category?.replace('EEquippableCategory::', '')}
                    </span>
                    </div>
                    <img
                    src={weapon.killStreamIcon || weapon.displayIcon}
                    alt={weapon.displayName}
                    className="h-6 object-contain max-w-20"
                    />
                </button>
                );
            })}
            </div>
        </aside>

    )
}

export default WeaponSelector;