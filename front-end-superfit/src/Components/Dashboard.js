import React, { useState } from "react";
import { useEffect } from "react";
import '../Dashboard.css';
import {Goal,mealPreference} from "./Home";
import MenuAppBar from './Navbar';

function Dashboard() {
    //const web_token=window.localStorage.getItem('token');
    const [Tcalories,setTcalories]= useState("");
    
    const [BM_1,setBM_1]= useState("");
    const [BR_1,setBR_1]= useState("");
    const [BM_2,setBM_2]= useState("");
    const [BR_2,setBR_2]= useState("");

    const [LM_1,setLM_1]= useState("");
    const [LR_1,setLR_1]= useState("");
    const [LM_2,setLM_2]= useState("");
    const [LR_2,setLR_2]= useState("");

    const [DM_1,setDM_1]= useState("");
    const [DR_1,setDR_1]= useState("");
    const [DM_2,setDM_2]= useState("");
    const [DR_2,setDR_2]= useState("");

  useEffect(() => {

    const Get_user_mealplan = async () => {
        let Url = "http://localhost:3000/auth/mealplan/";
        let meailid = window.localStorage.getItem('mealid');
        let Url_final = Url.concat(meailid);
    
       await fetch(Url_final,{
            method: "GET",
            crossDomain:true,
            headers:{
                "Content-Type": "application/json"
            }
        }).then((res) => res.json()).then(data => {
            
            setBM_1(data.mealplan_data_By_id.Meal_Breakfast[0]);
            setBR_1(data.mealplan_data_By_id.Meal_Breakfast[2]);
            setBM_2(data.mealplan_data_By_id.Meal_Breakfast[1]);
            setBR_2(data.mealplan_data_By_id.Meal_Breakfast[3]);

            setLM_1(data.mealplan_data_By_id.Meal_Lunch[0]);
            setLR_1(data.mealplan_data_By_id.Meal_Lunch[2]);
            setLM_2(data.mealplan_data_By_id.Meal_Lunch[1]);
            setLR_2(data.mealplan_data_By_id.Meal_Lunch[3]);

            setDM_1(data.mealplan_data_By_id.Meal_Dinner[0]);
            setDR_1(data.mealplan_data_By_id.Meal_Dinner[2]);
            setDM_2(data.mealplan_data_By_id.Meal_Dinner[1]);
            setDR_2(data.mealplan_data_By_id.Meal_Dinner[3]);

            setTcalories(data.mealplan_data_By_id.Meal_Calories);

            console.log(data.mealplan_data_By_id.Meal_Calories);

        })
    }
    Get_user_mealplan();
    },[])


function Color(){
        const arr = localStorage.getItem('color');
        const myArr = arr.split(",")
        const listItems = myArr.map((color) =>
  <input type="radio" style={{accentColor:`${color}`, outline:`1px solid ${color}`, marginRight:"10px"}} name="topping" value={color} id="colorSelect" onClick={()=>{ console.log(color)}} />
  );
  return (
    <div>
    <h3 style={{marginLeft:"30px"}}>Color: </h3>
    <ul>{listItems}</ul>
    </div>
  );
}


    return(
        <div>
        <MenuAppBar />
        <div className="Dashboard">
            <div className="Box-form">
                <div className="Heading">
                <h1>Meal Plan</h1>
                </div>
                <div className="Heading-divider"></div>
                <div className="Content">
                    <div className="My-plan">
                        <h2>My Goal: <span>{Goal}</span></h2>
                        <h2>My Meal Preference: <span>{mealPreference}</span></h2>
                        <h2>Time Duration: <span> 3 months</span></h2>
                    </div>
                    <div className="Meal-buttons">
                        <button id="1" onClick={e => replace(e.target.id)} style={{backgroundColor:"rgba(237, 66, 66, 0.8)"}}>BreakFast</button>
                        <button id="2"  onClick={e => replace(e.target.id)}>Lunch</button>
                        <button id="3"  onClick={e => replace(e.target.id)}>Dinner</button>
                    </div>
                    <div className="Divider"></div>
                    <div className="Meal-plan" id="Breakfast">
                        <h4>Meal 1:</h4>
                        <p>{BM_1}</p>
                        <h4>Recipe 1:</h4>
                        <p>{BR_1}</p>
                        <h4>Meal 2:</h4>
                        <p>{BM_2}</p>
                        <h4>Recipe 2:</h4>
                        <p>{BR_2}</p>
                    </div>
                    <div className="Meal-plan" id="Lunch" style={{display:"none"}}>
                        <h4>Meal 1:</h4>
                        <p>{LM_1}</p>
                        <h4>Recipe 1:</h4>
                        <p>{LR_1}</p>
                        <h4>Meal 2:</h4>
                        <p>{LM_2}</p>
                        <h4>Recipe 2:</h4>
                        <p>{LR_2}</p>
                    </div>
                    <div className="Meal-plan" id="Dinner" style={{display:"none"}}>
                        <h4>Meal 1:</h4>
                        <p>{DM_1}</p>
                        <h4>Recipe 1:</h4>
                        <p>{DR_1}</p>
                        <h4>Meal 2:</h4>
                        <p>{DM_2}</p>
                        <h4>Recipe 2:</h4>
                        <p>{DR_2}</p>
                    </div>
              </div>
            </div>
        </div>
        <div>
        {<Color />}
        </div>
        </div>
    )

    function replace(id) {
        if(id === "1") {
            document.getElementById("Breakfast").style.display="block";
            document.getElementById("Lunch").style.display="none";
            document.getElementById("Dinner").style.display="none";
            document.getElementById("1").style.backgroundColor="rgba(237, 66, 66, 0.8)";
            document.getElementById("2").style.backgroundColor="rgb(177, 205, 215)";
            document.getElementById("3").style.backgroundColor="rgb(177, 205, 215)";
        }
        else if(id === "2") {
            document.getElementById("Breakfast").style.display="none";
            document.getElementById("Lunch").style.display="block";
            document.getElementById("Dinner").style.display="none";
            document.getElementById("1").style.backgroundColor="rgb(177, 205, 215)";
            document.getElementById("2").style.backgroundColor="rgba(237, 66, 66, 0.8)";
            document.getElementById("3").style.backgroundColor="rgb(177, 205, 215)";

        }
        else if(id === "3") {
            document.getElementById("Breakfast").style.display="none";
            document.getElementById("Lunch").style.display="none";
            document.getElementById("Dinner").style.display="block";
            document.getElementById("1").style.backgroundColor="rgb(177, 205, 215)";
            document.getElementById("2").style.backgroundColor="rgb(177, 205, 215)";
            document.getElementById("3").style.backgroundColor="rgba(237, 66, 66, 0.8)";

        }
    }
    
 /*   function Async(){
        return new Promise((res)=>{
        setTimeout(()=>{
        res();} , 300);});
    }
    */
}
export default Dashboard;
