import React from 'react'
import './topbar.css'
import me from './me.jpg';
import {Link} from "react-router-dom";
function Topbar() {
  const user=true;
  return (
    <div className='top'>
        <div className='topLeft'>
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-pinterest-p"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
            <li className="topListItem">
            <Link className='link' to="/" >HOME</Link>
            </li>
            <li className="topListItem"><Link className='link' to="/" >ABOUT</Link></li>
            <li className="topListItem"><Link className='link' to="/" >CONTACT</Link></li>
            <li className="topListItem"><Link className='link' to="/write" >WRITE</Link></li>
            <li className="topListItem">{user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className='topRight'>
          {
            user ? ( <img className="topImg" src={me} alt="me.." />): 
           ( <ul className='topList'>
            <li className='topListItem'> <Link className='link' to="/login" >LOGIN</Link></li>
            <li className='topListItem'><Link className='link' to="/register" >REGISTER</Link></li>
            </ul>
            )
              
          }
           
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>

    </div>
  )
}

export default Topbar