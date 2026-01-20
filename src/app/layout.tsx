import SwitcherLink from "@/components/SwitcherLink";
import { Metadata } from "next";
import { CSSProperties } from "react";
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
  function getRandomColor() {
    const letters = "89ABCDEF89ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      // eslint-disable-next-line react-hooks/purity
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <html
      lang="en"
      style={{ "--secondary": getRandomColor() } as CSSProperties}
    >
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
