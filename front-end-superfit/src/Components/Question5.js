import React from "react";
import '../Questionair.css';
import { createSearchParams,useSearchParams,useNavigate } from "react-router-dom";
function Question5() {
    var activity = "Sedentary"
    let navigate = useNavigate();
    const [SearchParams] = useSearchParams();
    const user = SearchParams.get("userId")


    function getInputValue(value){
        activity = value
        
        localStorage.setItem('activity', activity);
        navigate("/questionair-6");

    }
    
    return(      
        <div className="Question">
            <div className="Box">
                <div className="heading">
                    <p>How Active Are You?</p>
                </div>
                <div className="Question-buttons">
                    <button className="Questions" value="Sedentary" id="1" onClick={e => getInputValue(e.target.value)}>Sedentary</button>
                    <button className="Questions" value="Light" id="2" onClick={e => getInputValue(e.target.value)}>Light Activity</button>
                    <button className="Questions" value="Moderate" id="3" onClick={e => getInputValue(e.target.value)}>Moderate Activity</button>
                    <button className="Questions" value="Active"  id="4" onClick={e => getInputValue(e.target.value)}>Very Active</button>
                </div>
            </div>
        </div>
        
    )
}

export default Question5;