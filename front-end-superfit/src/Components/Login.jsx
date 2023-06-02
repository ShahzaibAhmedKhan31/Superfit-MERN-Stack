import React, {useState} from "react";
import logo from '../Images/form_logo.png';

var Goal,Type,Mealid,BM_1,BR_1,BM_2,BR_2,LM_1,LR_1,LM_2,LR_2,DM_1,DR_1,DM_2,DR_2;

export const Login = (props)=>{
    const [email,setEmail] = useState('');
    const [password, setPass] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);

        fetch("http://localhost:3000/auth/login",{
            method: "POST",
            crossDomain:true,
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
                email,
                password
            }),
        }).then((res) => res.json()).then((data)=>{
            if(data.accessToken != null){
                //  console.log(data,"UserRegistered");
                  alert("Successfully Logged in!");
                  FetchUserid(data.accessToken);
                  localStorage.setItem('token', data.accessToken);
                  if(email === "shahzaib@gmail.com" && password === "Insane001"){
                    localStorage.setItem("user", "admin");
                    window.location.assign("/admin");
                  }
                  else{
                  localStorage.setItem("user", "local");
                  window.location.assign("/home");
                  }
                  }
            else{
                    alert(JSON.stringify(data))
                    window.location.assign("/");
                }
            });
    }

    const FetchUserid = (token) => {
         fetch("http://localhost:3000",{
            method: "GET",
            crossDomain:true,
            headers:{
                 Accept: "application/json",
                "Authorization" : `Bearer ${token}`
            }}).then((res)=> res.json()).then((data)=> { 
                localStorage.setItem("user-id", data._id);
                localStorage.setItem("name", data.fullname);
                localStorage.setItem("email", data.email);
        })
}

     /*
     async function Getdata() {
        let url = "http://localhost:3000/auth/user-response/";
        url = url.concat(User_id);
        const res =  await fetch(url)
        let obj =  await res.json();
        console.log(obj);
        Goal = obj[0].User_response_str[2];
        Type = obj[0].User_response_str[3];
        localStorage.setItem("mealid", obj[0].User_mealplan_id);
        console.log(Goal);
        console.log(Type);
     }

     function getMealData() {
        let Url = "http://localhost:3000/auth/mealplan/";
        let urlconcat = window.localStorage.getItem('mealid');
        Url = Url.concat(urlconcat);

        const res = fetch(Url)
        let obj =   res.json();
        BM_1 = obj[0].Meal_Breakfast[0];
        BR_1 = obj[0].Meal_Breakfast[2];
        BM_2 = obj[0].Meal_Breakfast[1];
        BR_2 = obj[0].Meal_Breakfast[3];

        LM_1 = obj[0].Meal_Lunch[0];
        LR_1 = obj[0].Meal_Lunch[2];
        LM_2 = obj[0].Meal_Lunch[1];
        LR_2 = obj[0].Meal_Lunch[3];

        DM_1 = obj[0].Meal_Dinner[0];
        DR_1 = obj[0].Meal_Dinner[2];
        DM_2 = obj[0].Meal_Dinner[1];
        DR_2 = obj[0].Meal_Dinner[3];
    }
    */

    return (
        <div className="auth-form-container">
            <img src={logo} alt="Logo" width="80" height="80" />
            <h2>Sign In</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlfor = "email">Email*</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label htmlfor = "password">Password*</label>
            <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="enter your password" id="email" name="email"/>
            <button type="submit" className="target">Sign In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}

export {Goal,Type,Mealid,BM_1,BR_1,BM_2,BR_2,LM_1,LR_1,LM_2,LR_2,DM_1,DR_1,DM_2,DR_2};