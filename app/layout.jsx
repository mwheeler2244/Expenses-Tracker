import Header from "./components/header";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
export const metadata = {
  title: "Track Expenses",
  description: "Track expenses and create a budget",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
