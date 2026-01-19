/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

export default function ActualAbout() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-5xl text-primary overflow-hidden">
        About me (for real this time)
      </h1>
      <ul>
        <li>i am probably a human person</li>
        <li>I like coding</li>
        <li>I like video games too!</li>
        <li>
          <img
            src="https://github-readme-stats.vercel.app/api?username=precontation"
            alt="Precontation's GitHub stats"
          />
        </li>
      </ul>
      <h2 className="justify-center text-3xl w-fit text-secondary overflow-hidden"></h2>
      <Link href={"/about"}>
        <button className="rounded-full bg-primary p-2">Back</button>
      </Link>
    </div>
  );
}
