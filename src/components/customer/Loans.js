import React from 'react';

const Loans = (props) => {
    let loans = props.loans;
    return (
        <div className="container-fluid">
            <ul>
                {loans.map((loan, index) => <li className="bg-success">Loan Type : {loan.loanType} , Loan Amount : {loan.loanAmount}</li>)}
            </ul>
        </div>
    )
}

export default Loans;
