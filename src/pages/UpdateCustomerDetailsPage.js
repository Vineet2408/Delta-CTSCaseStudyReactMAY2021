import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateUser } from '../store/services/userService';

const UpdateCustomerDetailsPage = (props) => {

    const history = useHistory();

    const [nameInput, setNameInput] = useState();
    const [emailInput, setEmailInput] = useState();
    const [usernameInput, setUsernameInput] = useState();
    const [passwordInput, setPasswordInput] = useState();
    const [countryInput, setCountryInput] = useState();
    const [accountType, setAccountType] = useState();
    const [gender, setGender] = useState();
    const [dob, setDob] = useState();
    const [maritalStatus, setMaritalStatus] = useState();
    const [contactInput, setContactInput] = useState(0)
    const [guardianType, setGuardianType] = useState();
    const [guardianName, setGuardianName] = useState();
    const [customerState, setCustomerState] = useState();
    const [addressInput, setAddressInput] = useState()
    const [branchNameInput, setBranchName] = useState()
    const [citizenshipInput, setCitizenshipInput] = useState()
    const [citizenshipStatus, setCitizenshipStatus] = useState()
    const [referenceAccHolderAddress, setReferenceAccHolderAddress] = useState()
    const [referenceAccNumber, setReferenceAccNumber] = useState()
    const [referenceAccHolderName, setReferenceAccHolderName] = useState()
    const [identificationDocumentNo, setIdentificationDocumentNo] = useState()
    const [identificationProofType, setIdentificationProofType] = useState()
    const [depositAmount, setDepositAmount] = useState(0);
    const [registrationDate, setRegistrationDate] = useState(new Date());
    const [ageInput, setAgeInput] = useState();
    const [regId, setRegId] = useState();

    useEffect(async () => {

        let arr = props.state.users.users;

        let regIdCurr;

        if (props.state.users.loggedInUser)
            for (let i = 0; i < props.state.users.users.length; i++) {
                if (arr[i].email === props.state.users.loggedInUser.email) {

                    regIdCurr = arr[i].regId;
                    await setRegId(regIdCurr);
                }
            }

    }, []);

    let indianStates = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal"];
    let spainStates = ["Barcelona", "Madrid", "Sevilla", "Malaga", "Cadiz", "Zaragoza", "Granada", "Valencia", "Cordoba", "Girona", "Almeria", "Toledo"];


    const formHandler = async (event) => {
        event.preventDefault();
        let nameRegex = /^[a-zA-Z\s]*$/;
        if (nameInput.trim() === '' || !nameRegex.test(nameInput)) {
            document.getElementById("nameWarning").style.display = "block";
            document.getElementById("nameWarning").innerHTML = "Incorrect name!!! It should only contain letters and spaces";
            return;
        }
        else {
            document.getElementById("nameWarning").style.display = "none";
        }

        if (usernameInput.trim() === '' || !nameRegex.test(usernameInput)) {
            document.getElementById("usernameWarning").style.display = "block";
            document.getElementById("usernameWarning").innerHTML = "Incorrect usernname!!! It should only contain letters and spaces";
            return;
        }
        else {
            document.getElementById("usernameWarning").style.display = "none";
        }
        let emailRegex = /^[a-zA-z0-9]+@.+\..+$/;

        if (emailInput.trim() === '' || !emailRegex.test(emailInput)) {
            document.getElementById("emailWarning").style.display = "block";
            document.getElementById("emailWarning").innerHTML = "Incorrect email !!!";
            return;
        }
        else {
            document.getElementById("emailWarning").style.display = "none";
        }
        if (contactInput.trim().length !== 10) {
            document.getElementById("contactWarning").style.display = "block";
            document.getElementById("contactWarning").innerHTML = contactInput.trim().length + " Incorrect contact !!! Length must be exact 10";
            return;
        }
        else {
            document.getElementById("contactWarning").style.display = "none";
        }

        let idDocNumRegex = /^[a-zA-Z0-9]*$/;

        if (identificationDocumentNo.trim().length !== 12 || !idDocNumRegex.test(identificationDocumentNo)) {
            document.getElementById("documentNumber").style.display = "block";
            document.getElementById("documentNumber").innerHTML = "Invalid Document Number !!! It should only contain letters and digits";
            return;
        }
        else {
            document.getElementById("documentNumber").style.display = "none";
        }

        if (ageInput < 18 || ageInput > 96) {
            document.getElementById("ageWarning").style.display = "block";
            document.getElementById("ageWarning").innerHTML = "Invalid Age  !!! It should be greater than 17 and less than 96";
            return;
        }
        else {
            document.getElementById("ageWarning").style.display = "none";
        }

        if (ageInput < 18) {
            await setCitizenshipStatus("Minor");
        }
        if (ageInput <= 60 && ageInput > 18) {
            await setCitizenshipStatus("Normal");
        }
        if (ageInput > 60) {
            await setCitizenshipStatus("Senior");
        }

        let customer = {
            fullName: nameInput,
            email: emailInput,
            username: usernameInput,
            password: passwordInput,
            dob: dob,
            age: ageInput,
            gender: gender,
            maritalStatus: maritalStatus,
            contact: contactInput,
            guardianType: guardianType,
            guardianName: guardianName,
            address: addressInput,
            citizenship: citizenshipInput,
            country: countryInput,
            state: customerState,
            citizenshipStatus: citizenshipStatus,
            registrationDate: registrationDate,
            accountType: accountType,
            branchName: branchNameInput,
            depositAmount: depositAmount,
            identificationProofType: identificationProofType,
            identificationDocumentNo: identificationDocumentNo,
            referenceAccHolderName: referenceAccHolderName,
            referenceAccNumber: referenceAccNumber,
            referenceAccHolderAddress: referenceAccHolderAddress,
            regId: regId

        }

        console.log(customer);
        let userId;
        let arr = props.state.users.users;
        let accountNo;

        for (let i = 0; i < props.state.users.users.length; i++) {
            if (arr[i].email === props.state.users.loggedInUser.email) {
                userId = arr[i].id;
                accountNo = arr[i].accountNo;
            }
        }
        customer.accountNo = accountNo;
        console.log(userId);
        let token = props.state.users.token;
        await props.dispatch(updateUser(customer, userId, token));
        history.push('/profile');
    }

    const checkDate = (e) => {
        console.log(e.target.value);

        let curr = new Date();
        curr.setDate(curr.getDate() + 1);
        let date = curr.toISOString().substr(0, 10);
        console.log(new Date(e.target.value).getTime(), " ", new Date(date).getTime());
        console.log('diff = ', new Date(e.target.value) - new Date(date).getTime())
        if (new Date(e.target.value) - new Date(date).getTime() > 0) {
            document.getElementById("ageWarning").style.display = "block";
            document.getElementById("ageWarning").style.background = "yellow";
            document.getElementById("ageWarning").innerHTML = "Date is Not correct";
            document.getElementById("submitBtn").disabled = true;
        }
        else {
            document.getElementById("ageWarning").style.display = "none";
            document.getElementById("submitBtn").disabled = false;
        }


    }

    let currentDate = new Date();

    if (!props.state.users.loggedInUser) {
        return <div className="container bg-dark text-white">
            <div className="row">
                <h1>Login to Update</h1>
            </div>
        </div>
    }

    return (
        <div className="container mt-5">

            <form onSubmit={formHandler} className="form-group mt-5">
                {
                    <Fragment>

                        <br></br>
                        <p>Current Id  : {regId}</p>
                        <br></br>
                        <label htmlFor="customerId">Customer Id</label>
                        <input
                            className="form-control"
                            type="text"
                            defaultValue={regId}
                            placeholder="Enter New Customer Id"
                            onChange={async (e) => { await setRegId(e.target.value) }}
                            name="customerId"
                            required></input>
                        <br></br>
                        {/**1 */}
                        <label htmlFor="full-name">Name</label>
                        <input
                            className="form-control"
                            defaultValue={nameInput}
                            placeholder="Enter Your Full Name"
                            onChange={async (e) => { await setNameInput(e.target.value) }}
                            name="fullName"

                            required />
                        <p className="text-danger" id="nameWarning"></p>
                        {/**10 */}
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            defaultValue={emailInput}
                            placeholder="Enter Your Email Address"
                            onChange={async (e) => { await setEmailInput(e.target.value) }}
                            name="email"
                            required />
                        <p className="text-danger" id="emailWarning"></p>
                        {/**2 */}
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            defaultValue={usernameInput}
                            onChange={async (e) => { await setUsernameInput(e.target.value) }}
                            placeholder="Enter Login Name (username)"
                            required />
                        <p className="text-danger" id="usernameWarning"></p>
                        {/**3 */}
                        <label htmlFor="password">Password</label>
                        <input
                            type="text"
                            name="password"
                            className="form-control"
                            defaultValue={passwordInput}
                            onChange={async (e) => { await setPasswordInput(e.target.value) }}
                            placeholder="Enter Your Password for Login"
                            minLength="8"
                            required />
                        <p className="text-danger" id="passwordWarning"></p>

                        <div className="row">
                            <div className="col-md-4">
                                <label htmlFor="dob">Date of Birth</label>{/* 14 , date of birth DD/MM/YYYY ,  side age check for minor */}
                                <input
                                    className="form-control"
                                    name="dob"
                                    defaultValue={dob}
                                    type="date"

                                    onChange={async (e) => {
                                        await setDob(e.target.value);
                                        let diff = Date.now() - new Date(e.target.value).getTime();
                                        let ageDiff = new Date(diff);
                                        let yearAge = ageDiff.getUTCFullYear();
                                        let age = Math.abs(yearAge - 1970);
                                        await setAgeInput(age);
                                        if (age < 18) {
                                            await setCitizenshipStatus("Minor");
                                        }
                                        if (age > 18 && age <= 60) {
                                            await setCitizenshipStatus("Normal");
                                        }
                                        if (age > 60) {
                                            await setCitizenshipStatus("Senior");
                                        }
                                    }}
                                    onBlur={checkDate}
                                    required />
                                <p className="text-danger" id="ageWarning"></p>
                            </div>
                            <p className="text-danger" id="dobWarning"></p>
                            <div className="col-md-4">
                                <label htmlFor="gender">Gender</label>{/* gender 11*/}
                                <select name="gender" id="gender" onChange={async (e) => { await setGender(e.target.value) }}>
                                    <option value="female" selected={(gender === 'female')}>Female</option>
                                    <option value="male" selected={(gender === 'male')}>Male</option>
                                    <option value="other" selected={(gender === 'other')}>Other</option>
                                </select>

                            </div>
                            <div className="col-md-4">
                                <label htmlFor="marital-status">Marital Status</label>{/*marital status 12 */}
                                <select name="marital-status" id="marital-status" onChange={async (e) => { await setMaritalStatus(e.target.value) }}>
                                    <option value="single" selected={(maritalStatus === 'single')}>Single</option>
                                    <option value="married" selected={(maritalStatus === 'married')}>Married</option>
                                    <option value="divorce" selected={(maritalStatus === 'divorce')}>Divorce</option>
                                </select>
                            </div>
                        </div>

                        {/**13 */}
                        <label htmlFor="contact">Contact</label>
                        <input
                            type="number"
                            className="form-control"
                            defaultValue={contactInput}
                            onChange={async (e) => { await setContactInput(e.target.value) }}
                            name="contact"
                            minLength="10"
                            placeholder="Enter Your Contact Number"
                            id="contact" required />
                        <p className="text-danger" id="contactWarning"></p>
                    </Fragment>
                }


                {
                    <Fragment>

                        <div className="row">
                            <div className="col-md-6">
                                {/* guardian type 4 */}
                                <label htmlFor="guardian-type">Guardian Type</label>
                                <br></br>
                                <select name="guardian-type" id="guardian-type"
                                    onChange={async (e) => { await setGuardianType(e.target.value) }}>
                                    <option value="local" selected={(guardianType === 'local')}>Option 1</option>
                                    <option value="parental" selected={(guardianType === 'parental')}>Option 2</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                {/**5 */}
                                <label htmlFor="guardian-name">Guardian Name</label>
                                <input type="text"
                                    name="guardian-name"
                                    defaultValue={guardianName}
                                    onChange={async (e) => { await setGuardianName(e.target.value) }}
                                    className="form-control"
                                    placeholder="Enter Your Guardian Name"
                                    required />
                            </div>
                        </div>

                        {/**6 */}
                        <label htmlFor="address">Address</label>
                        <input type="text"
                            name="address"
                            defaultValue={addressInput}
                            onChange={async (e) => { await setAddressInput(e.target.value) }}
                            className="form-control"
                            placeholder="Enter Your Full Address with PinCode"
                            required />

                        {/**7 */}
                        <label htmlFor="citizenship"></label>
                        <input
                            type="text"
                            name="citizenship"
                            defaultValue={citizenshipInput}
                            onChange={async (e) => { await setCitizenshipInput(e.target.value) }}
                            className="form-control"
                            placeholder="Enter Your Citizenship"
                            required />

                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="country-name">Country</label>
                                {/**9 */}
                                <select name="country-name" required onChange={async (e) => { await setCountryInput(e.target.value) }}>
                                    <option value="india" selected={(countryInput === 'india')}>India</option>
                                    <option value="spain" selected={(countryInput === 'spain')}>Spain</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                {/** 8  ,state dropdown based on country */}
                                <label htmlFor="states">State</label>
                                <select name="states" id="states" onChange={async (e) => { await setCustomerState(e.target.value) }}>

                                    {
                                        (countryInput === 'india') &&
                                        <Fragment>
                                            {indianStates.map((state, index) => <option key={index} value={index}
                                                selected={(customerState === state)}>{state}</option>)}
                                        </Fragment>
                                    }
                                    {
                                        (countryInput === 'spain') &&
                                        <Fragment>
                                            {spainStates.map((state, index) => <option key={index} value={index}
                                                selected={(customerState === state)}>{state}</option>)}
                                        </Fragment>
                                    }
                                </select>
                            </div>
                        </div>



                    </Fragment>
                }

                {
                    <Fragment>
                        <div className="row">
                            <div className="col-md-6">

                                {/* 15 Registration Date- Represents the customer registration Date 
                         which is automatically populated from the system current date  */}
                                <label htmlFor="registration-date">Registration Date</label>
                                <input
                                    defaultValue={registrationDate}
                                    onChange={async (e) => {
                                        let curr = new Date();
                                        curr.setDate(curr.getDate() + 0);
                                        let date = curr.toISOString().substr(0, 10);
                                        console.log(new Date(e.target.value).getTime(), " ", new Date(date).getTime());
                                        console.log('diff = ', new Date(e.target.value) - new Date(date).getTime())
                                        if (new Date(e.target.value) - new Date(date).getTime() < 0) {
                                            document.getElementById("dateWarning").style.display = "block";
                                            document.getElementById("dateWarning").style.background = "yellow";
                                            document.getElementById("dateWarning").innerHTML = "Date is Not correct";
                                            document.getElementById("submitBtn").disabled = true;
                                        }
                                        else {
                                            document.getElementById("dateWarning").style.display = "none";
                                            document.getElementById("submitBtn").disabled = false;
                                        }

                                        await setRegistrationDate(e.target.value)
                                    }
                                    }
                                    className="form-control"
                                    type="date"
                                    onBlur={checkDate}
                                    name="registration-date"
                                    required />
                                <br></br>
                                <p id="dateWarning" className="text-danger"></p>

                            </div>
                            <div className="col-md-6">
                                <label htmlFor="account-type">Account Type</label><br></br>
                                {/** 16 , account type options=salary/savings*/}
                                <select name="account-type" id="account-type"
                                    onChange={async (e) => {
                                        await setAccountType(e.target.value);
                                        if (e.target.value === 'savings') {
                                            await setDepositAmount(5000);
                                        }
                                        else {
                                            await setDepositAmount(0);
                                        }

                                    }}>

                                    <option value="savings" selected={(accountType === 'savings')}>Savings</option>
                                    <option value="salary" selected={(accountType === 'salary')}>Salary</option>
                                </select>
                            </div>
                        </div>


                        {/**17 ,  */}
                        <label htmlFor="branch-name">Branch Name</label>
                        <input
                            type="text"
                            name="branch-name"
                            default={branchNameInput}
                            onChange={async (e) =>{await setBranchName(e.target.value)}}
                            className="form-control"
                            placeholder="Enter Your Branch Name"
                            required />

                        {/**19 */}{/**set it according to account type */}


                        {/**20 */}
                        <label htmlFor="identification-proof-type">Identification Proof Type</label>
                        <input
                            type="text"
                            name="identification-proof-type"
                            defaultValue={identificationProofType}
                            onChange={async (e) =>{await setIdentificationProofType(e.target.value)}}
                            className="form-control"
                            placeholder="Enter Your Identification Proof Type"
                            required />


                        {/**21 */}
                        <label htmlFor="identification-document-no">Identification Document No </label>
                        <input
                            defaultValue={identificationDocumentNo}
                            onChange={async (e) =>{await setIdentificationDocumentNo(e.target.value)}}
                            className="form-control"
                            type="text"
                            placeholder="Identification Document No."
                            name="identification-document-no">
                        </input>
                        <p className="text-danger" id="documentNumber"></p>

                        <label htmlFor="reference-acc-holder-name">Reference Account Holder Name</label>
                        <input
                            defaultValue={referenceAccHolderName}
                            onChange={async (e) =>{ await setReferenceAccHolderName(e.target.value)}}
                            className="form-control"
                            type="text"
                            placeholder="Enter Reference account holder name"
                            name="reference-acc-holder-name" required />

                        <label htmlFor="reference-acc-no">Reference Account Holder Account Number</label>
                        <input
                            defaultValue={referenceAccNumber}
                            onChange={async (e) =>{await  setReferenceAccNumber(e.target.value)}}
                            className="form-control"
                            type="number"
                            placeholder="Enter Reference account holder acc. No."
                            name="reference-acc-no"
                            required />


                        <label htmlFor="reference-acc-address">Reference Account Holder Address</label>
                        <input
                            defaultValue={referenceAccHolderAddress}
                            onChange={async (e) =>{await setReferenceAccHolderAddress(e.target.value)}}
                            className="form-control"
                            type="text"
                            placeholder="Enter Reference account holder address"
                            name="reference-acc-address" required />
                    </Fragment>
                }
                <div className="row">
                    <div className="col-12"><button id="submitBtn" className="btn btn-success"> Submit</button></div>
                </div>
            </form>


        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

export default connect(mapStateToProps)(UpdateCustomerDetailsPage);
