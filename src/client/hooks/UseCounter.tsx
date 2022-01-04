import React, {useState} from 'react';

const useCounter = (initial: number = 10) => {
    const [counter, setCounter] = useState(initial);

    const accumulator = (num: number): void => {
        setCounter(counter + num);
    }

    return {
        counter, accumulator
    };
};

export default useCounter;
