import React from 'react'
import "./write.css";
import landscape from "./landscape.jpg"
function Write() {
  return (
    <div className='write'>
        <img src={landscape} className="writeImg"alt="" />
        <form action="" className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder='Title' className="writeInput"autoFocus={true}/>

            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." name="" id="" cols="30" rows="10" className='writeInput writeText'></textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
        </div>
  )
}

export default Write