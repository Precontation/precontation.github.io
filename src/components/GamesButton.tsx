"use client";

import Link from "next/link";

export default function GamesButton({
  to,
  name,
}: {
  to: string;
  name: string;
}) {
  return (
    <Link draggable={false} tabIndex={-1} href={`/games?g=${to}`}>
      <button className="rounded-2xl bg-primary w-50 h-50">{name}</button>
    </Link>
  );
}
