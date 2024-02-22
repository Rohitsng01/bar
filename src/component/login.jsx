import React, { useState } from 'react'
import {Link } from "react-router-dom"
import  Axios  from 'axios'

function Login() {

  const [uname ,setUname] = useState("");
const [pw,setPw] = useState("");

const createLogin = () => {
  Axios.post("http://localhost:3001/login",{
    uname:uname,
    pw:pw,
  });
}
  return (
    <div className='login'>
        <div className="user">
            <div>
                <h1> <span>Login </span> Account</h1>
            </div>
            <div className='int'>
                <label> UserName 
                <input type='text' onChange={(event) => {
                  setUname(event.target.value);
                }} placeholder='Enter Your Username'/> </label>
                <label>Enter Password 
                <input type='password' onChange={(event) =>{
                  setPw(event.target.value);
                }}  placeholder='Enter Your Password'/> </label>
            </div>
            <div className='nri'>
              <div className='bt'>  <button onClick={createLogin}>Login</button><br/></div>
                <span>Forget Your password</span><br/>
               <div className='bt1'>  <Link to={"/User"}>New User</Link> </div>
            </div>
        </div>
    </div>
  )
}

export default Login