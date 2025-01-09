import Guest from "./components/guest";
import { currentUser } from "@clerk/nextjs/server";
import Transactions from "./transactions/page";
import UserExpensesList from "./components/userExpensesList";
import UserBalance from "./components/userBalance";

export default async function HomePage() {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <div className="home-container">
      <h1> {user && `Welcome ${user.firstName}`} </h1>
      <h2>Monthly Expense Tracker</h2>

      <Transactions />
      <UserExpensesList />
      <UserBalance />
    </div>
  );
}
