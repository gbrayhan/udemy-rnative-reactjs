export type Counter = {
    count: number
}

export type ActionReducer = {
    type: "increment" | "decrement" | "reset",
    payload?: number
}

export const init = (initialCount: number = 0): Counter => {
    return {count: initialCount};
}

const reducer = (state: Counter, action: ActionReducer): Counter => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}

export default reducer;