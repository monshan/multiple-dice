"use client";

import NumberOfDice from "@/components/NumberOfDice"
import DiceLayout from "@/components/DiceLayout"
import { useState } from "react";

export default function Home() {
  const [diceValues, setDiceValues] = useState([1]);

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 pt-16">
      <NumberOfDice setDiceValues={setDiceValues} />
      <DiceLayout diceValues={diceValues} />
    </main>
  )
}
