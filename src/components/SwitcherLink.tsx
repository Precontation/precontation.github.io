"use client";

import Link from "next/link";
import { useState } from "react";

export default function SwitcherLink({
  to,
  name,
}: {
  to: string;
  name: string;
}) {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  return (
    <nav
      className="self-center flex flex-col"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <Link href={`/${to}`}>{name}</Link>
      {isMouseOver && <span className="bg-secondary min-w-1 min-h-0.5"></span>}
    </nav>
  );
}
