import React from "react";
import "../App.css";
import Logo from './Logo'


import { Routes, Route,Link } from "react-router-dom";
import { Home } from "../components/Home";
import { Contact } from "../components/Contact";
import { AbouteUs } from "../components/AbouteUs";
import { Empty } from "../components/Empty";
import { Post } from "../components/Post";


function Menu() {
   return (
     <div className="menueParent">

       <div className="topnav">
                       <Logo /> 
              
       <div className="forHomepage" >

                      <Link to="/">Home</Link>
                      <Link to="/AbouteUs">About</Link>
                      <Link to="/Contact">Contact</Link>
                      <Link to="/Post">Post</Link>

     
            <div className="search-container">
               <form action="/action_page.php">
               <input type="text" placeholder="Search.." name="search" />
               </form>

            </div>
            </div>
                    </div>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/Contact" element={<Contact />} />
                      <Route path="/AbouteUs" element={<AbouteUs />} />
                      <Route path="/Post" element={<Post />} />
                      <Route path="*" element={<Empty />} />
                    </Routes>
                  </div>
   );
}
export default Menu;
