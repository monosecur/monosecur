import { getRequiredAuthSession } from "@/src/lib/auth";
import prisma from "@/src/lib/prisma";
import {redirect} from "next/navigation";

export const VerifyRPInfo = () => {
    const verifyRPInfo = async () => {
        const session = await getRequiredAuthSession();

        const sessionUserId = session.user.id;

        const existingRPInfo = await prisma.rPInfo.findUnique({
            where: {
                userId: sessionUserId,
            },
        });

        if (!existingRPInfo) {
            redirect('/create-account')
        }
    };

    // Call the verification function
    return verifyRPInfo();
};
