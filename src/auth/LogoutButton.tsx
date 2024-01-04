"use client"

import {signOut} from "next-auth/react";

export const LogoutButton = () => {
    return(
        <button onClick={async () => {
            await signOut()
        }} className="bg-blue-200 btn btn-primary justify-end">Ce Déconnecter</button>
    )
}