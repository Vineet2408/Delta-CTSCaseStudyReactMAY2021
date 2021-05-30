import { connect } from 'react-redux';
import { addLoan } from '../store/services/userService';

import React, { Component } from 'react'

class PersonalLoan extends Component {

    constructor() {
        super();
        this.state = {
            isFormValid : false,
            pLoan:{}
        }
    }

    shouldComponentUpdate(nextProp, nextState) {

        console.log('nextState = ', nextState);

        if (nextState.isFormValid === true) {
            return true;
        }

        else {
            return false;
        }

    }

    async componentDidUpdate() {
        console.log("iniside componentDiduPDATE");
        if(this.state.isFormValid===true)
        {
            console.log("dispatching");
            await this.props.dispatch(addLoan(this.state.pLoan, ""));
            this.props.history.push('/profile');
        }
    }

    submitHandler = async (e) => {

        e.preventDefault();
        let loan = this.props.loan;//send by parent component

        loan.totalExp = this.totalExp.value;
        loan.annualIncome = this.annualIncome.value;
        loan.companyName = this.companyName.value;
        loan.designation = this.designation.value;
        loan.expInCur = this.expInCur.value;

        loan.email = this.props.state.users.loggedInUser.email;

        let accountNo;
        for (let i = 0; i < this.props.state.users.users.length; i++) {
            if (this.props.state.users.users[i].email === this.props.state.users.loggedInUser.email) {
                accountNo = this.props.state.users.users[i].accountNo;
                break;
            }
        }
        loan.accountNo = accountNo;

        console.log('loan := ', loan);
        this.setState({
            ...this.state,
            pLoan:loan,
            isFormValid:true
        });
        //await this.props.dispatch(addLoan(loan, ""));

        //this.props.history.push('/profile');

    }


    render() {

        return (
            <div className="container-fluid">
                <form className="form-group container" onSubmit={this.submitHandler}>
                    <label htmlFor="companyName"> Company Name</label>
                    <input name="companyName"
                        ref={(input) => { this.companyName = input }}
                        className="form-control" type="text"
                        minLength="2" placeholder="Enter Your Company Name" required />

                    <label htmlFor="totalExp"> Total Experience</label>
                    <input name="totalExp"
                        ref={(input) => { this.totalExp = input }}
                        className="form-control" type="number" min="1"
                        placeholder="Total Experience (in yrs)"
                        required />

                    <label htmlFor="expInCur"> Experience in Current Organisation</label>
                    <input name="expInCur"
                        ref={(input) => { this.expInCur = input }}
                        className="form-control" type="number" min="1"
                        placeholder="Experience in Current Organisation (in yrs)" required />

                    <label htmlFor="designation"> Designation in Current Organisation</label>
                    <input name="designation"
                        ref={(input) => { this.designation = input }}
                        className="form-control" type="text" minLength="2"
                        placeholder="Designation in Current Organisation" required />

                    <br></br>
                    <label htmlFor="annualIncome">Annual Income</label>
                    <input name="annualIncome"
                        ref={(input) => { this.annualIncome = input }}
                        className="form-control" type="number" min="1000" 
                        placeholder="Annual Income" required />

                    <br></br>
                    <div className="row justify-content-center">
                        <div className="col-md-2">
                            <button id="submitBtn" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}
export default connect(mapStateToProps)(PersonalLoan);
