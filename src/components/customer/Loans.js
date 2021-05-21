import React from 'react';

const Loans = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <h2>Select Type Of Loan</h2>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <h4 className="card-title">Eductional</h4>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <h4 className="card-title">Personal</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loans;
