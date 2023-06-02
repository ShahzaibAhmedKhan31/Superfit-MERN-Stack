import React, { useState } from "react";
import '../Questionair.css';
import { createSearchParams,useSearchParams,useNavigate } from "react-router-dom";


function Question1() {
    let navigate = useNavigate();
    const [SearchParams] = useSearchParams();
    const user = SearchParams.get("userId")
    const [weight,setWeight] = useState(null);

    const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setWeight(value);
      };

    function OnclickButton() {
        if(weight == null) {
            alert("Weight is not entered");
        }
        else{
        localStorage.setItem('weight', weight);
        navigate("/questionair-2")
    }
    }
    
    return(      
        <div className="Question">
            <div className="Box">
                <div className="heading">
                    <p>Please enter your weight in kg's?</p>
                </div>
                <div className="Question-buttons">
                    <input id="input-age" value={weight} onChange={handleChange} placeholder="Enter Your Weight:" />
                    <button id="button-age" onClick={OnclickButton}>Submit</button>
                </div>
            </div>
        </div>
        
    )
}

export default Question1;