'use client'
import Link from "next/link";
import {useSelector} from "react-redux";
import InformationCard from "@/app/components/main/logged_components/infocard";


export default function Logged() {

    const user = useSelector((state: any) => state.user.user);

    if (!user || !user.rpinfo) {
        console.log("Loading...");
        return <p>Loading...</p>;
    }

    console.log("Rendering with user data:", user);


    return (
            <>
                <div className="h-screen w-screen bg-slate-800 flex flex-row justify-between items-center">

                    <div className="card w-96 bg-base-100 shadow-xl m-4">
                        <div className="card-body">
                            <div className="avatar">
                                <div className="w-24 rounded">
                                    <img src={user.image ?? ""} alt="User Avatar"/>
                                </div>
                            </div>
                            <h2 className="card-title flex flex-col">
                                <p className="text-lg">
                                    Bonjour {user.rpinfo.forname},<br/>
                                    Vous êtes connecté avec succès depuis Discord en tant que
                                </p>
                                {user.name}
                                <p>Vous avez {user.rpinfo.securo} Securos</p>
                            </h2>
                            <div className="card-actions justify-end"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 justify-center bg-slate-400 rounded-xl mt-24">
                        <div className="m-4 text-center">
                            <Link href="offer/operator">
                                <button
                                    className="py-2 px-4 bg-blue-500 text-white max-w-96 h-48 rounded-xl shadow-md hover:bg-blue-700 transition duration-300">
                                    <span className="font-bold">Operator</span><br/>
                                    Cette offre vous permet {`d'avoir jusqu'à`} 4 opérateurs et un dispatch sur votre propriété privée.
                                </button>
                            </Link>
                        </div>
                        <div className="m-4 text-center py-2 px-4 bg-slate-400 text-white max-w-96 h-48">
                        </div>
                        <div className="m-4 text-center pointer-events-none">
                            <button
                                className="py-2 px-4 bg-red-700 text-white max-w-96 h-48 rounded-xl shadow-md transition duration-300">
                                <span className="text-yellow-500 font-bold">/!\ INDISPONIBLE /!\</span><br/>
                                <span className="font-bold">Travel</span><br/>
                                Cette offre vous permet {`d'avoir`} un camion de transport escorté par des opérateurs et un
                                dispatch, pour transporter tout type de marchandise {`d'un`} point A à un point B.
                            </button>
                        </div>
                        <div className="m-4 text-center pointer-events-none">
                            <button
                                className="py-2 px-4 bg-red-700 text-white max-w-96 h-48 rounded-xl shadow-md transition duration-300">
                                <span className="text-yellow-500 font-bold">/!\ INDISPONIBLE /!\</span><br/>
                                <span className="font-bold">Security</span><br/>
                                Cette offre vous permet {`d'avoir`} des opérateurs et un dispatch pour vous escorter pour
                                une durée définie.
                            </button>
                        </div>
                        <div className="m-4 text-center pointer-events-none">
                            <button
                                className="stripes stripes-red-600 stripes-size-xl stripes-opacity-50 py-2 px-4 bg-red-800 text-white max-w-96 h-48 rounded-xl shadow-md transition duration-300">
                                <span
                                    className="text-yellow-500 font-bold">/!\ INDISPONIBLE AU GRAND PUBLIC /!\</span><br/>
                                <span className="font-bold">Evacuation</span><br/>
                                Cette offre vous permet {`d'avoir`} des opérateurs et un dispatch pour évacuer des personnes
                                ou des biens.
                            </button>
                        </div>
                        <div className="m-4 text-center pointer-events-none">
                            <button
                                className="stripes stripes-red-600 stripes-size-xl stripes-opacity-50 stripes-accent-content py-2 px-4 bg-red-800 text-white max-w-96 h-48 rounded-xl shadow-md transition duration-300">
                                <span
                                    className="text-yellow-500 font-bold">/!\ INDISPONIBLE AU GRAND PUBLIC /!\</span><br/>
                                <span className="font-bold">Tactical Support</span><br/>
                                Cette offre vous permet {`d'avoir`} des opérateurs et un dispatch pour un support tactique.
                            </button>
                        </div>
                    </div>


                    <InformationCard />
                </div>
            </>

        );
}
