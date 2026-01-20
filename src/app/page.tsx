"use client";

import { useEffect, useRef, useState } from "react";

const splashArray: Array<string> = [
  "Wow what a cool website",
  "you know what's for breakfast?",
  "I am two splashes in and already idealess",
  "I'm hungry.",
  "why are you here?",
  "no",
  "yes",
  "Also try GoobApp!",
  "DO NOT TRY CHATAPP",
  "؟",
  "ERROR",
  "We've known each other, for so long.",
  "2? More like 3!",
  "Rest in pieces my old username",
  "This website is sponsored by uh yeah idk",
  "As an AI language model, hi",
  "Hi from Jan. 2026!",
  "Hello, world!",
  "H̴̡̭̥̘͖̰̼̮̠̲͈̬̼̠̩̥͔̞̽̇̾͜ͅi̶̢̺͉̺̦̹̺͌̽̉͑͛̅͠͠ ̸̧̡͎̫̥͙̺͙̦͉̱͔̹̹͉̝̖̯̭̟͉͈̺̖̞͛͗̒͂̇̓͘t̵̰̳̝̫̙͎̖̖͍̼̳̭̹͚̦̠̼̻̳̝̖͒̋͑͊͂̐̇̌̓̈́͛́̓̃͐̀͋͛̑̈̎͘͠͝ĥ̵̛̛̘͈̺̪̝͕̣̤̪̂̔̂̅͋̉̽̓͐̃̅͐̆̈̃͠͝e̶̡̦̣̗͎̥̙̳͕̠̣͔͛r̵͕͍̜̣̣̰͈̼͇̺̽͑̓̏̀̿͐̈̔ͅę̷̢̧̢̺̜͙̣̻̘̜͈̖͖͕͖̺̪̖͇̐̋̍͑́̾͋͗́̈́̂̊͐͜͠",
  "Welcome, welcome!",
  "Woo, GoobApp!",
  "( ͡° ͜ʖ ͡°)",
];

const dialogueArray: Array<string> = [
  "Don't view my GitHub",
  "bring back the github button 🥹",
  "no. deal with your actions.",
  "I'm sorry, but it's currently 2:34 in the morning.",
  "I just don't wanna recode that death animation",
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

export default function Home() {
  function removeMyGithubYeaaaaaaa() {
    if (removedGithub) {
      if (dialogueArray.indexOf(currentDialogue) == dialogueArray.length - 1) {
        open("https://store.steampowered.com/app/2159370/Click_For_Points/");
      } else {
        setCurrentDialogue(
          (prevDialogue) =>
            dialogueArray[dialogueArray.indexOf(prevDialogue) + 1],
        );
      }
      return;
    }

    setRemovedGithub(true);
  }

  const githubButtonRef = useRef<HTMLButtonElement>(null);
  const [removedGithub, setRemovedGithub] = useState<boolean>(false);

  const [currentSplash, setCurrentSplash] = useState<string>("‎ "); // Invisible character because idk man i hate next.js
  // TODO: not do it like this, instead do it whatever way is correct

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentSplash(
      splashArray[Math.floor(Math.random() * splashArray.length)],
    );
  }, []);

  const [currentDialogue, setCurrentDialogue] = useState<string>(
    dialogueArray[0],
  );

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="justify-center text-7xl w-fit text-primary overflow-hidden font-fancy">
        Precontation
      </h1>
      <h2 className="justify-center text-3xl w-fit text-secondary overflow-clip splash-text font-semifancy">
        {currentSplash}
      </h2>
      <br />
      <div className="flex items-center gap-5 w-[50vw]">
        {removedGithub ? (
          <button
            onAnimationEnd={() => {
              setRemovedGithub(true);
              setCurrentDialogue(dialogueArray[1]); // Call this here just for next dialogue
            }}
            className="rounded-full bg-primary w-dvw p-2 slump-animation"
            tabIndex={-1}
          >
            View my GitHub
          </button>
        ) : (
          <button
            onAnimationEnd={() => {
              setRemovedGithub(true);
              setCurrentDialogue(dialogueArray[1]); // Call this here just for next dialogue
            }}
            className="rounded-full bg-primary w-dvw p-2"
            ref={githubButtonRef}
            onClick={() => open("https://github.com/Precontation")}
          >
            View my GitHub
          </button>
        )}

        <button
          className="rounded-full bg-primary w-dvw p-2"
          onClick={removeMyGithubYeaaaaaaa}
        >
          {currentDialogue}
        </button>
      </div>
      <button
        className={`rounded-full bg-green-700 w-[50vw] p-2`}
        onClick={() => open("https://goobapp.org")}
      >
        Open GoobApp
      </button>
    </div>
  );
}
