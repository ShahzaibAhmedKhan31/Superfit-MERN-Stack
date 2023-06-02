import React from "react";
import '../Questionair.css';
import { createSearchParams,useSearchParams,useNavigate } from "react-router-dom";

function Question4() {
    var gender = "Male"
    let navigate = useNavigate();
    const [SearchParams] = useSearchParams();
    const user = SearchParams.get("userId")

    function getInputValue(value){
        gender = value
        
        localStorage.setItem('gender', gender);
        navigate("/questionair-5");

    }
    
    return(      
        <div className="Question">
            <div className="Box">
                <div className="heading">
                    <p>Please select your gender?</p>
                </div>
                <div className="Question-buttons m-2">
                    <button className="Questions" value="male" id="1" onClick={e => getInputValue(e.target.value)}>Male</button>
                    <button className="Questions" value="female" id="2" onClick={e => getInputValue(e.target.value)}>Female</button>
                </div>
            </div>
        </div>
        
    )
}

export default Question4;