"use client";

import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-5xl text-primary overflow-hidden">About me</h1>
      <h2 className="justify-center text-3xl w-fit text-secondary overflow-hidden">
        i am probably a human person
      </h2>
      <nav className="flex flex-row items-center gap-5">
        <Link draggable={false} tabIndex={-1} href={"/"}>
          <button className="rounded-full bg-primary p-2">Back</button>
        </Link>
        <Link draggable={false} tabIndex={-1} href={"/about/actual"}>
          <button className="rounded-full bg-primary p-2">No but really</button>
        </Link>
      </nav>
      <div className="flex flex-col items-center">
        <em>{"I\'m not that special"}</em>
        <em>-me, 2026</em>
      </div>
    </div>
  );
}
