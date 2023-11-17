import { ChangeEventHandler, useState } from "react";
import generateRandomNumber from "@/utils/generateRandomNumber";

interface NumberOfDiceProps {
    setDiceValues: React.Dispatch<React.SetStateAction<Array<number>>>
}

export default function NumberOfDice({ setDiceValues }: NumberOfDiceProps) {
    const [formData, setFormData] = useState<Array<number>>([]);
    const numberOfDiceHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        const newArray: Array<number> = [];
        for (let i = 0; i < e.target.valueAsNumber; i++) {
            newArray[i] = generateRandomNumber(1, 6);
        }
        setFormData(newArray);
    };

    return (
        <div className="flex flex-col gap-4">
            <h1>Number of Dice</h1>
            <input type="number" min="1" max="99" defaultValue={1} className="border-solid border-2 border-stone-500 p-1" 
                onChange={numberOfDiceHandler} 
            />
            <button onClick={() => setDiceValues(formData)} className="bg-stone-200">Roll</button>
        </div>
    )
}