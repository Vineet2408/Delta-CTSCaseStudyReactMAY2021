import React, { Component } from 'react'
import { connect } from 'react-redux';
import { userLogout } from '../store/services/userService';

class LogoutPage extends Component {

    componentDidMount()
    {
        console.log(this.props);
        this.props.dispatch(userLogout(this.props.token));
    }

    render() {
        return (
            <div className="mt-4">
                <h1 className="bg-dark text-white">Logout Successful</h1>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return state;
}

export default connect(mapStateToProps)(LogoutPage);
