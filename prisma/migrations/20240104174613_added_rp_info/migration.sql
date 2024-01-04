-- CreateTable
CREATE TABLE "RPInfo" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "forname" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "mail" TEXT,

    CONSTRAINT "RPInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RPInfo_userId_key" ON "RPInfo"("userId");
