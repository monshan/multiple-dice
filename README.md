# Roll 1-99 Dice


## Process of State

! Check the dif !

Realized belatedly that the roll feature did not include a function for re-rolling dice
For example, if we started with 4 and the user increased the number to 6, only 2 dice would mount with new values and subsequently run the stagger animation on the <Die /> component mount.

So--

Just change <NumberOfDice /> to change state only when the number changes, but on every submission or button click an entirely new array is generated and props change to trigger the component refresh.

```jsx
export default function Home() {
  const [diceValues, setDiceValues] = useState([1]);

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 pt-16">
      <NumberOfDice setDiceValues={setDiceValues} />
      <DiceLayout diceValues={diceValues} />
    </main>
  )
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

```
