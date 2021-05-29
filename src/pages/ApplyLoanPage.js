import React, { useState } from 'react'
import PersonalLoan from '../containers/PersonalLoan';
import EducationLoan from '../containers/EducationLoan';
const ApplyLoanPage = () => {

    const [loanType, setLoanType] = useState("educational");
    const [loanAmount, setLoanAmount] = useState(10);
    const [loanApplyDate, setLoanApplyDate] = useState();
    const [issueDate, setIssueDate] = useState()
    const [rateOfInterest, setRateOfInterest] = useState(6);
    const [durationInput, setDurationInput] = useState(5);
    const [loan, setLoan] = useState();

    const imgStyle = {
        display: "none"
    }

    const formSubmitHanlder = (e) => {
        e.preventDefault();
        let obj = {
            loanType: loanType,
            loanAmount: loanAmount,
            loanApplyDate: loanApplyDate,
            issueDate: issueDate,
            rateOfInterest: rateOfInterest,
            durationInput: durationInput,


        }
        setLoan(obj);
        document.getElementById("nextImg").style.display = "block";
    }


    return (
        <div className="container mt-5 bg-dark text-white">
            <form className="from-group" onSubmit={formSubmitHanlder}>
                <br></br>
                <label htmlFor="loan-type">Loan Type</label>
                <select name="loan-type" id="loan-type" onChange={async (e) => {
                    await setLoanType(e.target.value)
                    await setRateOfInterest(e.target.value === "educational" ? 6 : 12)
                }
                }>
                    <option value='educational' selected={loanType === 'educational'}>Eductional</option>
                    <option value='personal' selected={loanType === 'personal'}>Personal/Home</option>
                </select>
                <br></br>
                <br></br>
                <label htmlFor="loanAmount">Loan Amount</label>
                <input
                    className="form-control"
                    defaultValue={loanAmount}
                    onChange={async (e) => { await setLoanAmount(e.target.value) }}
                    type="number"
                    name="loanAmount"
                    min="1"
                    placeholder="Loan Amount" required />

                <br></br>
                <label htmlFor="applyDate">Apply Date</label>
                <input
                    className="form-control"
                    type="date"
                    defaultValue={loanApplyDate}
                    required
                    name="applyDate"
                    id="applyDate"
                    onChange={async (e) => {

                        let curr = new Date();
                        curr.setDate(curr.getDate() + 1);
                        let date = curr.toISOString().substr(0, 10);
                        console.log(new Date(e.target.value).getTime(), " ", new Date(date).getTime());
                        console.log('diff = ', new Date(e.target.value) - new Date(date).getTime())
                        if (new Date(e.target.value) - new Date(date).getTime() < 0) {
                            document.getElementById("dateWarning").style.display = "block";
                            document.getElementById("dateWarning").style.background = "yellow";
                            document.getElementById("dateWarning").innerHTML = "Date is Not correct";
                            document.getElementById("submitBtn").disabled = true;
                        }
                        else {
                            document.getElementById("dateWarning").style.display = "none";
                            document.getElementById("submitBtn").disabled = false;
                        }
                        await setLoanApplyDate(e.target.value);
                    }}
                />
                <p className="text-danger" id="dateWarning"></p>

                <br></br>
                <br></br>

                <label htmlFor="issueDate">Issue Date</label>
                <input
                    className="form-control"
                    type="date"
                    defaultValue={issueDate}
                    onChange={async (e) => await setIssueDate(e.target.value)}
                    name="issueDate"
                    id="issueDate" />
                <br></br>
                <p className="text-warning">The rate of interest is based on Bank Policy and Loan type</p>
                <h4>
                    Rate of Interest :=<i className="text-success">{rateOfInterest}%</i>
                </h4>

                <br></br>
                <label htmlFor="duration">Duration of Loan</label>
                <select name="duration" id="duration" onChange={async (e) => { await setDurationInput(e.target.value); }}>
                    <option value="5" selected={durationInput === '5'}>5</option>
                    <option value="10" selected={durationInput === '10'}>10</option>
                    <option value="15" selected={durationInput === '15'}>15</option>
                    <option value="20" selected={durationInput === '20'}>20</option>

                </select>

                <br></br>
                <div className="row justify-content-center">
                    <div className="col-md-2">
                        <button id="submitBtn" className="btn btn-primary">Next</button>
                        <img width="40" height="90" style={imgStyle} id="nextImg" className="img-responsive"
                            atl="next" src="https://cdn.onlinewebfonts.com/svg/img_71602.png"></img>
                    </div>
                </div>
                <br></br>
                <br></br>
            </form>
            {
                (loanType === "educational" && loan) && (
                    <EducationLoan loan={loan}></EducationLoan>
                )
            }
            {
                (loanType === "personal" && loan) && (
                    <PersonalLoan loan={loan}></PersonalLoan>
                )
            }
        </div>
    )
}

export default ApplyLoanPage
