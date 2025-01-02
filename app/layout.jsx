import "./globals.css";

export const metadata = {
  title: "Track Expenses",
  description: "Track expenses and create a budget",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
