"use client";
import DeleteExpense from "../actions/deleteExpense";

export default async function DeleteButton({ item }) {
  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (!confirmed) {
      return;
    }
    await DeleteExpense(id);
  };

  return (
    <button className="expense-button" onClick={() => handleDelete(item.id)}>
      X
    </button>
  );
}
