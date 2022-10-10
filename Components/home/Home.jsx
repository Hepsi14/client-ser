import React from 'react'
import {useNavigate} from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate()
const Register=()=>{
  alert("dkjjhfjk")
  navigate('/user/register')
}
const Login=()=>{
  navigate("/user/login")
}
  return (
    <div>
      {/* <Nav /><br /> */}
      <button onClick={Register} >Register</button>
      <button onClick={Login} >Login</button>
    </div>
  )
}

export default Home