"use client"

import {signIn} from "next-auth/react";

export const LoginButton = () => {
    return(
        <button onClick={async () => {
            await signIn()
        }} className="bg-blue-200 btn btn-primary justify-end">Ce connecter</button>
    )
}