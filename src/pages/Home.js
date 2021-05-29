import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="container-fluid mt-5 text-white homeCon">
            <div className="row justify-content-center">
                <div className="col-6 bg-dark homeCon">
                    <div className="row justify-content-around">
                        <div className="col-md-4 bg-dark  ">
                            <p className="text-center text-decoration-underline">Login</p>
                            <Link className="btn bg-success" to="/login">
                                <img className="img-fluid" width="400" height="400" alt="login"
                                    src="
                            https://businesstemplates.co.nz/wp-content/uploads/2020/12/login-concept-illustration_114360-739.jpg
                            "
                                />

                            </Link>
                        </div>

                    </div>

                    <div className="row justify-content-around">
                        <br></br>
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-md-4 bg-dark ">
                            <p className="text-center text-decoration-underline">Register</p>
                            <Link className="btn bg-primary" to="/register">
                                <img className="img-fluid" width="400" height="400" alt="register"
                                    src="https://miro.medium.com/max/498/1*Es2vCEieszU7QQqsLChl6A.png" />
                            </Link>
                        </div>

                    </div>
                </div>

            </div>


        </div>
    )
}

export default Home;
