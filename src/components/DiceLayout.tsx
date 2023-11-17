import { useEffect } from 'react';
import Die from './Die';
import { motion, useAnimate, stagger } from 'framer-motion';

interface DiceLayoutProps {
    diceValues: Array<number>;
}

const DiceLayout = ({ diceValues }: DiceLayoutProps) => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(".die", { rotate: [0, 360], opacity: [0, 1] }, { delay: stagger(0.1) });
    })

    return (<motion.section
        className="grid grid-cols-3 gap-4"
        layout
        ref={scope}
    >
        {diceValues.map((val, i) => <Die value={val} key={`die-index-${i}`} />)}
    </motion.section>);
};

export default DiceLayout;