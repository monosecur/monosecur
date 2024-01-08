"use client"
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";


export function VerifyClientSession(){

    const router = useRouter()
    const session = useSession()

    if(!session.data){
        router.push("/")
    }
}

export function VerifyRPInfoSession(){

    const router = useRouter()

    const session = useSession()

        if(session.data?.user.rpinfo?.securo === undefined){
            router.push("/")
        }

}