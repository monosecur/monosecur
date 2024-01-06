"use client"
import PersonnalInformation from "@/app/components/parameter/PersonnalInformation";
import {useState} from "react";
import MonosecurInformation from "@/app/components/parameter/MonosecurInformation";



export default function ParameterPage() {
    const [activeTab, setActiveTab] = useState('monoSecur');

    return (
        <div className="relative h-screen bg-slate-900">
            <div className="flex items-center justify-center h-full">
                <div className="rounded-lg p-8 shadow-md h-2/4 w-1/2 bg-slate-400 relative">
                    {/* Onglets */}
                    <div className="flex flex-col mb-4">
                        <div
                            className={`mr-4 max-w-64 h-24 flex justify-center items-center rounded-md cursor-pointer bg-slate-800 mb-4 ${
                                activeTab === 'personalInfo' ? 'bg-opacity-50' : ''
                            }`}
                            onClick={() => setActiveTab('personalInfo')}
                        >
                            Information Personnel
                        </div>
                        <div
                            className={`max-w-64 h-24 flex justify-center items-center rounded-md cursor-pointer bg-slate-800 ${
                                activeTab === 'monoSecur' ? 'bg-opacity-50' : ''
                            }`}
                            onClick={() => setActiveTab('monoSecur')}
                        >
                            Compte Mono Secur
                        </div>
                    </div>
                    {/* Contenu dynamique en fonction de l'onglet actif */}
                    {activeTab === 'personalInfo' && <PersonnalInformation />}
                    {activeTab === 'monoSecur' && <MonosecurInformation/>}
                </div>
            </div>
        </div>
    );
}