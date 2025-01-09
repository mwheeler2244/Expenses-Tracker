import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { CheckUser } from "@/lib/checkUser";
export default async function Header() {
  const user = await CheckUser();

  return (
    <nav className="navbar">
      <Link href="/">Expenses Tracker</Link>
      <>
        <SignedOut>
          <SignInButton className="button" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </>
    </nav>
  );
}
