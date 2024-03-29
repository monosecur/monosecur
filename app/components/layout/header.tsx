import Image from "next/image";
import Link from "next/link";
import { LoginButton } from "@/src/auth/LoginButton";
import { LogoutButton } from "@/src/auth/LogoutButton";
import {getAuthSession} from "@/src/lib/auth";

export default async function Header() {
    const session = await getAuthSession()

    return (

    <header className="z-10 fixed top-0 left-0 right-0 bg-transparent text-white p-4 flex justify-between items-center mx-10">
            <Link href="/">
                <Image
                    src="/images/MonoSecurLogoWText.png"
                    alt="Support Image"
                    width={200}
                    height={200}
                    className="rounded-full hover:saturate-0 hover:scale-105 transition duration-300 ease-in-out"
                />
            </Link>
        <div className="flex space-x-4">
            {session?.user.rpinfo ? (
                <Link href="/parameter" className="btn">Paramètres</Link>
            ):(<></>)}

            {session  ? (
                <LogoutButton/>
            ) : (
                <LoginButton/>
            )}
            <Link href="" className="btn">
                Support
            </Link>
        </div>
    </header>

    )
}
