import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { loginUser } from '../store/services/userService';
import OAuth2Login from 'react-simple-oauth2-login';


const LoginPage = (props) => {

    const history = useHistory()
    const enteredEmail = useRef();

    let emailValue;
    let token;

    const onSuccess = async (response) => {
        console.log('user email = ', emailValue);
        console.log('response from google api = ', response)
        token = response.access_token;
        console.log('token received from api :=  ', token);
        console.log("dispatching");

        let cred = {
            email: enteredEmail.current.value,
            token: token
        }
        if (token || token.length > 0) {
            await props.dispatch(loginUser(cred));
            history.push("/profile");
        }
        else {
            alert("server error");
        }


    };
    const onFailure = (response) => {
        
        console.error('res = ',response);
    }

    useEffect(() => {
        document.getElementById("oauthDiv").style.display = "none";
    }, [])
    // axios.post('http://localhost:3000/login', cred)
    //     .then(res => {
    //         console.log('after login res.data := ', res.data.accessToken);
    //     })
    //     .catch(err => { console.log(err.message) })



    const submitHandler = async (event) => {
        event.preventDefault();
        let emailRegex = /^[a-zA-z0-9]+@.+\..+$/;
        if (!emailRegex.test(enteredEmail.current.value)) {
            document.getElementById("formContainer").style.display = "block";
            document.getElementById("oauthDiv").style.display = "none";
            alert("email is not valid");
            return;
        }
        else {
            emailValue = enteredEmail.current.value;
            document.getElementById("formContainer").style.display = "none";
            document.getElementById("oauthDiv").style.display = "block";
        }

    }

    console.log(props.token);

    return (
        <div className="container card loginCon ">

            <form className="from-group " onSubmit={submitHandler} id="formContainer">
                <div className="col-6">
                    <div className="container">
                        <div className="row justify-content-center ">
                            <div className="col-md-6 ">
                                <input className="form-control" type="email" name="username" ref={enteredEmail} required placeholder="Enter your email" />
                            </div>
                        </div>

                        <div className="row justify-content-around">
                            <div className="col-md-6">
                                <button className="btn btn-success" type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
            <div className="col-6" id="oauthDiv">
                <OAuth2Login
                    authorizationUrl="https://accounts.google.com/o/oauth2/auth"
                    responseType="token"
                    scope="https://www.googleapis.com/auth/userinfo.email"

                    clientId="934740608074-iljt5pjnqeepk7m1puij4pj42tf9ruoq.apps.googleusercontent.com"
                    redirectUri="http://localhost:3001/profile"
                    onSuccess={onSuccess}
                    onFailure={onFailure} />
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps)(LoginPage);
