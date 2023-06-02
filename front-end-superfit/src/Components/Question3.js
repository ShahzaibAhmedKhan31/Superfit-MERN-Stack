import React, { useState } from "react";
import '../Questionair.css';
import { createSearchParams,useSearchParams,useNavigate } from "react-router-dom";

function Question3() {
    let navigate = useNavigate();
    const [SearchParams] = useSearchParams();
    const user = SearchParams.get("userId")
    const [age,setAge] = useState(null);

    const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setAge(value);
      };

    function OnclickButton() {
        if(age == null) {
            alert("Age is not entered");
        }
        else{
        localStorage.setItem('age', age);
        navigate("/questionair-4");
        }
    }
    
    return(      
        <div className="Question">
            <div className="Box">
                <div className="heading">
                    <p>Please enter your age?</p>
                </div>
                <div className="Question-buttons">
                    <input id="input-age"value={age} onChange={handleChange} placeholder="Enter Your Age:" />
                    <button id="button-age" onClick={OnclickButton}>Submit</button>
                </div>
            </div>
        </div>
        
    )
}

export default Question3;