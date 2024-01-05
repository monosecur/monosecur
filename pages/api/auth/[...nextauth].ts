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

                const RPInfoUser = await prisma.rPInfo.findUnique({
                    where: { userId: user.id },
                    select: {
                        forname: true,
                        name: true,
                        number: true,
                        role: true,
                        securo: true},
                });

                if (RPInfoUser) {
                    session.user.forname = RPInfoUser.forname;
                    session.user.rpname = RPInfoUser.name;
                    session.user.number = RPInfoUser.number;
                    session.user.role = RPInfoUser.role;
                    session.user.securo = RPInfoUser.securo;
                }

            }
            return session;
        },
    },
    adapter: PrismaAdapter(prisma) as any,
};

export default NextAuth(authConfig);
