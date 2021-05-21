import React, { useState } from 'react'

const ApplyLoanPage = () => {

    const [loanType,setLoanType] = useState();
    const [loanAmount,setLoanAmount] = useState();
    const [loanApplyDate,setLoanApplyDate] = useState();
    const [rateOfInterest,setRateOfInterest] = useState();
    const [durationInput,setDurationInput] = useState();
    return (
        <div>
            <form>
                <label for="loan-type">Loan Type</label>
                <select name="loan-type" id="loan-type" onChange={(e)=>setLoanType(e.target.value)}>
                    <option value='educational' selected={loanType==='educational'}>Eductional</option>
                    <option value='personal' selected={loanType==='personal'}>Personal</option>
                </select>
                
                <input 
                defaultValue={loanAmount}
                type="number" placeholder="Loan Amount" required/>
                
                <label for="apply-date"></label>
                <input type="date" defaultValue={loanApplyDate} name="apply-date" id="apply-date"/>
                
                <input type="number" 
                defaultValue={rateOfInterest}
                name="rate-of-interest" 
                placeholder="Rate of Interest"  />

                <input 
                defaultValue={durationInput}
                type="number" 
                name="duration"
                 placeholder="Duration of the loan"></input>
                {
                    loanType==="education" && (
                        <div>
                            <input placeholder="Course Fee" required/>
                            <input placeholder="Course" required/>
                            <input placeholder="Father's Name" required/>
                            <input placeholder="Father's Occupation" required/>
                            <input placeholder="Father's Total Experience" required/>
                            <input placeholder="Father's Experience in Current Organisation" required/>
                            <input type="number" placeholder="Ration Card Number" required/>
                            <input type="number" placeholder="Annual Income" required/>
                        </div>
                        )
                }
                {
                     loanTypeRef.current.value==="personal" && (
                        <div>
                            <input type="number" placeholder="Annual Income" required/>  

                            <input placeholder="Current Organisation" required/>

                            <input placeholder="Designation in Current Organisation" required/>

                            <input placeholder="Father's Total Experience" required/>

                            <input placeholder="Experience in Current Organisation" required/>

                        </div>
                        )
                }
            </form>
        </div>
    )
}

export default ApplyLoanPage
