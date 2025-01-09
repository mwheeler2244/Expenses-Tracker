import { SignInButton } from "@clerk/nextjs";

export default function Guest() {
  return (
    <div className="guest-container">
      <h1 className="guest-title">Please sign in</h1>
      <SignInButton className="guest-signin-btn" />
    </div>
  );
}
