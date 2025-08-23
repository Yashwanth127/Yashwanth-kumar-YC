import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Created with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <nav className="bg-gray-900 text-white p-4 flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>

        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
