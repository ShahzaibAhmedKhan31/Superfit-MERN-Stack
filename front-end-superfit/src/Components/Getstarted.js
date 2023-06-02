import React from "react";
import '../Getstarted.css';
import { useNavigate } from "react-router-dom";

function Getstarted(props) {
    let navigate = useNavigate();
    //const {navigation} = this.props;
    const token = window.localStorage.getItem('token');
    
    const Submit = (e) => {
        fetch("http://localhost:3000",{
            method: "GET",
            crossDomain:true,
            headers:{
                 Accept: "application/json",
                "Authorization" : `Bearer ${token}`
            }}).then((res)=> res.json()).then((data)=> { 
                localStorage.setItem('user-id', data._id);
                localStorage.setItem('name', data.fullname);
                localStorage.setItem('email', data.email);
        })
        alert("Please answer the upcoming questions to help you out for your perfect meal plan");
        navigate("/questionair-1")
    }

    return(
        
        <div className="Getstarted">
            <div>
                <p><span>G</span>et <span>Y</span>our <span>P</span>ersonal <span>T</span>rainer <br></br><span>F</span>or <span>B</span>etter <span>P</span>erformance</p>
                <button className="Start-button" onClick={Submit}>Get started</button>
            </div>
        </div>
        
    )
}

export default Getstarted;