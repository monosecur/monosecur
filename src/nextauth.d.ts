import type {DefaultSession, DefaultUser} from "next-auth";

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: DefaultUser & {
            id: string
            forname: string
            rpname: string
            number: number
            role: string
            securo: number
        }
    }
}