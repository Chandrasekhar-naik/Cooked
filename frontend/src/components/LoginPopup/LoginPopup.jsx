import React from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Sign up")
  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className='login-popup-inputs'>
                {currState==="Login"?<></>:<input type="text" placeholder='Your name' requried/>}<br></br>
                <input type="email" placeholder='Your Email' requried/><br></br>
                <input type="password" placeholder='password' requried/>
            </div>
            <button>{currState==="Sign up"?"Create Account":"Login"}</button>
            <div className="loginpop-condition">
                <input type="checkbox" required/>
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"?<p>Create a new account
                ?<span onClick={()=>setCurrState("Sign up")}>Click here</span></p>
                :<p>Already have an account?<span onClick={()=>setCurrState("Login")}>Login here</span></p>
            }

        </form>

    </div>
  )
}

export default LoginPopup