import SwitcherLink from "@/components/SwitcherLink";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Precontation",
  description: "Epic generic website! (wow)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <header className="backdrop-blur-3xl border-b absolute min-w-full">
          <nav className="flex gap-10 h-10 justify-center">
            <SwitcherLink to="" name="Home"></SwitcherLink>
            <SwitcherLink to="games" name="Games"></SwitcherLink>
            <SwitcherLink to="about" name="About"></SwitcherLink>
          </nav>
        </header>

        <main className="grow content-center">{children}</main>
      </body>
    </html>
  );
}
