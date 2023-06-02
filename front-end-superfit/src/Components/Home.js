import  React,{useEffect}  from 'react';
import MenuAppBar from './Navbar';
import Image1 from "../Images/Banner-im1.jpg";
import Image2 from "../Images/Banner-im2.jpg";
import Image3 from "../Images/Banner-im3.jpg";
import Image4 from "../Images/Banner-im4.jpg";
import ImageSlider from "./ImageSlider";
import ColorCheckboxes from "../Color/Color";


var Goal,weight,height,age,gender,activity,mealPreference;


function Homepage() {
    const slides = [
        {url : Image1 , title: 'DietPlan'},
        {url : Image2 , title: 'Calories'},
        {url : Image3 , title: 'PlanOwnDiet'},
        {url : Image4 , title: 'Ramadan'}
    ];
    const containerStyles = {
        width:"1000px",
        height: "560px",
        margin: "50px auto"
    };


    useEffect(() => { 

        async function Getdata() {
            let url = "http://localhost:3000/auth/user-response/";
            let userid = window.localStorage.getItem('user-id');
            url = url.concat(userid);
            const res =  await fetch(url)
            let obj =  await res.json();
            console.log(obj);

            gender = obj[0].User_response_str[0];
            activity = obj[0].User_response_str[1];
            Goal = obj[0].User_response_str[2];
            mealPreference = obj[0].User_response_str[3];

            weight = obj[0].User_response_num[0];
            height = obj[0].User_response_num[1];
            age = obj[0].User_response_num[2];

            localStorage.setItem("mealid", obj[0].User_mealplan_id);
         }
         Getdata();
    },[])
    return (
        <div>
            <MenuAppBar />
            <div style={containerStyles}>
            <ImageSlider slides= {slides} />
            </div>
            <div>
                <ColorCheckboxes />
            </div>
        </div>
    );

    }

export {Goal,weight,height,age,gender,activity,mealPreference};

export default Homepage;