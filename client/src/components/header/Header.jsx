import React from 'react'
import "./header.css";
import nature from './10978248.jpg'
function Header() {
  return (
    <div className='header'>
<div className='headerTitles'>
    <span className='headerTitleSm'>React & Node</span>
    <span className='headerTitleLg'>Blog</span>
</div>
<img className="headerImg" src={nature} alt="nature" />
        </div>
  )
}

export default Header