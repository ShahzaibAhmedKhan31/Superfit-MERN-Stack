import React, {useState} from "react"
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import "./App.css";

function Renderit() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (forName) => {
     setCurrentForm(forName);
    }


return(
    <div className="App">
    {
    currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
    }
    
  </div>
  
);
}
export default Renderit;