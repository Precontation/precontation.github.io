"use client";

import { useRef, useState } from "react";

export default function Home() {
  function removeMyGithubYeaaaaaaa() {
    if (!githubButtonRef.current) return;

    if (removedGithub) {
      if (dialogueArray.indexOf(currentDialogue) == dialogueArray.length - 1) {
        open("https://store.steampowered.com/app/2159370/Click_For_Points/");
        setRemovedGithub(false);
      } else {
        setCurrentDialogue(
          (prevDialogue) =>
            dialogueArray[dialogueArray.indexOf(prevDialogue) + 1],
        );
      }
      return;
    }

    setIsRemovingGithub(true);
  }

  const dialogueArray: Array<string> = [
    "Don't view my GitHub",
    "bring back the github button 🥹",
    "no. deal with your actions.",
    "I'm sorry, but it's currently 2:34 in the morning and I don't wanna recode that death animation.",
    "What? you don't like it being offcentered?",
    "THEN YOU SHOULDN'T HAVE PRESSED IT!",
    "oh no what do i do now that I'm out of dialogue ideas",
    "hm",
    "ok alphabet time!!11!",
    "a,",
    "b,",
    "c,",
    "uh",
    "g?",
    "OH SHOOT NO ITS D",
    "well if i cant do that ig ill do numbers",
    "1",
    "2, more like-",
    "3 (take that valve!!)",
    "4",
    "five",
    "seven",
    "EIGHT NINE (meme)",
    "...",
    "WAIT YOU DON'T KNOW ABOUT 89??",
    "PLAY CLICK FOR POINTS",
    "ITS ON STEAM",
    "ITS SO PEAK",
    "PLAY IT RIGHT NOW",
    "YOU KNOW WHAT",
    "ILL CODE!!",
    "JUST FOR THIS!",
    "Click to open the Steam link!",
  ];

  const githubButtonRef = useRef<HTMLButtonElement>(null);
  const [isRemovingGithub, setIsRemovingGithub] = useState<boolean>(false);
  const [removedGithub, setRemovedGithub] = useState<boolean>(false);
  const [currentDialogue, setCurrentDialogue] = useState<string>(
    "Don't view my GitHub",
  );
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="justify-center text-7xl w-fit text-primary overflow-hidden font-fancy">
        Precontation
      </h1>
      <h2 className="justify-center text-3xl w-fit text-secondary overflow-hidden splash-text font-semifancy">
        Wow what a cool website
      </h2>
      <br />
      <div className="flex items-center gap-5">
        <button
          onAnimationEnd={() => {
            setRemovedGithub(true);
            setCurrentDialogue(dialogueArray[1]); // Call this here just for next dialogue
          }}
          className={`rounded-full bg-primary p-2 ${isRemovingGithub && "github-button"}`}
          ref={githubButtonRef}
          onClick={() => open("https://github.com/Precontation")}
        >
          View my GitHub
        </button>
        <button
          className="rounded-full bg-primary p-2"
          onClick={removeMyGithubYeaaaaaaa}
        >
          {currentDialogue}
        </button>
      </div>
    </div>
  );
}
