import Customer from '../components/customer/Customer';
import Loans from '../components/customer/Loans';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAllLoan, getAllUser } from '../store/services/userService';
class CustomerProfile extends Component {

    constructor() {
        super();
        this.user = {};
    }
    componentDidMount() {
        if (this.props.token) {
            this.props.dispatch(getAllUser(this.props.token));
            let arr = this.props.users;
            for (let i = 0; i < arr.length; i++) {
                let user = arr[i];
                if (user.email) {
                    if (user.email === this.props.loggedInUser.email) {
                        this.user = user;
                        break;
                    }
                }
            }
        }
        else {
            return (
                <div className="container mt-5">
                    <h2 className="text-danger">Login Not Succesfull!!</h2>
                    <button className="btn btn-warning"
                        onClick={() => { this.props.history.push("/login") }}>
                        Try Again!
                    </button>
                </div>);

        }

        this.props.dispatch(getAllLoan(this.props.token));
        console.log(this.props.loans)
        let loanList=[];
        for(let i=0;i<this.props.loans.length;i++)
        {
            if(this.props.loans[i].email===this.props.loggedInUser.email)
            {
                loanList.push(this.props.loans[i]);
            }
        }
        this.loans=loanList;
    }

    render() {
        console.log('profile props = ',this.props);

        return (
            <div>
                <div className="container mt-5 bg-dark text-white">

                    {
                        (this.user) && (<div className="row">
                            <h1 className="text-decoration-underline">Customer Detail</h1>
                            <Customer user={this.user} />
                        </div>)
                    }
                    {
                        (this.loans) && (
                            <div className="row">
                                <h3 className="text-decoration-underline"> Loans Applied By Customer</h3>
                                <Loans loans={this.loans}></Loans>
                            </div>
                        )
                    }

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state = ', state);
    console.log('users = ', state.users);
    console.log('token = ', ' ', state.users.token)
    console.log('state.token ', state.token);
    return {
        ...state.users
    }
}

export default connect(mapStateToProps)(CustomerProfile);
