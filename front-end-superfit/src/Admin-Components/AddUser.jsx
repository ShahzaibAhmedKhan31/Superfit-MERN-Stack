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

function AddUser() {
  let navigate = useNavigate();
  return (
    <div>
    <Navbar />
    <MDBContainer fluid style={{marginTop:"100px"}}>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <h1 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add User</h1>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='fullname' type='text' className='w-100' required = "required"/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='email' type='email' required = "required"/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='password' type='password' required = "required"/>
              </div>

              <MDBBtn className='mb-4' size='lg' onClick={AddUserApi} >Add User</MDBBtn>

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

  function AddUserApi() {
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

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
            navigate("/users");
            }
            else{
                alert(JSON.stringify(data));
            }
        });
  }
}

export default AddUser;