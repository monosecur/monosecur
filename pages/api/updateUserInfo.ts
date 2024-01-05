import { NextApiRequest, NextApiResponse } from 'next';
import {getServerSession} from "next-auth";
import { PrismaClient } from '@prisma/client';
import { authConfig } from '@/pages/api/auth/[...nextauth]';

const prisma = new PrismaClient();

interface UpdateUserInfoRequestBody {
    field: string;
    value: string | number;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        try {
            const session = await getServerSession(req, res, authConfig);
            console.log('Session:', session);

            if (!session?.user?.id) {
                return res.status(401).json({ error: 'Utilisateur non authentifié' });
            }

            const { field, value }: UpdateUserInfoRequestBody = req.body;

            let updateField = {};
            switch (field) {
                case 'forname':
                    updateField = { forname: value };
                    break;
                case 'name':
                    updateField = { name: value };
                    break;
                case 'number':
                    updateField = { number: value };
                    break;
                default:
                    return res.status(400).json({ message: 'Invalid field provided' });
            }

            const updatedUserInfo = await prisma.rPInfo.update({
                where: { userId: session.user.id },
                data: updateField,
            });

            res.status(200).json(updatedUserInfo);
        } catch (error) {
            console.error('Error updating user info:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Méthode non autorisée' });
    }
}
