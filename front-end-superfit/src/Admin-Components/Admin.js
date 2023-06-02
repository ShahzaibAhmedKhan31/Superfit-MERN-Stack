import React from 'react';
import Fetch_userResponse from './Fetch_userResponse';
import Fetch_users from './Fetch_users';
import Navbar from './navbar';
import Sidebar from './sidebar';
 
function Admin(){
    
    const headingStyle = {
        textAlign: "center"
    }
    const containerStyle = {
        marginLeft:"250px",
        marginBottom: "100px"
    }
    return (
        <div>
            <div>
            <Navbar/>
            </div>
            <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                <Sidebar/>
                <div className='container col-lg-10 '><h1 style={{marginLeft:"530px", marginBottom: "50px", marginTop: "100px"}}>Users</h1>
                <Fetch_users />
                </div>
                <div className='container col-lg-10 ' style={containerStyle}><h1 style={headingStyle}>User-Response</h1>
                <Fetch_userResponse />
                </div>

             </div>
        </div>  
    </div>  
    );
    }
  
export default Admin