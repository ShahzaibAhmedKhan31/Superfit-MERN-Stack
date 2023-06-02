import React, { useState } from "react";
import '../Questionair.css';
import { createSearchParams,useSearchParams,useNavigate } from "react-router-dom";


function Question2() {
    let navigate = useNavigate();
    const [SearchParams] = useSearchParams();
    const user = SearchParams.get("userId")
    const [height,setHeight] = useState(null);

    const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setHeight(value);
      };

    function OnclickButton() {
        if(height == null) {
            alert("Height is not entered");
        }
        else{
        localStorage.setItem('height', height);
        navigate("/questionair-3");
        }
    }
    
    return(      
        <div className="Question">
            <div className="Box">
                <div className="heading">
                    <p>Please enter your height in cm's?</p>
                </div>
                <div className="Question-buttons">
                    <input id="input-age" value={height} onChange={handleChange} placeholder="Enter Your Height:" />
                    <button id="button-age" onClick={OnclickButton}>Submit</button>
                </div>
            </div>
        </div>
        
    )
}

export default Question2;