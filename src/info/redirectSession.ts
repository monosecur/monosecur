"use client"
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";


export function verifyClientSession(){

    const router = useRouter()

    const session = useSession()

    if(!session.data){
        router.push("/")
    }
}

export function verifyRPInfoSession(){

    const router = useRouter()

    const session = useSession()

        if(session.data?.user.securo === undefined){
            router.push("/")
        }

}