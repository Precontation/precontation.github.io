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
    <div
      className="self-center flex flex-col"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      tabIndex={-1}
    >
      <Link href={`/${to}`} className="font-semifancy">
        {name}
      </Link>
      {isMouseOver && (
        <span className="bg-secondary min-w-1 min-h-0.5" tabIndex={-1}></span>
      )}
    </div>
  );
}
