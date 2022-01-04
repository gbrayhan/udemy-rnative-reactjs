import React, {useReducer} from 'react';
import counterReducer, {init} from "../reducers/CounterReducer";

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, 0, init);

    return (
        <div>
            <div>
                <p>
                    Counter:
                </p>
                <p>{state.count}</p>
            </div>

            <button onClick={() => dispatch({type: "increment"})}>+1</button>
            <button onClick={() => dispatch({type: "decrement"})}>-1</button>
            <button onClick={() => dispatch({type: "reset", payload: 7})}>Set to 7</button>
        </div>
    );
};

export default Counter;
