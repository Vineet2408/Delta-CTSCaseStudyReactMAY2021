import React from 'react';

const Loans = (props) => {
    let loans = props.loans;
    return (
        <div className="container-fluid">
            <ul>
                {
                loans.map((loan, index) => 
                <li className="bg-success"><strong className="text-decoration-underline">Loan Type :</strong> {loan.loanType} | {" "}
                 <strong className="text-decoration-underline">Loan Amount :</strong> {loan.loanAmount} |  {" "}
                { ((loan.companyName)&&<i className="text-warning"> <strong className="text-decoration-underline">Company Name :</strong> {loan.companyName}</i>)}</li>)}
            </ul>
        </div>
    )
}

export default Loans;
