'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaGear } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import {useDispatch} from "react-redux";
import {setUser} from "@/app/redux/slices/userSlice";

export default function Redirection() {
    const pathname = usePathname();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    const session = useSession();

    useEffect(() => {
        if (session.status === 'loading') {
            return;
        }

        setIsLoading(false);

        if (session.data?.user) {
            dispatch(setUser(session.data.user));
        } else {
            console.log("ERR")
        }
    }, [pathname, session]);

    return (
        <>
            {isLoading || pathname === null || session.status === 'loading' ? (
                <div className="z-50 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black text-white flex-col">
                    <FaGear className="animate-spin text-6xl mb-4" />
                    <p>Verification de la session en cours..</p>
                </div>
            ) : !session.data ? (
                router.replace("/")
            ) : !session.data.user.rpinfo ? (
                router.replace("/create-account")
            ) : pathname === "/create-account" && session.data.user.rpinfo.role ? (
                router.replace("/")
            ) : (
               <>
               </>
            )}
        </>
    );
}
