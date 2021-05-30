import Enzyme,{mount, shallow} from  'enzyme';
import { findByTestAttr } from '../utils/testUtils';
import  EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import RegistrationPage from '../../pages/RegistrationPage';
import {storeFactory} from '../utils/testUtils';
import { Provider } from 'react-redux';
import React from 'react';


Enzyme.configure({adapter:new EnzymeAdapter() });
let initialState = {
    users:[],
    loggedInUser:{},
    token:null,
    loans:[]
}

const setup = (state=initialState)=>{
    const store = storeFactory(state);
    return mount(<Provider store={store}><RegistrationPage></RegistrationPage></Provider>)
}

test('render Registration Component without error',()=>{
    const wrapper = setup();
    const val="component-registration";
    const registrationComp = findByTestAttr(wrapper,val);
    expect(registrationComp.length).toBe(1);
});

test('changing account-Type input will set the state accountType ',()=>{
    const setAccountType = jest.fn();
    React.useState = jest.fn(()=>["",setAccountType]);
    const wrapper = setup();
    const val = "account-type";
    const accountTypeInput = findByTestAttr(wrapper,val);

    const mockEvent = {target:{value:"salary"}};
    accountTypeInput.simulate("change",mockEvent);
});

test('state initial amount changes when accountType changes',()=>{
    const setDepositAmount = jest.fn();
    React.useState = jest.fn(()=>[0,setDepositAmount]);
    const wrapper = setup();
    const val = "account-type";
    const accountTypeInput = findByTestAttr(wrapper,val);

    const mockEvent = {target:{value:5000}};
    accountTypeInput.simulate("change",mockEvent);
    
});








