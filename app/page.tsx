import Image from 'next/image';
import Link from 'next/link'
import Header from "@/app/components/layout/header";

export default function Home() {
    return (
        <>
        <Header/>
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#030615]">
            <div className="relative h-screen w-screen opacity-30 blur-sm">
                <Image
                    src="/images/MonoSecurLogoWText.png"
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
                <h1 className="text-4xl font-bold text-white">Mono Secur</h1>
                <p className="text-red-700">Ce site est une fiction créée à des fins de divertissement,<br/>pour plus {`d'information`} cliquez sur le lien ci-dessous :</p>
                <Link href="https://monolithservers.fr/" className="inline border-2 border-purple-800 text-purple-800 p-2 px-6 mt-4 hover:bg-slate-200 ease-in-out duration-300">Accéder au site officiel de Monolith.</Link>
            </div>
        </main>
        </>
    );
}
