

import {GET_USER_BY_ID,GET_ALL_USER,EDIT_USER,ADD_USER, LOGIN_USER,ADD_LOAN,GET_ALL_LOANS, LOGOUT_USER} from '../actions/userActions';

let user={}

let initialState = {
    users:[],
    loggedInUser:user,
    token:null,
    loans:[]
}

const userReducer = (state=initialState,action)=>{
    let newState;
    console.log(action.type);
    switch(action.type)
    {
        
        case ADD_USER:
             newState = {
                 ...state,
                users:[...state.users,action.payload],
                loggedInUser:state.loggedInUser
            }
            return newState;
        case GET_ALL_USER:
             newState = {
                 ...state,
                users:action.payload,
            }
            return newState;

        case GET_USER_BY_ID:
             newState = {
                ...state,
                loggedInUser:action.payload
            }
            return newState;

        case EDIT_USER:
             newState={
                ...state,
                users:[state.users.slice(0,action.index),action.payload,state.users.slice(action.index+1)],
            }
            return newState;
        case LOGIN_USER :
            
            newState={
                ...state,
                users:action.users,
                token:action.token,
                loggedInUser:action.loggedInUser
            }
            return newState;
        case ADD_LOAN:
            newState = {
                ...state,
                loans:[...state.loans,action.payload]
            }
        return newState;

        case GET_ALL_LOANS:
            newState={
                ...state,
                loans:action.payload
            }
        return newState;

        case LOGOUT_USER:
            newState={
                ...state,
                loggedInUser:null,
                token:null
            }
            return newState;

        default: return state;
    }
}

export default userReducer;