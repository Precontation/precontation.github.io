"use client";
import SwitcherLink from "@/components/SwitcherLink";
import { useEffect, useRef } from "react";
import "./globals.css";

// export const metadata: Metadata = {
//   title: "Precontation",
//   description: "Epic generic website! (wow)",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Stackoverflow, you may be pretty much dead, but you aren't dead in my heart!
  // Modified from https://stackoverflow.com/questions/1484506/random-color-generator
  function getRandomColor() {
    const letters = "89ABCDEF89ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const rootRef = useRef<HTMLHtmlElement>(null);

  useEffect(() => {
    rootRef.current?.style.setProperty("--secondary", getRandomColor());
  }, []);

  return (
    <html lang="en" ref={rootRef}>
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
