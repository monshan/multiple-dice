"use client";

import NumberOfDice from "@/components/NumberOfDice"
import DiceLayout from "@/components/DiceLayout"
import { useState } from "react";

export default function Home() {
  const [numberOfDice, setNumberOfDice] = useState(1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly gap-7 p-24">
      <NumberOfDice setNumberOfDice={setNumberOfDice} />
      <DiceLayout numberOfDice={numberOfDice} />
    </main>
  )
}
