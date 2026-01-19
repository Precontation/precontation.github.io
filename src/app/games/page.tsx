import { Suspense } from "react";
import GamesClient from "./GamesClient";

export default function Games() {
  return (
    <Suspense fallback={"Loading..."}>
      <GamesClient />
    </Suspense>
  );
}
