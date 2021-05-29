import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addLoan } from '../store/services/userService';
import { useHistory } from 'react-router';


const EducationLoan = (props) => {

    let loan = props.loan;

    let history = useHistory();

    const [courseFee, setCourseFee] = useState(10);
    const [courseName, setCourseName] = useState();
    const [fatherName, setFatherName] = useState();
    const [fatherOccupation, setFatherOccupation] = useState();
    const [fatherTotalExp, setFatherTotalExp] = useState();
    const [annualIncome, setAnnualIncome] = useState();
    const [fatherExpInCur, setFatherExpInCur] = useState();
    const [rationCardNo, setRationCardNo] = useState();
    

    const submitHandler = async (e) => {
        e.preventDefault();

        loan.courseFee = courseFee;
        loan.courseName = courseName;
        loan.fatherName = fatherName;
        loan.fatherOccupation = fatherOccupation;
        loan.fatherExpInCur = fatherExpInCur;
        loan.fatherTotalExp = fatherTotalExp;
        loan.rationCardNo = rationCardNo;
        loan.annualIncome = annualIncome;
        loan.email=props.state.users.loggedInUser.email;
        let accountNo;
        for(let i=0;i<props.state.users.users.length;i++)
        {
            if(props.state.users.users[i].email===props.state.users.loggedInUser.email)
            {
                accountNo = props.state.users.users[i].accountNo;
                break;
            }
        }
        loan.accountNo = accountNo;

        console.log('loan := ', loan);
        await props.dispatch(addLoan(loan, ""));

        history.push('/profile');

    }

    console.log('eduactionalLoanForm props= : ',props);
    return (
        <div className="container-fluid" >
            <form className="container form-group" onSubmit={submitHandler}>
                <label htmlFor="coureFee">Course fee</label>
                <input name="coureFee" defaultValue={courseFee} onChange={async (e) =>{ await setCourseFee(e.target.value)}}
                    className="form-control" type="number" min="10" placeholder="Course Fee" required />

                <label htmlFor="courseName">Course Name</label>
                <input name="courseName" defaultValue={courseName} onChange={async (e) =>{ await setCourseName(e.target.value)}}
                    className="form-control" type="text" minLength="3" placeholder="Course" required />

                <label htmlFor="fatherName"> Father Name</label>
                <input name="fatherName" defaultValue={fatherName} onChange={async (e) =>{ await setFatherName(e.target.value)}}
                    className="form-control" type="text" minLength="2" placeholder="Father's Name" required />

                <label htmlFor="fatherOccupation">Father Occupation</label>
                <input name="fatherOccupation" defaultValue={fatherOccupation} onChange={async (e) =>{ await setFatherOccupation(e.target.value)}}
                    className="form-control" type="text" placeholder="Father's Occupation" required />

                <label htmlFor="fatherTotalExp">Father Total Experience</label>
                <input name="fatherTotalExp" defaultValue={fatherTotalExp} onChange={async (e) =>{ await setFatherTotalExp(e.target.value)}}
                    className="form-control" type="number" min="1" placeholder="Father's Total Experience (in yrs)" required />

                <label htmlFor="fatherExpInCur">Father Experience in Current Organisation</label>
                <input name="fatherExpInCur" defaultValue={fatherExpInCur} onChange={async (e) =>{await setFatherExpInCur(e.target.value)}}
                    className="form-control" type="number" min="1" placeholder="Father's Experience in Current Organisation (in yrs)" required />

                <label htmlFor="rationCardNo">Ration Card Number</label>
                <input name="rationCardNo" defaultValue={rationCardNo} onChange={async (e) =>{await setRationCardNo(e.target.value)}}
                    className="form-control" type="number" minLength="8" placeholder="Ration Card Number" required />

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

export default connect(mapStateToProps)(EducationLoan);
