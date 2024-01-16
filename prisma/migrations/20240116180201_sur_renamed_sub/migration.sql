/*
  Warnings:

  - You are about to drop the column `sur` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sub]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sub` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "users_sur_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "sur",
ADD COLUMN     "sub" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_sub_key" ON "users"("sub");
