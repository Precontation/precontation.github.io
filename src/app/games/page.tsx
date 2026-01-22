import { Suspense } from "react";
import GamesClient from "./client";

export default function Games() {
  return (
    <Suspense fallback={<p className="text-center">Loading...</p>}>
      <GamesClient />
    </Suspense>
  );
}
