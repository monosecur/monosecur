"use client"

import {signOut} from "next-auth/react";

export const LogoutButton = () => {
    return(
        <button onClick={async () => {
            await signOut()
        }} className="btn justify-end">Ce Déconnecter</button>
    )
}