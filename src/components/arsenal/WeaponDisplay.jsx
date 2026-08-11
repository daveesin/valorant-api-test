function WeaponDisplay({ selectedWeapon }) {
  const stats = selectedWeapon?.weaponStats;
  const category = selectedWeapon?.category?.replace('EWeaponCategory::', '');

    return (
        <section className="flex-1 p-6 md:p-10 flex flex-col gap-8 justify-between relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-[#1c2733] via-[#0f1923] to-[#0a0f14]">
        
        {/* HEADER SECTION */}
        {selectedWeapon ? (
            <div className="flex justify-between items-start border-b border-[#1f2f3d] pb-6 relative z-10">
            <div>
                <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-val-cyan uppercase tracking-widest">
                    // CATEGORY: {category || 'N/A'}
                </span>
                {stats?.shopData?.cost !== undefined && (
                    <span className="bg-val-cyan/10 text-val-cyan text-[10px] font-mono px-2 py-0.5 border border-val-cyan/30">
                    ¤ {stats.shopData.cost}
                    </span>
                )}
                </div>
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight font-mono mt-1">
                {selectedWeapon.displayName}
                </h1>
            </div>

            <div className="text-right font-mono text-xs text-gray-400 hidden sm:block">
                <div>
                MAGAZINE: <span className="text-white font-bold">{stats?.magazineSize ?? 'N/A'}</span>
                </div>
                <div>
                WALL PENETRATION:{' '}
                <span className="text-white font-bold">
                    {stats?.wallPenetration?.replace('EWallPenetrationDisplayType::', '') ?? 'N/A'}
                </span>
                </div>
            </div>
            </div>
        ) : (
            <div className="border-b border-[#1f2f3d] pb-6">
            <span className="text-xs font-mono text-gray-500 uppercase">// NO WEAPON SELECTED</span>
            </div>
        )}

        {/* WEAPON PREVIEW */}
        <div className="relative flex-1 min-h-62.5 flex items-center justify-center my-4 group">
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
            <span className="text-8xl md:text-9xl font-black font-mono uppercase tracking-tighter text-white">
                {selectedWeapon?.displayName || 'VALORANT'}
            </span>
            </div>

            {selectedWeapon?.displayIcon && (
            <img
                src={selectedWeapon.displayIcon}
                alt={selectedWeapon.displayName}
                className="max-h-65 w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover:scale-105 relative z-10"
            />
            )}
        </div>

        {/* STATS & DAMAGE GRID */}
        {stats && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
            
            {/* FIRE SPECIFICATIONS */}
            <div className="bg-[#171e2b]/80 border border-[#1f2f3d] p-4 flex flex-col gap-3">
                <span className="text-[10px] font-mono text-val-cyan uppercase tracking-widest border-b border-[#1f2f3d] pb-1">
                // FIRE SPECIFICATIONS
                </span>

                <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div>
                    <span className="text-gray-500 block text-[10px]">FIRE RATE</span>
                    <span className="text-base font-bold text-white">
                    {stats.fireRate ?? 'N/A'} <span className="text-[10px] font-normal text-gray-400">rds/sec</span>
                    </span>
                </div>
                <div>
                    <span className="text-gray-500 block text-[10px]">RUN SPEED</span>
                    <span className="text-base font-bold text-white">
                    {stats.runSpeedMultiplier ? `${stats.runSpeedMultiplier}x` : 'N/A'}
                    </span>
                </div>
                <div>
                    <span className="text-gray-500 block text-[10px]">EQUIP SPEED</span>
                    <span className="text-base font-bold text-white">
                    {stats.equipTimeSeconds ? `${stats.equipTimeSeconds}s` : 'N/A'}
                    </span>
                </div>
                <div>
                    <span className="text-gray-500 block text-[10px]">RELOAD SPEED</span>
                    <span className="text-base font-bold text-white">
                    {stats.reloadTimeSeconds ? `${stats.reloadTimeSeconds}s` : 'N/A'}
                    </span>
                </div>
                <div>
                    <span className="text-gray-500 block text-[10px]">1ST BULLET ACCURACY</span>
                    <span className="text-base font-bold text-white">
                    {stats.firstBulletAccuracy ?? 'N/A'}
                    </span>
                </div>
                <div>
                    <span className="text-gray-500 block text-[10px]">SHOTGUN BULLETS</span>
                    <span className="text-base font-bold text-white">
                    {stats.shotgunBulletCount ?? 'N/A'}
                    </span>
                </div>
                </div>
            </div>

            {/* DAMAGE RANGES TABLE */}
            <div className="lg:col-span-2 bg-[#171e2b]/80 border border-[#1f2f3d] p-4 flex flex-col gap-3">
                <span className="text-[10px] font-mono text-val-cyan uppercase tracking-widest border-b border-[#1f2f3d] pb-1">
                // DAMAGE RANGES PROFILE
                </span>

                <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs">
                    <thead>
                    <tr className="border-b border-[#1f2f3d] text-gray-500 text-[10px]">
                        <th className="py-2">RANGE</th>
                        <th className="py-2 text-center text-val-red">HEAD</th>
                        <th className="py-2 text-center text-white">BODY</th>
                        <th className="py-2 text-center text-gray-400">LEG</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1f2f3d]">
                    {stats.damageRanges?.map((range, index) => (
                        <tr key={index} className="hover:bg-[#0f1923]/40">
                        <td className="py-2.5 font-bold text-val-cyan">
                            {range.rangeStartMeters}m - {range.rangeEndMeters}m
                        </td>
                        <td className="py-2.5 text-center font-bold text-val-red">
                            {Math.round(range.headDamage)}
                        </td>
                        <td className="py-2.5 text-center font-bold text-white">
                            {Math.round(range.bodyDamage)}
                        </td>
                        <td className="py-2.5 text-center font-bold text-gray-400">
                            {Math.round(range.legDamage)}
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>

            </div>
        )}

        </section>
    );
}

export default WeaponDisplay;