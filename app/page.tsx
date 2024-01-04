import Image from 'next/image';
import Link from 'next/link'
import Logged from "@/app/components/main/logged";
import {getAuthSession} from "@/src/lib/auth";

export default async function Home() {
    const session = await getAuthSession()

    if(session){
        return <Logged/>
    }
    return (
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
                <p className="text-red-700">Se site est une fiction créée à des fins de divertissement,<br/>pour plus {`d'information`} cliquez sur le lien ci-dessous :</p>
                <Link href="https://monolithservers.fr/" className="inline border-2 border-purple-800 text-purple-800 p-2 px-6 mt-4 hover:bg-slate-200 ease-in-out duration-300">Accéder au site officiel de Monolith.</Link>
            </div>
        </main>
    );
}
