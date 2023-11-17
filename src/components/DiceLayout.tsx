import Die from './Die';

interface DiceLayoutProps {
    diceValues: Array<number>;
}

const DiceLayout = ({ diceValues }: DiceLayoutProps) => {
    return <section
        className="grid grid-cols-3 gap-4"
    >{diceValues.map((val, i) => <Die value={val} key={`die-index-${i}`} />)}</section>;
};

export default DiceLayout;