"use server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function createTransaction(formData) {
  const details = formData.get("details");
  const amountValue = formData.get("amount");

  const text = details.toString(); // Ensure text is a string
  const amount = parseFloat(amountValue.toString()); // Parse amount as number

  const { userId } = await auth();
  console.log("Auth Result:", { userId });
  if (!userId) {
    throw new Error("User is not authenticated");
  }

  try {
    const transaction = await db.transaction.create({
      data: {
        text,
        amount,
        userId,
      },
    });

    revalidatePath("/");
    return { transaction };
  } catch (error) {
    console.error("Transaction creation error:", error);
    throw new Error("Failed to create transaction");
  }
}
