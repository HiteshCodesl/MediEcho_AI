/*
  Warnings:

  - Added the required column `suggestedDoctor` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "suggestedDoctor" JSONB NOT NULL;
