import Balance from "../actions/getBalance";

export default async function UserBalance() {
  const total = await Balance();
  console.log(total);
  return (
    <div className="user-expenses">
      <h1 className="heading">Your Expenses</h1>
      <div className="total">
        <span className="amount">${total}</span>
      </div>
    </div>
  );
}
