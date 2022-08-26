import React from 'react';
import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar'
import nature from './nature.jpg';
function Settings() {
  return (
    <div className='settings'>
         <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">  Update your account</span>
             <span className="settingsDeleteTitle"> Delete Account</span> 
          </div>
          <form action="" className="settingsForm">
            <label htmlFor="">
               Profile picture
            </label>
             <div className="settingsPP">
                  <img src={nature} alt="nature" />
                  <label htmlFor="fileInput">
                  <i className="settingsPPIcon fa-solid fa-user"></i>
                  </label>
                  <input type="file" id="fileInput" style={{display:"none"}} />
            </div>
               <label > Username</label>
               <input type="text"  placeholder='Safak'/>
               <label > Email</label>
               <input type="email"  placeholder='Safak@gmail.com'/>
               <label > Password</label>
               <input type="password"/>
               <button className="settingsSubmit">Update</button>   
           
           </form>
         </div> 
         <Sidebar/>
   </div>
  )
}

export default Settings