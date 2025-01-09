import { SignInButton } from "@clerk/nextjs";

export default function Guest() {
  return (
    <div>
      Please sign in.
      <SignInButton />
    </div>
  );
}
