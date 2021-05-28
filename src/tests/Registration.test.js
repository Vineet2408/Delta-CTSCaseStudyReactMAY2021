import Enzyme,{shallow,ShallowWrapper} from  'enzyme';

import  EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import RegistrationPage from '../pages/RegistrationPage';

Enzyme.configure({adapter:new EnzymeAdapter() });

let store={}

test('render Registration Component without error',()=>{
    const wrapper = shallow(<RegistrationPage store={store}/>);
    const val="component-registration";
    const registrationComp = wrapper.find(`[data-test="${val}"]`);
    expect(registrationComp.length).toBe(1);
});









