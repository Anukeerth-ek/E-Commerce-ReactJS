import React from "react";
import "./signup.css";
import { useState } from "react";
import PopupLogin from "../../../Component/SucessLogin/PopupLogin";

function Signup({loginHandler, handleClick, loginChecker}) {

  

     return (
          <>
           {loginChecker && < PopupLogin/>}
               <div className="form-container" id="form-container">
                    
                    <div className="form-wrapper">
                         <h2>Login</h2>
                         <form name="submit-to-google-sheet">
                              <div className="input-container">
                                   <p>Username</p>
                                   <div className="box-img">
                                        <i class="fa-regular fa-user"></i>
                                        <input
                                             type="text"
                                             name="fname"
                                             placeholder="Type your username"
                                             className="sign-validation"
                                             onChange={handleClick}
                                             required
                                             
                                        />
                                   </div>
                                   <p>Password</p>
                                   <div className="box-img">
                                        <img
                                             width="5"
                                             height="20"
                                             src="https://img.icons8.com/ios/50/lock--v1.png"
                                             alt="lock--v1"
                                        />
                                        <input
                                             type="password"
                                             name="Password"
                                             placeholder="Type your password"
                                             id="signup-input-box"
                                             className="sign-validation"
                                            
                                             required
                                        />
                                   </div>
                              </div>
                              <p id="forgot">Forgot password?</p>
                              <div className="login-container">
                                   <button id="sign-up" onClick={loginHandler}>Login</button>
                              </div>
                              <div className="signup-header">
                                   <p>Or Sign Up Using </p>
                              </div>
                              <div className="signup-images">
                                   <img
                                        width="48"
                                        height="48"
                                        src="https://img.icons8.com/fluency/48/facebook-new.png"
                                        alt="facebook-new"
                                   />
                                   <img
                                        width="48"
                                        height="48"
                                        src="https://img.icons8.com/color/48/twitter-circled--v1.png"
                                        alt="twitter-circled--v1"
                                   />
                                   <img
                                        width="48"
                                        height="48"
                                        src="https://img.icons8.com/color/48/google-plus--v1.png"
                                        alt="google-plus--v1"
                                   />
                              </div>
                         </form>
                    </div>
               </div>
                   
          </>
     );
}

export default Signup;
