import React, { useEffect, useState } from "react";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Getstarted from "./Components/Getstarted";
import Renderit from "./render";
import Question1 from "./Components/Question1";
import Question2 from "./Components/Question2";
import Question3 from "./Components/Question3";
import Question4 from "./Components/Question4";
import Question5 from "./Components/Question5";
import Question6 from "./Components/Question6";
import Question7 from "./Components/Question7";
import ProfilePage from "./Components/Profile";
import Dashboard from "./Components/Dashboard";
import HomePage from "./Components/Home";
import AdminPage from "./Admin-Components/Admin";
import Fetch_mealplan from "./Admin-Components/Fetch_mealplan";
import Fetch_users from "./Admin-Components/Fetch_users";
import Fetch_userResponse from "./Admin-Components/Fetch_userResponse";
import AddUser from "./Admin-Components/AddUser";
import AddMealPlan from "./Admin-Components/AddMealPlan";
import CryptoWallet from "./Components/CryptoWallet";

function App() {
  const [login, setlogin] = useState()
  const [usertype, setusertype] = useState()
  const [get, setget] = useState(window.localStorage.getItem('token'));
  const isLoggedin = () => {
    setget(localStorage.getItem('token'))
    if (get != null) {
      setusertype(localStorage.getItem('user'))
      setlogin(true)
    }
    else {
      setlogin(false)
    }
  }


  useEffect(() => {
    isLoggedin();
  });

  return (
    <BrowserRouter>
      {(login && usertype == "admin") ? 
      <Routes>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="/mealplan" element={<Fetch_mealplan />}></Route>
        <Route path="/users" element={<Fetch_users />}></Route>
        <Route path="/user-responses" element={<Fetch_userResponse />}></Route>
        <Route path="/addusers" element={<AddUser />}></Route>
        <Route path="/addmealplan" element={<AddMealPlan />}></Route>
        <Route path="*" element={<AdminPage />}></Route>
      </Routes>
        : (login && usertype == "local") ? 
        <Routes>
          <Route path="/getstarted" element={<Getstarted />}></Route>
          <Route path="/questionair-1" element={<Question1 />}></Route>
          <Route path="/questionair-2" element={<Question2 />}></Route>
          <Route path="/questionair-3" element={<Question3 />}></Route>
          <Route path="/questionair-4" element={<Question4 />}></Route>
          <Route path="/questionair-5" element={<Question5 />}></Route>
          <Route path="/questionair-6" element={<Question6 />}></Route>
          <Route path="/questionair-7" element={<Question7 />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="*" element={<HomePage />}></Route>
      </Routes>
       :
      <Routes>
        <Route path="/" element={<Renderit />}></Route>
        <Route path="*" element={<Renderit />}></Route>
        <Route path="/wallet" element={<CryptoWallet />}></Route>
      </Routes>}


    </BrowserRouter>
  );
}

export default App;
