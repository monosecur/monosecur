import prisma from "@/src/lib/prisma";

export async function infoSession() {
    const sessions = await prisma.session.findMany();
    const countByUserId: Record<string, number> = {}; // Add a type assertion

    sessions.forEach((session) => {
        const userId = session.userId;
        countByUserId[userId] = (countByUserId[userId] || 0) + 1;
    });

    // Return the desired value, for example, the number of unique user IDs
    return Object.keys(countByUserId).length;
}
