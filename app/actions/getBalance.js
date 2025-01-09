"use server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export default async function Balance() {
  const { userId } = await auth();

  // Check if userId exists and handle errors gracefully
  if (!userId) {
    throw new Error("User is not authenticated");
  }

  try {
    const transactions = await db.transaction.findMany({
      where: {
        userId,
      },
    });

    const total = transactions.reduce((sum, acc) => (sum += acc.amount), 0);
    return total;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw new Error("Error fetching transactions.");
  }
}
