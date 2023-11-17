import { ReactElement, useEffect } from 'react';
import generateRandomNumber from '@/utils/generateRandomNumber';
import Die from './Die';

interface DiceLayoutProps {
    numberOfDice: number;
}

const DiceLayout = ({ numberOfDice }: DiceLayoutProps) => {
    const dice: Array<ReactElement> = [];
    for (let i = 0; i < numberOfDice; i++) {
        dice.push(<Die value={generateRandomNumber(1, 6)} />);
    }

    useEffect(() => {
        if (numberOfDice === dice.length) return;

        let dif = numberOfDice - dice.length;
        if (dif > 0) {
            while (dif > 0) {
                dice.push(<Die />);
                dif--;
            }
        } else if (dif < 0) {
            while (dif < 0) {
                dice.pop();
                dif++;
            }
        }
    }, [numberOfDice]);

    return <section
        className="grid grid-cols-3 gap-4"
    >{dice}</section>;
};

export default DiceLayout;