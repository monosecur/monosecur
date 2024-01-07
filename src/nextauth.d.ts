import type {DefaultSession, DefaultUser} from "next-auth";

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: DefaultUser & {
            id: string
            //rpinfo: Irpinfo[]
        }
    }
    interface Irpinfo{
        forname: string
        name: string
        number: number
        role: string
        securo: number
    }
}