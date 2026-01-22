"use client";

import GamesButton from "@/components/GamesButton";
import SetColor from "@/components/SetColor";
import { useSearchParams } from "next/navigation";

export default function GamesClient() {
  const params = useSearchParams();
  const game = params.get("g");
  if (game) {
    return (
      <iframe className={"h-dvh w-dvw"} src={`/${game}/index.html`}></iframe>
    );
  } else {
    return (
      <div className="flex flex-col items-center gap-5">
        <SetColor />
        <h1 className="justify-center text-7xl w-fit text-primary overflow-hidden">
          Games
        </h1>
        <h2 className="justify-center text-3xl w-fit text-secondary overflow-hidden">
          Some (very unfinished) games by yours truly!
        </h2>
        <nav className=" grid grid-cols-3 gap-10">
          <GamesButton to="br2" name="Banana Run 2"></GamesButton>
          <GamesButton to="br3" name="Banana Run 3"></GamesButton>
          <GamesButton
            to="cfp"
            name="Click For Points (web edition)"
          ></GamesButton>
          <GamesButton
            to="clicks_and_points"
            name="Clicks & Points (VERY VERY EARLY DEVELOPEMENT)"
          ></GamesButton>
          <GamesButton to="plat" name="Unnamed platformer game"></GamesButton>
        </nav>
      </div>
    );
  }
}
