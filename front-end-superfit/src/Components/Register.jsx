import React, { useState } from "react";
import logo from '../Images/form_logo.png';
import { createSearchParams,useNavigate } from "react-router-dom";

export const Register = (props)=>{
    let navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password, setPass] = useState('');
    const [fullname,setName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
        fetch("http://localhost:3000/auth/register",{
            method: "POST",
            crossDomain:true,
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
                fullname,
                email,
                password
            }),
        }).then((res) => res.json()).then((data)=>{
            if(data.accessToken != null){
        
            alert("Successfully Registered");
            localStorage.setItem('token', data.accessToken);
            localStorage.setItem("user", "local");
            window.location.assign("/getstarted");
            }
            else{
                alert(JSON.stringify(data))
                navigate("/");
            }
        });

    }
    
    return (
        <div className="auth-form-container">
            <img src={logo} alt="Logo" width="80" height="80" />
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlfor = "name">Full name*</label>
            <input value={fullname} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="enter your full name" />
            <label htmlfor = "email">Email*</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label htmlfor = "password">Password*</label>
            <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="enter your password" id="password" name="password"/>
            <button type="submit" className="target">Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Sign In here.</button>
        </div>
        )
    }