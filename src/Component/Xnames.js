
import React, { useState } from "react";
const Xnames=()=>{
    const [firstName, setFirstName]=useState("");
    const[lastName, setLastName]=useState("");
    const[fullName, setFullName]=useState("");
    const[error, setErrors]=useState({firstName:"", lastName:""});
    
        const handleOnChangeFirstName=(e)=>{
            setFirstName(e.target.value);
            if(e.target.value.trim()){
                setErrors((prev)=>({...prev, firstName:""}));
            }
        }
        const handleOnChangeLastName=(e)=>{
            setLastName(e.target.value);
            if(e.target.value.trim()){
                setErrors((prev)=>({...prev, lastName:""}));
            }
        }
        const handleSubmit=(e)=>{
           e.preventDefault();
           let valid=true;
           let newErrors={firstName:"",lastName:""};
           const nameRegex=/^[A-Za-z\s]+$/
           if(!firstName.trim()){
            newErrors.firstName="⚠️ please fill out this field.";
            valid=false;
            
           }else if(!nameRegex.test(firstName)){
            newErrors.firstName="⚠️ Name should contain only alphabets.";
            valid=false;
           }
           if(!lastName.trim()){
            newErrors.lastName="⚠️ please fill out this field.";
            valid=false;
           }else if(!nameRegex.test(lastName)){
            newErrors.lastName="⚠️ Name should contain only alphabets.";
            valid=false;
           }
           setErrors(newErrors);
           if(valid){
            setFullName(`${firstName} ${lastName}`);
           }else{
            setFullName("");
           }
        }

    return(
        <>
        <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", border:"1px solid grey", padding:20, borderRadius:10, boxShadow:"0 0 10px rgba(0,0,0,0.1)"}}>
            <h1 style={{color:"grey" , fontWeight:"bold"}}> Full Name Display</h1>
            {/* First Name */}
            <label style={{alignSelf:"flex-start"}}>First Name: </label>
            <input 
                type="text"  
                value={firstName} 
                onChange={handleOnChangeFirstName} 
                />
                {error.firstName &&(
                    <p style={{color:"red", margin:"5px 0"}}>
                        {error.firstName}
                    </p>
                )}
            <br />
            {/* Last Name */}
            <label style={{alignSelf:"flex-start"}}>Last Name:</label>
            <input type="text" value={lastName} onChange={handleOnChangeLastName} />
            {error.lastName &&(<p style={{color:"red", margin:"5px 0"}}>{error.lastName}</p>)}
            <br />
            <button style={{cursor:"pointer"}}  type={"submit"}>submit</button>
            
       {fullName && <p style={{color:"grey", margin:"15px"}}  data-testid="full name">Full Name: {fullName}</p>}
        </form>
      
        </>
    )
}
export default Xnames;