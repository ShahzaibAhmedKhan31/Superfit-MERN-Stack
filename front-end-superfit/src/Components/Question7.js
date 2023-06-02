import React from "react";
import '../Questionair.css';
import { useNavigate } from "react-router-dom";
import {Total_Average_calories} from "../Algorithm/Average_calories";
import {Goal_cal} from "../Algorithm/Goal_calories";
import  {Send_mealid}  from "../Algorithm/MealPlan_id";

 function Question7() {
    var preference = "Anything"
    let navigate = useNavigate();
    const userid=window.localStorage.getItem('user-id');
    const weight=window.localStorage.getItem('weight');
    const height=window.localStorage.getItem('height');
    const age=window.localStorage.getItem('age');
    const gender=window.localStorage.getItem('gender');
    const activity=window.localStorage.getItem('activity');
    const goal=window.localStorage.getItem('goal');

   async function getInputValue(value){
        preference = value

       let calories_Consume_Avg = Total_Average_calories(weight,height,age,gender,activity);
       let goal_Calories = Goal_cal(goal,calories_Consume_Avg);

       if (goal_Calories < 1500 || goal_Calories > 3800) {
        alert("Sorry, we do not have Mealplan for this, we would recommend you to choose a different goal")
       }
       else {
        Send_mealid(goal_Calories, preference);
        await Async();

        const mealid=window.localStorage.getItem('mealid');

        fetch("http://localhost:3000/auth/user-response",{
                    method: "POST",
                    crossDomain:true,
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        User_id: userid,
                        User_response_num: [weight, height, age],
                        User_response_str: [gender, activity, goal, preference],
                        User_mealplan_id: mealid
                    }),
                }).then((res) => res.json()).then((data)=>{
                    alert("Thankyou for answering all the questons, get ready for your perfect Meal Plan");
                    navigate("/home");
                });        
            }          
        }

        function Async(){
            return new Promise((res)=>{
            setTimeout(()=>{
            res();} , 100);});
            }



    
    return(      
        <div className="Question">
            <div className="Box">
                <div className="heading">
                    <p>Choose your preference when it comes to food?</p>
                </div>
                <div className="Question-buttons m-2">
                    <button className="Questions" value="Anything" id="1" onClick={e => getInputValue(e.target.value)}>Anything</button>
                    <button className="Questions" value="Vegetarian" id="2" onClick={e => getInputValue(e.target.value)}>Vegetarian</button>
                </div>
            </div>
        </div>
        
    )
}

export default Question7;