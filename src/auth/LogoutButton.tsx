"use client"

import {signOut} from "next-auth/react";
import {useRouter} from "next/navigation";

export const LogoutButton = () => {
    const router = useRouter()
    return(
        <button onClick={async () => {
            await signOut()
            router.push("/")
        }} className="btn justify-end">Se Déconnecter</button>
    )
}