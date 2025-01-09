"use server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export default async function List() {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("User is not authenticated");
  }
  try {
    const list = await db.transaction.findMany({
      where: { userId },
    });

    return list;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
