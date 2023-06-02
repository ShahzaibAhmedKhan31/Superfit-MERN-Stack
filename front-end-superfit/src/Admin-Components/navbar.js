import React from 'react'

const LogoutStyle = {
    all:"unset",
    color:"white",
    cursor:"pointer",
    backgroundColor: "#DC4C65",
    marginTop:"8px",
    marginLeft: "770px",
    padding:"5px"
}

const LogoutFunction = () => {
    window.localStorage.clear();
    window.location.assign("/");
}
 
export const Navbar = () => {
    return (
            <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
                <div class="flex-row d-flex">
                    <button type="button" class="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="/admin" title="Free Bootstrap 4 Admin Template" style={{marginLeft:"50px"}}>Admin Panel</a>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="collapsingNavbar">
                    <ul class="navbar-nav" style={{marginLeft:"80px"}}>
                        <li class="nav-item active">
                            <a class="nav-link" href="/admin">Home <span class="sr-only">Home</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/users">Users</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/mealplan">Meal Plans</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/addusers">Add User</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/addmealplan">Add Meal Plan</a>
                        </li>
                        <li class="nav-item">
                            <button onClick={LogoutFunction} style={LogoutStyle}>Logout</button>
                        </li>
                    </ul>
                </div>
       </nav>
    )
}
export default Navbar