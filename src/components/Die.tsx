export type DieProps = {
    value: number;
}

export default function Die({ value }: DieProps ) {
    const faces: { [key: number]: JSX.Element } = {
        1: <div className="flex items-center justify-center h-full"><span className="bg-stone-800 rounded-full w-2 h-2" /></div>,
        2: <div className="grid grid-cols-2 items-center justify-items-center h-full"><span className="bg-stone-800 rounded-full w-2 h-2 col-start-2" /><span className="bg-stone-800 rounded-full w-2 h-2 row-start-2" /></div>,
        3: <div className="grid grid-cols-3 items-center justify-items-center h-full"><span className="bg-stone-800 rounded-full w-2 h-2 col-start-3" /><span className="bg-stone-800 rounded-full w-2 h-2 row-start-2 col-start-2" /><span className="bg-stone-800 rounded-full w-2 h-2 row-start-3" /></div>,
        4: <div className="grid grid-cols-2 items-center justify-items-center h-full"><span className="bg-stone-800 rounded-full w-2 h-2" /><span className="bg-stone-800 rounded-full w-2 h-2" /><span className="bg-stone-800 rounded-full w-2 h-2" /><span className="bg-stone-800 rounded-full w-2 h-2" /></div>,
        5: <div className="grid grid-cols-3 items-center justify-items-center h-full"><span className="bg-stone-800 rounded-full w-2 h-2" /><span className="bg-stone-800 rounded-full w-2 h-2 col-start-3" /><span className="bg-stone-800 rounded-full w-2 h-2 row-start-2 col-start-2" /><span className="bg-stone-800 rounded-full w-2 h-2 row-start-3" /><span className="bg-stone-800 rounded-full w-2 h-2 col-start-3 row-start-3" /></div>,
        6: <div className="grid grid-cols-3 items-center justify-items-center h-full"><span className="bg-stone-800 rounded-full w-2 h-2" /><span className="bg-stone-800 rounded-full w-2 h-2 col-start-3" /><span className="bg-stone-800 rounded-full w-2 h-2" /><span className="bg-stone-800 rounded-full w-2 h-2 col-start-3" /><span className="bg-stone-800 rounded-full w-2 h-2" /><span className="bg-stone-800 rounded-full w-2 h-2 col-start-3" /></div>,
    }
    
    return <div className="border-2 border-solid border-stone-500 w-12 h-12 p-1 rounded-sm">{faces[value]}</div>
}