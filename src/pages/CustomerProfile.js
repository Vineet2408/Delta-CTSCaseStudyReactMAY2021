import React, { Fragment } from 'react';
import Customer from '../components/customer/Customer';
import Loans from '../components/customer/Loans';
const CustomerProfile = (props) => {
    return (
       <Fragment>
           <Customer></Customer>
           <hr></hr>
           <Loans></Loans>
       </Fragment>
    )
}



export default CustomerProfile
