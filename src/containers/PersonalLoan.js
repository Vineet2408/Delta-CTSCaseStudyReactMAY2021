import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { addLoan } from '../store/services/userService';


const PersonalLoan = (props) => {

    let loan = props.loan;

    let history = useHistory();

    const [totalExp, setTotalExp] = useState();
    const [annualIncome, setAnnualIncome] = useState();
    const [companyName, setCompanyName] = useState();
    const [designation, setDesignation] = useState();
    const [expInCur, setExpInCur] = useState();

    const submitHandler = async (e) => {

        e.preventDefault();
        loan.totalExp = totalExp;
        loan.annualIncome = annualIncome;
        loan.companyName = companyName;
        loan.designation = designation;
        loan.expInCur = expInCur;

        loan.email = props.state.users.loggedInUser.email;
        let accountNo;
        for (let i = 0; i < props.state.users.users.length; i++) {
            if (props.state.users.users[i].email === props.state.users.loggedInUser.email) {
                accountNo = props.state.users.users[i].accountNo;
                break;
            }
        }
        loan.accountNo = accountNo;

        console.log('loan := ', loan);
        await props.dispatch(addLoan(loan, ""));

        history.push('/profile');

    }

    return (
        <div className="container-fluid">
            <form className="form-group container" onSubmit={submitHandler}>
                <label htmlFor="companyName"> Company Name</label>
                <input name="companyName" defaultValue={companyName} onChange={async (e) =>{await setCompanyName(e.target.value)}}
                    className="form-control" type="text" minLength="2" placeholder="Enter Your Company Name" required />

                <label htmlFor="totalExp"> Total Experience</label>
                <input name="totalExp" defaultValue={totalExp} onChange={async (e) =>{await setTotalExp(e.target.value)}}
                    className="form-control" type="number" min="1" placeholder="Total Experience (in yrs)"
                    required />

                <label htmlFor="expInCur"> Experience in Current Organisation</label>
                <input name="expInCur" defaultValue={expInCur} onChange={async (e) =>{await setExpInCur(e.target.value)}}
                    className="form-control" type="number" min="1"
                    placeholder="Experience in Current Organisation (in yrs)" required />

                <label htmlFor="designation"> Designation in Current Organisation</label>
                <input name="designation" defaultValue={designation} onChange={async (e) =>{await setDesignation(e.target.value)}}
                    className="form-control" type="text" minLength="2"
                    placeholder="Designation in Current Organisation" required />

                <br></br>
                <label htmlFor="annualIncome">Annual Income</label>
                <input name="annualIncome" defaultValue={annualIncome} onChange={async (e) =>{await setAnnualIncome(e.target.value)}}
                    className="form-control" type="number" min="100" placeholder="Annual Income" required />

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

const mapStateToProps = (state) => {
    return {
        state: state
    }
}
export default connect(mapStateToProps)(PersonalLoan);
