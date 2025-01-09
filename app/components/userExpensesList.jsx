import List from "../actions/getList";
import DeleteButton from "./deleteButton";
export default async function UserExpensesList() {
  const list = await List();

  return (
    <div className="expenses-container">
      {list.map((item, index) => (
        <div key={index} className="expense-item">
          <span className="expense-text">{item.text}</span>
          <span className="expense-amount">${item.amount.toFixed(2)}</span>
          <DeleteButton item={item.id} />
        </div>
      ))}
    </div>
  );
}
