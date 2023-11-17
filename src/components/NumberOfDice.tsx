"use client"
import { useState } from "react";

interface NumberOfDiceProps {
    setNumberOfDice: (numberOfDice: number) => void;
}

export default function NumberOfDice({ setNumberOfDice }: NumberOfDiceProps) {
    // const [formData, setFormData] = useState(1)

    return (
        <form 
            className="flex flex-col gap-4"
            // onSubmit={(e) => setNumberOfDice(formData)}
        >
            <h1>Number of Dice</h1>
            <input type="number" min="1" max="99" defaultValue={1} className="border-solid border-2 border-stone-500 p-1" onChange={(e) => setNumberOfDice(e.target.valueAsNumber)} />
            <button type="submit" className="bg-stone-200">Roll</button>
        </form>
    )
}