import React from "react";

import { Link } from "react-router-dom";

export default function Navbar(){
    return(  <nav  className="navbar navbar-expand-lg     ">
        <div className="container-fluid  ">
          <a className="navbar-brand " href="/"><span className="whi">P</span>ORTFOLIO</a>
         
         
            <div id="nav-items" className="navbar-nav ms-auto ">
            
              <div className="NAV2">
              <a style={{color:"white" ,textDecoration:"none" , margin:"1rem"}} href="https://www.linkedin.com/in/yadhu-krishna-44a9152b3"   target="_blank"><i style={{fontSize:"21px" ,marginRight:"8px" ,color:"white"}} class="fa-brands fa-linkedin"></i>Yadhu Krishna</a>
              <Link id="left" to="/technology" className="nav-link" style={{ color: "white",marginTop:"8px" }}>Technologies</Link>
              </div>
             
            </div>
     
        </div>
      </nav>)
  
}