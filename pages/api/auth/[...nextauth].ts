import NextAuth, {NextAuthOptions} from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/src/lib/prisma";
import DiscordProvider from "next-auth/providers/discord";

const discordId = process.env.DISCORD_CLIENT_ID
const discordSecret = process.env.DISCORD_CLIENT_SECRET

if(!discordId || !discordSecret){
    throw new Error('Missing DISCORD_CLIENT_ID or DISCORD_CLIENT_SECRET environment !')
}

const scopes = ['identify'].join(' ')

export const authConfig = {
    providers: [
        DiscordProvider({
            clientId: discordId,
            clientSecret: discordSecret,
            authorization: {params: {scope: scopes}},
        })
    ],
    adapter: PrismaAdapter(prisma) as any,
} satisfies NextAuthOptions

export default NextAuth(authConfig)