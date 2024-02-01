
import React from 'react'
import './popupLogin.css'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
const PopupLogin = ({loginChecker}) => {
    const navigate = useNavigate()
  const navigateHomepage = ()=> {
    navigate('/')
  }
  Swal.fire({
    position: "end",
    icon: "success",
    title: "Sucessfully Login",
    showConfirmButton: false,
    timer: 2300
 
  });
  return (
    <>
    </>
//     <div className={loginChecker ? 'hide-login-content' : 'show-popup-login'}>  
//     {/* <img src='https://i.pinimg.com/736x/55/92/1d/55921d425a64280b4bc46d5556618ea9.jpg'/>
//     <h3>Login Sucessfully!!</h3> */}
//     {/* <button onClick={navigateHomepage}>Back to Explore<i class="fa-solid fa-arrow-left"></i></button> */}
// </div>
  )
}

export default PopupLogin;

