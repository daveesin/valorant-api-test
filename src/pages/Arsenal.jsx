import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import WeaponSelector from "../components/arsenal/WeaponSelector";
import { getWeapons } from "../services/valorantApi";
import { useEffect, useState } from "react";

function Arsenal() {

    const [weapons, setWeapons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const [selectedWeapon, setSelectedWeapon] = useState(null);

    useEffect(() => {
        
        async function fetchWeapons() {
            try {
                setLoading(true);
                const newWeapons = await getWeapons()
                setWeapons(newWeapons);

                if(newWeapons.length > 0) {
                    setSelectedWeapon(newWeapons[0]);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchWeapons();

    },[]);


    if (loading) {
        return (
            <div className="w-full h-screen bg-[#0f1923] text-val-cyan font-mono flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-2 border-val-red border-t-transparent animate-spin" />
                <span className="text-xs uppercase tracking-widest">// LOADING ARSENAL DATA...</span>
                </div>
            </div>
        );
    }

    return (

        <div className="w-full min-h-screen bg-[#0f1923] text-[#f9f9f9] font-sans flex flex-col justify-between border border-[#1f2326]">
            <Navbar />

            <main className="flex-1 flex flex-col md:flex-row w-full">
                {error ? (
                    <div className="p-4 bg-val-red/10 border border-val-red font-mono text-xs text-val-red text-center my-auto">
                        [ERROR]: {error}
                    </div>
                ) : (
                    <>

                    <WeaponSelector
                        weapons={weapons}
                        selectedWeapon={selectedWeapon}
                        onSelectWeapon={setSelectedWeapon}
                    />

                    {/*Here comes the next component*/}

                    </>
                )}
            </main>

            <Footer />
        </div>

    );
}

export default Arsenal;