import React from 'react';
import "./sidebar.css";
import people from './human-min.jpg'
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>
                ABOUT ME
            </span>
            <img src={people} alt="people" />

            <p>Je suis Meriam Cherif étudiante à l'INSAT. J'aime la rédaction et la lecture.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">  Life</li>
            <li className="sidebarListItem">  Music</li>
            <li className="sidebarListItem">  Style</li>
            <li className="sidebarListItem">  Sport</li>
            <li className="sidebarListItem">  Tech</li>
            <li className="sidebarListItem">  Cinema</li>
        </ul>
         </div>
         <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
         <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            <i className="sidebarIcon fa-brands fa-pinterest-p"></i>
         </div>
         </div>
        </div>
  )
}

export default Sidebar