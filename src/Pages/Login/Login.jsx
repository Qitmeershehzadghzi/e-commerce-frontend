import React, { useContext, useEffect, useState } from 'react'
import './Login.css'
import { ShopContext } from '../../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'
function Login() {
  const [currentState,setcurrentState] =useState('Login')
  const {navigate,token,settoken,backendUrl}=useContext(ShopContext)
  const[name,setname]=useState('')
  const[password,setpassword]=useState('')
  const[email,setemail]=useState('')
const onSubmitHandler = async (event) => {
  event.preventDefault();
try{
if (currentState === 'Sign up') {
  const response = await axios.post(backendUrl + '/user/register', { name, email, password });
  console.log(response.data);

  if (response.data.success) {
    settoken(response.data.token);
    localStorage.setItem('token',response.data.token);
  } else {
    toast.error(response.data.msg || "User already exists");
  }
} else {
  const response = await axios.post(backendUrl + '/user/login', { email, password });
  console.log(response.data);

if (response.data.success) {
  const receivedToken = response.data.token || response.data.Token;
  settoken(receivedToken);
  localStorage.setItem('token', receivedToken);
}


 else {
  toast.error(response.data.message || response.data.msg);
}
}

  } catch (error) {
    console.error(error);
    toast.error(error.response?.data?.message || error.message);
  }
};
  useEffect(()=>{
if (token) {
  navigate('/')
}
  },[token])


  return (
  <form onSubmit={onSubmitHandler} className='form-1'>
<div className='div-1'>
<p className='p-1'>{currentState}</p>
<hr />
</div>
{currentState === 'Login' ?'':<input onChange={(e)=>setname(e.target.value)} value={name} type="text" placeholder="Name" className="input-1"required />}
<input onChange={(e)=>setemail(e.target.value)} value={email}  type="email" placeholder="Email" className="input-2" required/>
<input onChange={(e)=>setpassword(e.target.value)}  value={password} type="Password" placeholder="Password" className="input-3" required/>
<div className='div-2 '>
<p className='p-2'>FORGOT YOUR PASSWORD</p>
{
  currentState === 'Login'?
  <p className='cursor-pointer' onClick={()=>setcurrentState('Sign up')}>CREATE ACCOUNT</p>:
  <p className='cursor-pointer' onClick={()=>setcurrentState('Login')}>LOGIN HERE</p>
}
</div>
<button className='bt-3'>{currentState === 'Login' ?'Login':'Sign Up'}</button>
  </form>
  )
}

export default Login
