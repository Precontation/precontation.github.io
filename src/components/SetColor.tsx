"use client";

import { useEffect } from "react";

export default function SetColor() {
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

  useEffect(() => {
    document.documentElement.style.setProperty("--secondary", getRandomColor());
  }, []);

  return <></>;
}
