import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/src/lib/prisma";
import DiscordProvider from "next-auth/providers/discord";

const discordId = process.env.DISCORD_CLIENT_ID;
const discordSecret = process.env.DISCORD_CLIENT_SECRET;

if (!discordId || !discordSecret) {
    throw new Error('Missing DISCORD_CLIENT_ID or DISCORD_CLIENT_SECRET environment !');
}

const scopes = ['identify'].join(' ');

export const authConfig: NextAuthOptions = {
    providers: [
        DiscordProvider({
            clientId: discordId,
            clientSecret: discordSecret,
            authorization: { params: { scope: scopes } },
        }),
    ],
    callbacks: {
        session: async ({ session, user }) => {
            if (session.user) {

                session.user.id = user.id;

                const User = await prisma.user.findUnique({
                    where: { id: user.id }, // Remplacez userId par l'ID de l'utilisateur que vous souhaitez récupérer
                    include: {
                        accounts: true,
                        rpinfo: true,
                        sessions: true,
                    },
                });
                if (User) {
                    session.user = User
                }

            }
            return session;
        },
    },
    adapter: PrismaAdapter(prisma) as any,
};

export default NextAuth(authConfig);
