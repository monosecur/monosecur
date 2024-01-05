import prisma from "@/src/lib/prisma";

export async function infoMemberSession() {
    const sessions = await prisma.session.findMany();
    const countByUserId: Record<string, number> = {};

    for (const session of sessions) {
        const userId = session.userId;

        // Check if userId exists in RPInfo
        const userExists = await prisma.rPInfo.findUnique({
            where: {
                userId: userId,
            },
        });

        // If user exists in RPInfo, increment count
        if (userExists) {
            countByUserId[userId] = (countByUserId[userId] || 0) + 1;
        }
    }

    // Return the desired value, for example, the number of unique user IDs
    return Object.keys(countByUserId).length;
}

export async function infoSecuroSession() {
    const totalSecuro = await prisma.rPInfo.aggregate({
        _sum: {
            securo: true,
        },
    });

    return totalSecuro._sum?.securo || 0;
}
