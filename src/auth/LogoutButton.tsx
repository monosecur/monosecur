"use client"

import {signOut} from "next-auth/react";
import {useRouter} from "next/navigation";

export const LogoutButton = () => {
    const router = useRouter()
    return(
        <button onClick={async () => {
            router.push("/")
            await signOut()
        }} className="btn justify-end">Ce Déconnecter</button>
    )
}