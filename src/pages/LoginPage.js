import React,{useRef} from 'react';

const LoginPage = () => {

    const enteredUsername = useRef();
    const enteredPassword = useRef();

    const submitHandler =(event)=>{

    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" name="username" ref={enteredUsername} />
                <input type="password" name="password" ref={enteredPassword}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage
