

import {GET_USER_BY_ID,GET_ALL_USER,EDIT_USER,ADD_USER} from '../actions/userActions';

let user={}

let initialState = {
    users:[],
    loggedInUser:user
}

const userReducer = (state=initialState,action)=>{

    switch(action.type)
    {
        case ADD_USER:
            let newState = {
                users:[...state.users,action.payload],
                loggedInUser:state.loggedInUser
            }
            return newState;
        case GET_ALL_USER:
            let newState = {
                users:action.payload,
                loggedInUser:state.loggedInUser
            }
            return newSate;

        case GET_USER_BY_ID:
            return state;

        case EDIT_USER:
            let newState={
                ...state,
                users:[state.users.slice(0,action.index),action.payload,state.users.slice(index+1)],
            }
            return newState;
    }
}

export default userReducer;