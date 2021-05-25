import { GET_USER_BY_ID, GET_ALL_USER, EDIT_USER, ADD_USER, LOGIN_USER, ADD_LOAN, GET_ALL_LOANS, LOGOUT_USER } from '../actions/userActions';
import axios from 'axios';

const API_URL = 'http://localhost:3000'

// adding new user
export const registerUser = (data) => {
    console.log(data);
    return (dispatch) => {

        return axios.post(API_URL + "/register", data)
            .then(response => {
                console.log('user added');
                dispatch({
                    type: ADD_USER,
                    payload: response.data
                })
            })
            .catch(err => { console.log(err) })
        //call api to add data
    }
}
export const getAllUser = (token) => {
    return (dispatch) => {
        return axios.get(API_URL + "/users", {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(response => {
                console.log('resposne.data :=', response.data);
                dispatch({
                    type: GET_ALL_USER,
                    payload: response.data
                })
            })
    }
}

//Receive user by giving user Id

export const getUserById = (userId) => {
    console.log('inside getUserById , userId= ', userId)
    return (dispatch) => {
        return axios.get(API_URL + "/" + userId)
            .then((response) => {
                console.log(response);
                dispatch({
                    type: GET_USER_BY_ID,
                    payload: response.data
                })
            })
            .catch(err => { console.log(err) })
            .finally(() => { console.log("Get user by id is over") })

    }
}

export const loginUser = (cred) => {
    console.log(cred);
    return (dispatch) => {
        return axios.post(API_URL + "/login", cred)
            .then(response => {
                console.log(response);
                console.log(response.data.accessToken);
                dispatch({
                    type: LOGIN_USER,
                    token: response.data.accessToken,
                    loggedInUser: cred
                })
            })
            .catch(err => { console.log(err) })
            .finally(() => { console.log("Login user is over") })

    }
}

export const updateUser = (data, userId, token) => {
    console.log(data);
    return (dispatch) => {

        return axios.put(API_URL + "/users/" + userId, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(response => {
                console.log('user added');
                dispatch({
                    type: EDIT_USER,
                    payload: response.data
                })
            })
            .catch(err => { console.log(err) })
        //call api to add data
    }
}

export const addLoan = (loan, token) => {
    console.log('addlOAN = ', loan);
    return (dispatch) => {
        return axios.post(API_URL + '/loans', loan, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(response => {
                dispatch({
                    type: ADD_LOAN,
                    payload: response.data
                })
            })
            .catch(err => { console.log(err) })
    }
}

export const getAllLoan = (token) => {
    return (dispatch) => {
        return axios.get(API_URL + '/loans', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(response => {
                dispatch({
                    type: GET_ALL_LOANS,
                    payload: response.data
                })
            })
            .catch(err => { console.log(err) })
    }
}


export const userLogout = (token) => {
    console.log('inside logout');
    return (dispatch) => {
        return axios.get(API_URL + "/users", {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(response => {
                console.log('resposne.data :=', response.data);
                dispatch({
                    type: LOGOUT_USER
                })
            })
    }
}