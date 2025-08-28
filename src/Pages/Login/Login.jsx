import React, { useState } from 'react'
import './Login.css'
function Login() {
  const [currentState,setcurrentState] =useState('Login')
  const onSubmitHandler =async(event)=>{
event.preventDefault()
  }
  return (
  <form onSubmit={onSubmitHandler} className='form-1'>
<div className='div-1'>
<p className='p-1'>{currentState}</p>
<hr />
</div>
{currentState === 'Login' ?'':<input type="text" placeholder="Name" className="input-1"required />}
<input type="email" placeholder="Email" className="input-2" required/>
<input type="Password" placeholder="Password" className="input-3" required/>
<div className='div-2 '>
<p className='p-2'>FORGOT YOUR PASSWORD</p>
{
  currentState === 'Login'?
  <p className='cursor-pointer' onClick={()=>setcurrentState('SIgn Up')}>CREATE ACCOUNT</p>:
  <p className='cursor-pointer' onClick={()=>setcurrentState('Login')}>LOGIN HERE</p>
}
</div>
<button className='bt-3'>{currentState === 'Login' ?'Sign IN':'Sign Up'}</button>
  </form>
  )
}

export default Login
