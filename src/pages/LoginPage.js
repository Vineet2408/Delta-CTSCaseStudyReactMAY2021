import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { loginUser } from '../store/services/userService';
import OAuth2Login from 'react-simple-oauth2-login';
 

const LoginPage = (props) => {

    const history = useHistory()
    const enteredEmail = useRef();
    const enteredPassword = useRef();

    const onSuccess = response => {console.log(response)
       let token=response.access_token;
    };
    const onFailure = response => console.error(response);


    // axios.post('http://localhost:3000/login', cred)
    //     .then(res => {
    //         console.log('after login res.data := ', res.data.accessToken);
    //     })
    //     .catch(err => { console.log(err.message) })



    const submitHandler = async (event) => {
        event.preventDefault();
        let cred = {
            email: enteredEmail.current.value,
            password: enteredPassword.current.value
        }
        await props.dispatch(loginUser(cred));
        history.push("/profile");

    }

    console.log(props.token);

    return (
        <div className="container card loginCon ">

            <form className="from-group " onSubmit={submitHandler}>
                <div className="col-6">
                    <div className="container">
                        <div className="row justify-content-center ">
                            <div className="col-md-6 ">
                                <input className="form-control" type="email" name="username" ref={enteredEmail} required placeholder="enter your email" />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <input className="form-control" type="password" minLength="4" name="password" ref={enteredPassword} required placeholder="enter your password" />
                            </div>
                        </div>
                        <div className="row justify-content-around">
                            <div className="col-md-6">
                                <button className="btn btn-success" type="submit">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <OAuth2Login
                        authorizationUrl="https://accounts.google.com/o/oauth2/auth"
                        responseType="token"
                        scope="https://www.googleapis.com/auth/userinfo.email"
                        
                        clientId="934740608074-iljt5pjnqeepk7m1puij4pj42tf9ruoq.apps.googleusercontent.com"
                        redirectUri="http://localhost:3000/profile"
                        onSuccess={onSuccess}
                        onFailure={onFailure} />
                </div>
            </form>


        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps)(LoginPage);
