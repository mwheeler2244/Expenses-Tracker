"use server";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";

export default async function DeleteExpense(transactionId) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("User is not authenticated");
  }
  try {
    await db.transaction.delete({
      where: {
        id: transactionId,
        userId, // Ensures user only deletes their own transaction
      },
    });

    // Revalidate the path to update the UI
    revalidatePath("/");
  } catch (error) {
    console.error("Delete error:", error);
    throw error;
  }
}
