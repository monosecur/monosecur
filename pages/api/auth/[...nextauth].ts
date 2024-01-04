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
                const userWithForname = await prisma.rPInfo.findUnique({
                    where: { userId: user.id },
                    select: { forname: true },
                });


                    session.user.id = user.id;
                if (userWithForname) {
                    session.user.forname = userWithForname.forname;
                }
            }
            return session;
        },
    },
    adapter: PrismaAdapter(prisma) as any,
};

export default NextAuth(authConfig);
