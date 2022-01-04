import React, {useReducer} from 'react';
import loginReducer, {init, initialState} from "../reducers/LoginReducer";

const Login = () => {
    const [state, dispatch] = useReducer(loginReducer, initialState, init);
    const {username, loading, isLoggedIn} = state;
    return (
        <div>
            <div>Login Section</div>
            {
                username == null
                    ? <button onClick={() => dispatch({
                        type: "login",
                        payload: {username: "alex", token: "some-token-1212"}
                    })}>Login</button>
                    : <button onClick={() => {
                        dispatch({type: "logout"})
                    }}>Logout</button>
            }

            {isLoggedIn && <div>User {username} authenticated</div>}
            {loading && <div>Loading...</div>}
        </div>
    );
};

export default Login;
