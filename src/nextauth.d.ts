import type {DefaultSession} from "next-auth";

declare module "next-auth" {
    export interface Session extends DefaultSession {
        user: {
            id: string
            name: string | null
            image: string | null
            rpinfo: Irpinfo[]
        }

    }

    interface Irpinfo {
        id: string
        userId: string
        forname: string
        name: string
        number: number
        role: string
        securo: number | null
    }
}