import React from "react";
import '../Questionair.css';
import { createSearchParams,useSearchParams,useNavigate } from "react-router-dom";
function Question6() {
    var goal = "Gain a little"
    let navigate = useNavigate();
    const [SearchParams] = useSearchParams();
    const user = SearchParams.get("userId")


    function getInputValue(value){
         goal = value

        localStorage.setItem('goal', goal);
        navigate("/questionair-7");

    }
    
    return(      
        <div className="Question">
            <div className="Box">
                <div className="heading">
                    <p>What is your goal?</p>
                </div>
                <div className="Question-buttons">
                    <button className="Questions" value="Gain a little" id="1" onClick={e => getInputValue(e.target.value)}>Gain a little - 5 kg's</button>
                    <button className="Questions" value="Gain a lot" id="2" onClick={e => getInputValue(e.target.value)}>Gain a lot - 10 kg's </button>
                    <button className="Questions" value="Loss a little" id="3" onClick={e => getInputValue(e.target.value)}>Loss a little - 5 kg's</button>
                    <button className="Questions" value="Loss a lot"  id="4" onClick={e => getInputValue(e.target.value)}>Loss a lot - 10 kg's</button>
                </div>
            </div>
        </div>
        
    )
}

export default Question6;