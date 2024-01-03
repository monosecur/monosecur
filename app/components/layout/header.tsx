import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return (
        <header className="z-10 fixed top-0 left-0 right-0 bg-transparent text-white p-4 flex justify-between items-center mx-10">
            <div>
                <Image
                    src="/images/MonoSecurLogoWText.png"
                    alt="Support Image"
                    width={200}
                    height={200}
                    className="rounded-full"
                />
            </div>

                <Link href="" className="text-lg font-bold">Support</Link>
        </header>
    )
}