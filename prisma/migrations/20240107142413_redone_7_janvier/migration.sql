-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('DEV', 'ADMIN', 'TREASURER', 'DISPATCH', 'OPERATOR', 'USER');

-- AlterTable
ALTER TABLE "RPInfo" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'USER',
ADD COLUMN     "securo" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "RPInfo" ADD CONSTRAINT "RPInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;