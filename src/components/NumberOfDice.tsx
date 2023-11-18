import { useState } from "react";
import { motion } from "framer-motion";
import generateRandomNumber from "@/utils/generateRandomNumber";

interface NumberOfDiceProps {
    setDiceValues: React.Dispatch<React.SetStateAction<Array<number>>>
}

export default function NumberOfDice({ setDiceValues }: NumberOfDiceProps) {
    const [inputVal, setInputVal] = useState<number>(1);
    const numberOfDiceHandler = () => {
        const newArray: Array<number> = [];
        for (let i = 0; i < inputVal; i++) {
            newArray[i] = generateRandomNumber(1, 6);
        }
        setDiceValues(newArray);
    };

    return (
        <div className="flex flex-col gap-4 pt-18 px-4">
            <h1 className="text-2xl xl:text-5xl font-semibold">Number of Dice</h1>
            <input type="number" min="1" max="99" defaultValue={inputVal} onChange={(e) => setInputVal(e.target.valueAsNumber)} className="border-solid border-2 border-stone-500 p-1" />
            <motion.button 
                onClick={() => numberOfDiceHandler()} 
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 18px 0px #dc2626" }}
                className="p-1 rounded-md bg-gradient-to-r from-red-600 to-amber-500 text-white font-medium">
                    Roll
            </motion.button>
        </div>
    )
}