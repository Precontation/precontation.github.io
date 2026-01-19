"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Games() {
  const params = useSearchParams();
  const game = params.get("g");
  if (game) {
    return (
      <iframe className={"h-dvh w-dvw"} src={`/${game}/index.html`}></iframe>
    );
  } else {
    return (
      <div className="flex flex-col items-center gap-5">
        <h1 className="justify-center text-7xl w-fit text-primary overflow-hidden">
          Games
        </h1>
        <h2 className="justify-center text-3xl w-fit text-secondary overflow-hidden">
          Wow what a cool website
        </h2>
        <div className=" grid grid-cols-3 gap-10">
          <Link href="/games?g=br2">
            <button className="rounded-2xl bg-primary w-50 h-50">
              Banana run 2
            </button>
          </Link>
          <Link href="/games?g=br3">
            <button className="rounded-2xl bg-primary w-50 h-50">
              Banana run 3
            </button>
          </Link>
          <Link href="/games?g=cfp">
            <button className="rounded-2xl bg-primary w-50 h-50">
              Click For Points (web edition)
            </button>
          </Link>
          <Link href="/games?g=clicks_and_points">
            <button className="rounded-2xl bg-primary w-50 h-50">
              Clicks & Points (VERY VERY EARLY DEVELOPEMENT)
            </button>
          </Link>
          <Link href="/games?g=plat">
            <button className="rounded-2xl bg-primary w-50 h-50">
              Unnamed platformer game
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
