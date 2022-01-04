export interface LoginState {
    loading: boolean,
    isLoggedIn: boolean,
    token?: null | string,
    username?: null | string,
}

export type PayloadLogin = {
    username?: null | string,
    token?: null | string
}

export const initialState: LoginState = {
    loading: false,
    isLoggedIn: false,
    token: null,
    username: null
}

export type ActionReducer = {
    type: "login" | "logout" | "reset",
    payload?: PayloadLogin
}

export const init = (initial: LoginState = initialState): LoginState => {
    return initial;
}

const reducer = (state: LoginState, action: ActionReducer): LoginState => {
    switch (action.type) {
        case 'login':
            return {
                loading: false,
                isLoggedIn: true,
                username: action?.payload?.username,
                token: action?.payload?.token
            };
        case 'logout':
            return initialState;
        default:
            throw new Error();
    }
}

export default reducer;