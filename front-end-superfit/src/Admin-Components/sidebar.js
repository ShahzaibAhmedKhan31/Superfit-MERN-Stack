import React from 'react'
const Sidebar = () => {

    const spanStyle = {
        color:"black",
        marginLeft:"5px"
    }
    const marginSideBar = {
        paddingBottom: "200px"
    }
    return (
         <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef"}}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li class="nav-item mb-2 mt-3"><a class="nav-link text-secondary" href="#"><h5>Shahzaib Ahmed</h5></a></li>
                <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="#"><i class="fas fa-user font-weight-bold"></i> <span className="ml-3" style={spanStyle}>Overview</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="/users"><i class="fa-solid fa-user"></i><span className="ml-3" style={spanStyle}>View All User</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="/addusers"><i class="fa-solid fa-user-plus"></i><span className="ml-3" style={spanStyle}>Add User</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="/mealplan"><i class="fa-solid fa-utensils"></i><span className="ml-3"style={spanStyle}>View All Meal Plan</span></a></li>
                <li class="nav-item mb-2" style={marginSideBar}><a class="nav-link text-secondary" href="/addmealplan"><i class="fa-solid fa-cart-shopping"></i><span className="ml-3" style={spanStyle}>Add Meal Plan</span></a></li>
            </ul>
       </div>
    )
}
 
export default Sidebar