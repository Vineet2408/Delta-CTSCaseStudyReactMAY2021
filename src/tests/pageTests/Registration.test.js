import Enzyme,{mount, shallow,ShallowWrapper} from  'enzyme';
import { findByTestAttr } from '../utils/testUtils';
import  EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import RegistrationPage from '../../pages/RegistrationPage';
import {storeFactory} from '../utils/testUtils';
import { Provider } from 'react-redux';


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

test('state initial amount changes when saving accountType changes',()=>{
    const wrapper = setup();
    
});








