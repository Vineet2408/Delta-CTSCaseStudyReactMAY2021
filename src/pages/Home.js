import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="container-fluid mt-5 bg-dark text-white homeCon">
            <div className="row justify-content-center">
                <div className="col-md-2">
                    <p className="text-center text-decoration-underline">Login</p>
                    <Link className="btn bg-success" to="/login">
                        <img className="img-fluid" width="180" height="180" alt="login"
                            src="
                            https://lh3.googleusercontent.com/proxy/B6agflpQNSpi9pPcaAXukv4xy3oHQhCnls_elLc8bVqpu3OfbM-E04JBjHMvr-dUX_APox4uAtdDSS9CYDLpP7vDm830rzOcxA
                            " 
                            />

                    </Link>
                </div>
            </div>
            <div className="row">
                <br></br>
            </div>
            <div className="row justify-content-around">
                <div className="col-md-2">
                <p className="text-center text-decoration-underline">Register</p>
                    <Link className="btn bg-primary" to="/register">
                        <img className="img-fluid" width="180" height="180" alt="register"
                            src="https://miro.medium.com/max/498/1*Es2vCEieszU7QQqsLChl6A.png" />
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Home;
