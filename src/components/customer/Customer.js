import React, { Fragment } from 'react';

const Customer = (props) => {
    let user = props.user;
    if(!user.email)
    {
        return <div className="container bg-dark text-white">
            <div className="row">
                <h1>No Customer Found</h1>
            </div>
        </div>
    }
    return (
        <div className="container">
            <div className="row">
                <div className='col-md-7'>
                    <div className='row'>
                        <strong class='user-title'>Name : {user.fullName} </strong>
                        <hr></hr>
                    </div>
                    <div className="row">
                        <i><strong>Email : </strong>{user.email}</i>
                    </div>
                </div>
                <div className="col-md-5">
                    <p>{user.accountNo}</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <strong>Contact :</strong> {user.contact}
                </div>
                <div className="col-md-6">
                   {/*(user.accountType!=='')&& <Fragment><strong>Account Type : </strong> <i>{user.accountType}</i></Fragment>*/}
                </div>

            </div>
            <hr></hr>
            <div className="row">
               <p>  <strong>Age : {user.age}</strong> | <i><strong>DOB : </strong>{user.dob}</i></p>
            </div>
            <hr></hr>

        </div>
    )
}



export default Customer;
