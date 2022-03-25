import React from "react";
import "../App.css";
import Logo from './Logo'
import CustomLink from '../components/CustomLink'



function Head() {
   return (
       <div className="topnav">
                       <Logo /> 
       <div className="forHomepage" >

                      <CustomLink to="/">Home</CustomLink>
                      <CustomLink to="/AbouteUs">About</CustomLink>
                      <CustomLink to="/Contact">Contact</CustomLink>
                      <CustomLink to="/Post">Post</CustomLink>

     
            <div className="search-container">
               <form action="/action_page.php">
               <input type="text" placeholder="Search.." name="search" />
               </form>

            </div>
            </div>
                    </div>
                   
   );
}
export default Head;
