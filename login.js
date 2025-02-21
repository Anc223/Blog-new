import React, { useEffect, useState } from 'react';
import './login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Login() {
  const [name,setName]=useState({email:'', password:''});
  const [data,setData]=useState({})

  const [msg,setMsg]=useState("");
  

  function change(e){
    setName ({...name,[e.target.name]: e.target.value});
  }

    axios.get(`http://localhost:4000/adduser`)
    .then((res)=>{
        setData(res.data)
        
    })
    .catch((err)=>{
        console.log(err);
        
    })

  const submit=(e)=>{
    setMsg("Login successfully!")
    e.preventDefault()
    console.log(name)
  }

  return (
    <div className='lgn-bd'>
      <div className='lgn-con'>
      <form onSubmit={submit}>
            <div className='lgn-header'>LOGIN</div>
            <div className='lgn-email'>
                <input type='textbox' placeholder='email' size={30} onChange={change} name='email' required></input><br /><br /></div>
            <div className='lgn-pswd'>
                <input type='password' placeholder='password' size={30} onChange={change} name='password' required></input><br /><br /></div>
                <button className='lgn-bt' onClick={submit}>LOGIN</button>< Link to={'/signup'}><a className='sgnup-lnk'>SIGNUP</a></Link>
                {msg && <p style={{color:"green"}}>{msg}</p>}
            </form>
        </div>
        </div>
  )
}
