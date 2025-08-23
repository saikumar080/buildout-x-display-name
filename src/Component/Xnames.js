import React, { useState } from "react";
const Xnames=()=>{
    const [firstName, setFirstName]=useState("");
    const[lastName, setLastName]=useState("");

    
        const handleOnChangeFirstName=(e)=>{
            setFirstName(e.target.value);
        }
        const handleOnChangeLastName=(e)=>{
            setLastName(e.target.value);
        }
        const handleSubmit=(e)=>{
            e.preventDefault();
            setFirstName("");
            setLastName("");
        }

    return(
        <>
        <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", border:"1px solid grey", padding:20, borderRadius:10, boxShadow:"0 0 10px rgba(0,0,0,0.1)"}}>
            <h1 style={{color:" grey" , fontWeight:"bold"}}> Full Name Display</h1>
            <span>First Name: </span>
            <input type="text"  value={firstName} onChange={handleOnChangeFirstName} />
            <br />
            <br />
            <span>Last Name:</span>
            <input type="text" value={lastName} onChange={handleOnChangeLastName} />
            <br />
            <button style={{cursor:"pointer"}}  type={"submit"}>submit</button>
        </form>
       {}
        </>
    )
}
export default Xnames;