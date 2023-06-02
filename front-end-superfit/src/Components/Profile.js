import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Total_Average_calories} from "../Algorithm/Average_calories";
import {Goal_cal} from "../Algorithm/Goal_calories";
import  {Send_mealid}  from "../Algorithm/MealPlan_id";
import { useNavigate } from "react-router-dom";
import MenuAppBar from './Navbar';

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit';
import {Goal,weight,height,age,gender,activity,mealPreference} from "./Home";

export default function ProfilePage() {
const name = window.localStorage.getItem('name');
const email = window.localStorage.getItem('email');
let navigate = useNavigate();

  return (
    <div>
    <MenuAppBar />
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='/home' >Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Bonjour '{name}'</p>
                <p className="text-muted mb-4">Keep it up the hard work!</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText style={{color:'black'}}>Full Name:</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText style={{color:'black'}}>Email:</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText style={{color:'black'}}>Weight:</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted" id='weight'>{weight}</MDBCardText>
                    <input type="number" id="1" className="form-control" placeholder="in kg's" style={{display:'none'}}/>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText style={{color:'black'}}>Height:</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted" id='height'>{height}</MDBCardText>
                    <input type="number" id="2" className="form-control" placeholder="in cm's" style={{display:'none'}}/>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText style={{color:'black'}}>Age:</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted" id='age'>{age}</MDBCardText>
                    <input type="number" id="3" className="form-control" placeholder="age" style={{display:'none'}}/>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText style={{color:'black'}}>Gender:</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted" id='gender'>{gender}</MDBCardText>
                    <input type="text" id="4" className="form-control" placeholder="gender" style={{display:'none'}}/>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText style={{color:'black'}}>Activity:</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted" id='activity'>{activity}</MDBCardText>
                    <input type="text" id="5" className="form-control" placeholder="activity" style={{display:'none'}}/>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText style={{color:'black'}}>My Goal:</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted" id='goal'>{Goal}</MDBCardText>
                    <input type="text" id="6" className="form-control" placeholder="Enter Your goal" style={{display:'none'}}/>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText style={{color:'black'}}>Meal preference:</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted" id='mealPreference'>{mealPreference}</MDBCardText>
                    <input type="text" id="7" className="form-control" placeholder="Anything or Vegeterian" style={{display:'none'}}/>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            <MDBCol id='B1' onClick={Edit} style={{marginLeft:'300px'}}><MDBBtn  style={{paddingLeft: "100px",paddingRight: "100px"}}>Edit</MDBBtn></MDBCol>
            <MDBCol id='B2' onClick={Save} style={{marginLeft:'300px',display:"none"}}><MDBBtn  style={{paddingLeft: "100px",paddingRight: "100px"}}>Save</MDBBtn></MDBCol>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    </div>
  );
  function Edit() {
    document.getElementById("weight").style.display="none";
    document.getElementById("height").style.display="none";
    document.getElementById("age").style.display="none";
    document.getElementById("gender").style.display="none";
    document.getElementById("activity").style.display="none";
    document.getElementById("goal").style.display="none";
    document.getElementById("mealPreference").style.display="none";
    document.getElementById("B1").style.display="none";

    document.getElementById("1").style.display="block";
    document.getElementById("2").style.display="block";
    document.getElementById("3").style.display="block";
    document.getElementById("4").style.display="block";
    document.getElementById("5").style.display="block";
    document.getElementById("6").style.display="block";
    document.getElementById("7").style.display="block";

    document.getElementById("B2").style.display="block";
    
  }

  async function Save() {
    let Updweight = document.getElementById('1').value;
    let Updheight = document.getElementById('2').value;
    let Updage = document.getElementById('3').value;
    let Updgender = document.getElementById('4').value;
    let Upactivity = document.getElementById('5').value;
    let Updgoal = document.getElementById('6').value;
    let Updpreference = document.getElementById('7').value;

    
    if((Updweight != null) && (Updheight != null) && (Updage != null) && (Updgender != null) && (Upactivity != null) && (Updgoal != null) && (Updpreference != null) &&
       (Updgender === "male" || Updgender === "female") && 
       (Upactivity === "Sedentary" || Upactivity === "Light" || Upactivity === "Moderate" || Upactivity === "Active") &&
       (Updgoal === "Gain a little" || Updgoal === "Gain a lot" || Updgoal === "Loss a little" || Updgoal === "Loss a lot") && 
       (Updpreference === "Anything" || Updpreference === "Vegetarian")) 
       {


       let calories_Consume_Avg = Total_Average_calories(Updweight,Updheight,Updage,Updgender,Upactivity);
       let goal_Calories = Goal_cal(Updgoal,calories_Consume_Avg);

       if (goal_Calories < 1500 || goal_Calories > 3800) {
        alert("Sorry, we do not have Mealplan for this, we would recommend you to choose a different goal");
        navigate("/home");
       }
       else {
        Send_mealid(goal_Calories, Updpreference);
        await Async();
        const mealid=window.localStorage.getItem('mealid');
        const userid=window.localStorage.getItem('userid');
        let url = "http://localhost:3000/auth/user-response/";
        url = url.concat(userid);

        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
              User_id: userid,
              User_response_num: [Updweight, Updheight, Updage],
              User_response_str: [Updgender,Upactivity,Updgoal,Updpreference],
              User_mealplan_id: mealid,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
          .then((response) => response.json())
          .then((json) => {
                alert("Successfully updated your profile!");
                navigate("/home");
              });
       }

  }
  else{
    alert("Please Answer the required field accordingly!");
    navigate("/home");
    }
  }
  function Async(){
    return new Promise((res)=>{
    setTimeout(()=>{
    res();} , 100);});
    }

}