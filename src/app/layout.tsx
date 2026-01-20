import SetColor from "@/components/SetColor";
import SwitcherLink from "@/components/SwitcherLink";
import { Metadata } from "next";
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
      <SetColor />
      <body className="antialiased flex flex-col min-h-screen">
        <header className="backdrop-blur-3xl border-b sticky top-0 min-w-full z-100">
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
