import { NextApiRequest, NextApiResponse } from 'next';
import {getServerSession} from "next-auth";
import { PrismaClient } from '@prisma/client';
import {authConfig} from "@/pages/api/auth/[...nextauth]";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const session = await getServerSession(req, res, authConfig);
            console.log("Session:", session);

            if (!session?.user?.id) {
                return res.status(401).json({ error: 'Utilisateur non authentifié' });
            }

            const { forname, name, number } = req.body;

            const result = await prisma.rPInfo.create({
                data: {
                    userId: session.user.id,
                    forname,
                    name,
                    number,
                },
            });

            res.status(200).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erreur lors de la création du compte.' });
        }
    } else {
        res.status(405).json({ error: 'Méthode non autorisée' });
    }
}
