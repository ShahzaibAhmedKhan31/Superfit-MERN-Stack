import React from 'react';
import Navbar from './navbar';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";

function AddMealPlan() {
  let navigate = useNavigate();

  const Iconstyle = {
    marginRight:"10px"
  }
  return (
    <div>
    <Navbar />
    <MDBContainer fluid style={{marginTop:"100px"}}>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <h1 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Meal Plan</h1>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Meal Plan Type' id='1' type='text' className='w-100' required = "required"/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <i class="fas fa-drumstick-bite" style={Iconstyle}></i>
                <MDBInput label='Breakfast Meal 1' id='2' type='text' className='w-100' required = "required"/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <i class="fas fa-search" style={Iconstyle}></i>
                <MDBInput label='Breakfast Review 1' id='3' type='text' className='w-100' required = "required"/>
              </div>
              
              <div className="d-flex flex-row align-items-center mb-4 ">
                 <i class="fas fa-drumstick-bite" style={Iconstyle}></i>
                <MDBInput label='Breakfast Meal 2' id='4' type='text' className='w-100' required = "required"/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <i class="fas fa-search" style={Iconstyle}></i>
                <MDBInput label='Breakfast Review 2' id='5' type='text' className='w-100' required = "required"/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <i class="fas fa-drumstick-bite" style={Iconstyle}></i>
                <MDBInput label='Lunch Meal 1' id='6' type='text' className='w-100' required = "required"/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                 <i class="fas fa-search" style={Iconstyle}></i>
                <MDBInput label='Lunch Review 1' id='7' type='text' className='w-100' required = "required"/>
              </div>
              
              <div className="d-flex flex-row align-items-center mb-4 ">
                <i class="fas fa-drumstick-bite" style={Iconstyle}></i>
                <MDBInput label='Lunch Meal 2' id='8' type='text' className='w-100' required = "required"/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <i class="fas fa-search" style={Iconstyle}></i>
                <MDBInput label='Lunch Review 2' id='9' type='text' className='w-100' required = "required"/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <i class="fas fa-drumstick-bite" style={Iconstyle}></i>
                <MDBInput label='Dinner Meal 1' id='10' type='text' className='w-100' required = "required"/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <i class="fas fa-search" style={Iconstyle}></i>
                <MDBInput label='Dinner Review 1' id='11' type='text' className='w-100' required = "required"/>
              </div>
              
              <div className="d-flex flex-row align-items-center mb-4 ">
                <i class="fas fa-drumstick-bite" style={Iconstyle}></i>
                <MDBInput label='Dinner Meal 2' id='12' type='text' className='w-100' required = "required"/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <i class="fas fa-search" style={Iconstyle}></i>
                <MDBInput label='Dinner Review 2' id='13' type='text' className='w-100' required = "required"/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i class="fas fa-calculator" style={Iconstyle}></i>
                <MDBInput label='Meal Calories' id='14' type='number' required = "required"/>
              </div>


              <MDBBtn className='mb-4' size='lg' onClick={AddMealPlanApi} >Add Meal Plan</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </div>
  );

  function AddMealPlanApi() {
    let Plan_type = document.getElementById('1').value;
    let Bm1 = document.getElementById('2').value;
    let Br1 = document.getElementById('3').value;
    let Bm2 = document.getElementById('4').value;
    let Br2 = document.getElementById('5').value;
    let Lm1 = document.getElementById('6').value;
    let Lr1 = document.getElementById('7').value;
    let Lm2 = document.getElementById('8').value;
    let Lr2 = document.getElementById('9').value;
    let Dm1 = document.getElementById('10').value;
    let Dr1 = document.getElementById('11').value;
    let Dm2 = document.getElementById('12').value;
    let Dr2 = document.getElementById('13').value;
    let Meal_Calories = document.getElementById('14').value;

    if(Plan_type!='' && Bm1!='' && Br1!='' && Bm2!='' && Br2!='' && Lm1!='' && Lr1!='' && Lm2!='' && Lr2!='' && Dm1!='' && Dr1!='' && Dm2!='' && Dr2!='' && Meal_Calories !='' ) {

    let Meal_Breakfast = [Bm1,Br1,Bm2,Br2];
    let Meal_Lunch = [Lm1,Lr1,Lm2,Lr2];
    let Meal_Dinner = [Dm1,Dr1,Dm2,Dr2];


    fetch("http://localhost:3000/auth/mealplan",{
            method: "POST",
            crossDomain:true,
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
                Plan_type,
                Meal_Breakfast,
                Meal_Lunch,
                Meal_Dinner,
                Meal_Calories
            }),
        }).then((res) => res.json()).then((data)=>{
          if(data != null){
            alert("Successfully Added Meal Plan");
            navigate("/mealplan");
            }
            else{
                alert(JSON.stringify(data));
            }
        });
  }
  else {
    alert("Please fill in the required fields");
  }
}
}

export default AddMealPlan;