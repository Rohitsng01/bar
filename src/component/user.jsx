import React, { useState } from 'react'
import Axios from 'axios'

function User() {
  const [efs,setFs] = useState("")
  const [els,setLs] = useState("")
  const [mbn,setMbn] = useState("")
  const [email,setEmail] = useState("")
  const [pas,setpas] = useState("")
  const [cps,setcps] = useState("")

  const register = () => {
      Axios.post("http://localhost:3001/User", {
        efs:efs,
        els:els,
        mbn:mbn,
        emial:email,
        pas:pas,
        cps:cps,
      });
  }
  return (
    <div className='user'>
    <div className='a'>
      <div>
      <h1> <span> Register </span> Your Account</h1> </div>
      
      <div className='b'>
        <label onChange={(event) => {setFs(event.target.value)}}>Enter  First Name &nbsp;
        <input type='text'/></label>
        <label onChange={(event) => {setLs(event.target.value)}}>Enter  Last Name &nbsp;
        <input type='text'/> </label>
        <label onChange={(event) => {setMbn(event.target.value)}}>Enter Mobile Number &nbsp; 
        <input type='number' maxLength={10} /> </label>
        <label> Send OTP &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        <input type='number' maxLength={6} /></label>  
        <label onChange={(event) => {setEmail(event.target.value)}} >Enter  Email &nbsp;
        <input type='email' /></label>
        <label onChange={(event) => {setpas(event.target.value)}}>Enter password &nbsp;
        <input type='password'/></label>
        <label onChange={(event) => {setcps(event.target.value)}}>Confirm Your Password &nbsp;
        <input type='text'/></label>
        
        <div><button type='submit' onClick={register}>Register</button></div>
      </div>

    </div>
    </div>
  )
}

export default User;