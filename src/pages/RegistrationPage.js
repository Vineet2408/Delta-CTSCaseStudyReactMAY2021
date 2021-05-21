import React, { Fragment, useState } from 'react'

const RegistrationPage = () => {

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



    let indianStates = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal"];
    let spainStates = ["Barcelona", "Madrid", "Sevilla", "Malaga", "Cadiz", "Zaragoza", "Granada", "Valencia", "Cordoba", "Girona", "Almeria", "Toledo"];
    const formHandler = (event) => {
        event.preventDefault();
    }

    const checkDate = (event) => {
        console.log(event.target.value);
    }

    let currentDate = new Date();

    return (
        <div className="container mt-5 justify-content-start">
            <form onSubmit={formHandler} className="form-group">
                {
                    <Fragment>
                        {/**1 */}
                        <label htmlFor="full-name">Name</label>
                        <input
                            className="form-control"
                            defaultValue={nameInput}
                            placeholder="Enter Your Full Name"
                            onChange={(e) => setNameInput(e.target.value)}
                            name="full-name"
                            required />

                        {/**10 */}
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            defaultValue={emailInput}
                            placeholder="Enter Your Email Address"
                            onChange={(e) => { setEmailInput(e.target.value) }}
                            name="email"
                            required />

                        {/**2 */}
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            defaultValue={usernameInput}
                            onChange={(e) => { setUsernameInput(e.target.value) }}
                            placeholder="Enter Login Name (username)"
                            required />

                        {/**3 */}
                        <label htmlFor="password">Password</label>
                        <input
                            type="text"
                            name="password"
                            className="form-control"
                            defaultValue={passwordInput}
                            onChange={(e) => setPasswordInput(e.target.value)}
                            placeholder="Enter Your Password for Login"
                            minLength="8"
                            required />

                        <div className="row">
                            <div className="col-md-4">
                                <label htmlFor="dob">Date of Birth</label>{/* 14 , date of birth DD/MM/YYYY ,  side age check for minor */}
                                <input
                                    className="form-control"
                                    name="dob"
                                    defaultValue={dob}
                                    type="date"
                                    max={currentDate}
                                    onChange={(e) => setDob(e.target.value)}
                                    onBlur={checkDate}
                                    required />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="gender">Gender</label>{/* gender 11*/}
                                <select name="gender" id="gender" onChange={(e) => setGender(e.target.value)}>
                                    <option value="female" selected={(gender === 'female')}>Female</option>
                                    <option value="male" selected={(gender === 'male')}>Male</option>
                                    <option value="other" selected={(gender === 'other')}>Other</option>
                                </select>

                            </div>
                            <div className="col-md-4">
                                <label htmlFor="marital-status">Marital Status</label>{/*marital status 12 */}
                                <select name="marital-status" id="marital-status" onChange={(e) => setMaritalStatus(e.target.value)}>
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
                            onChange={(e) => { setContactInput(e.target.value) }}
                            name="contact"
                            minLength="10"
                            placeholder="Enter Your Contact Number"
                            id="contact" required />

                    </Fragment>
                }


                {

                    <Fragment>

                        <div className="row">
                            <div className="col-md-6">
                                {/* guardian type 4 */}
                                <label htmlFor="guardian-type">Guardian Type</label>
                                <br></br>
                                <select name="guardian-type" id="guardian-type" onChange={(e) => setGuardianType(e.target.value)}>
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
                                    onChange={(e) => { setGuardianName(e.target.value) }}
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
                            onChange={(e) => setAddressInput(e.target.value)}
                            className="form-control"
                            placeholder="Enter Your Full Address with PinCode"
                            required />

                        {/**7 */}
                        <label htmlFor="citizenship"></label>
                        <input type="text"
                            name="citizenship"
                            defaultValue={citizenshipInput}
                            onChange={(e) => { setCitizenshipInput(e.target.value) }}
                            className="form-control"
                            placeholder="Enter Your Citizenship"
                            required />

                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="country-name">Country</label>
                                {/**9 */}
                                <select name="country-name" required onChange={(e) => setCountryInput(e.target.value)}>
                                    <option value="india" selected={(countryInput === 'india')}>India</option>
                                    <option value="spain" selected={(countryInput === 'spain')}>Spain</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                {/** 8  ,state dropdown based on country */}
                                <label htmlFor="states">State</label>
                                <select name="states" id="states" onChange={(e) => setCustomerState(e.target.value)}>

                                    {
                                        (countryInput === 'india') &&
                                        <Fragment>
                                            {indianStates.map((state, index) => <option key={index} value={index} selected={(customerState === state)}>{state}</option>)}
                                        </Fragment>
                                    }
                                    {
                                        (countryInput === 'spain') &&
                                        <Fragment>
                                            {spainStates.map((state, index) => <option key={index} value={index} selected={(customerState === state)}>{state}</option>)}
                                        </Fragment>
                                    }
                                </select>
                            </div>
                        </div>


                        {/**18  */}
                        <label htmlFor="citizenship-status">Citizenship Status</label>
                        <input type="text"
                            name="citizenship-status"
                            defaultValue={citizenshipStatus}
                            onChange={(e) => setCitizenshipStatus(e.target.value)}
                            className="form-control"
                            placeholder="Enter Your Citizen Status"
                            required />
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
                                    onChange={(e) => setRegistrationDate(e.target.value)}
                                    className="form-control"
                                    type="date" onBlur={checkDate}
                                    name="registration-date" required />

                            </div>
                            <div className="col-md-6">
                                <label htmlFor="account-type">Account Type</label><br></br>
                                {/** 16 , account type options=salary/savings*/}
                                <select name="account-type" id="account-type"
                                    onChange={(e) => {
                                        setAccountType(e.target.value);
                                        setDepositAmount((accountType === 'savaings') ? 5000 : 0);
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
                            onChange={(e) => setBranchName(e.target.value)}
                            className="form-control"
                            placeholder="Enter Your Branch Name" required />

                        {/**19 */}{/**set it according to account type */}
                        <label htmlFor="initial-deposit">Initial Deposit</label>
                        <input
                            type="number"
                            name="initial-deposit"
                            defaultValue={depositAmount}
                            onChange={(e)=>setDepositAmount(e.target.value)}
                            className="form-control"
                            placeholder="Enter Your Initial Deposit Amount"
                            required />

                        {/**20 */}
                        <label htmlFor="identification-proof-type">Identification Proof Type</label>
                        <input
                            type="text"
                            name="identification-proof-type"
                            default={identificationProofType}
                            onChange={(e)=>setIdentificationProofType(e.target.value)}
                            className="form-control"
                            placeholder="Enter Your Identification Proof Type"
                            required />


                        {/**21 */}
                        <label htmlFor="identification-document-no">Identification Document No </label>
                        <input
                            default={identificationDocumentNo}
                            onChange={(e)=>setIdentificationDocumentNo(e.target.value)}
                            className="form-control"
                            type="text" 
                            placeholder="Identification Document No."
                            name="identification-document-no"> 
                            </input>

                        <label htmlFor="reference-acc-holder-name">Reference Account Holder Name</label>
                        <input
                            default={referenceAccHolderName}
                            onChange={(e)=>setReferenceAccHolderName(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Enter Reference account holder name"
                            name="reference-acc-holder-name" required />

                        <label htmlFor="reference-acc-no">Reference Account Holder Account Number</label>
                        <input
                            default={referenceAccNumber}
                            onChange={(e)=>setReferenceAccNumber(e.target.value)}
                            className="form-control"
                            type="number"
                            placeholder="Enter Reference account holder acc. No."
                            name="reference-acc-no" required />

                        <label htmlFor="reference-acc-address">Reference Account Holder Address</label>
                        <input
                            default={referenceAccHolderAddress}
                            onChange={(e)=>setReferenceAccHolderAddress(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Enter Reference account holder address"
                            name="reference-acc-address" required />
                    </Fragment>
                }
                <div className="row">
                    <div className="col-12"><button className="btn btn-success"> Submit</button></div>
                </div>
            </form>


        </div>
    )
}

export default RegistrationPage;
