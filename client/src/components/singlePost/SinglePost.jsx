import React from 'react';
import "./singlePost.css";
import window from './window.jpg'
function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
       <img src={window} alt="window" className='singlePostImg' />
       <h1 className='singlePostTitle'>
        Parce que je t'aime
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>            
        <i className="singlePostIcon fa-solid fa-trash"></i>
        </div>
       </h1>
       <div className='singlePostInfo'>
        <span className='singlePostAuthor'> Autor: <b> Musso</b></span>
        <span className='singlePostDate'> 1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
        Layla, une petite fille de cinq ans, disparaît dans un centre commercial de Los Angeles. Brisés, ses parents finissent par se séparer…
        Cinq ans plus tard, Layla est retrouvée à l’endroit exact où on avait perdu sa trace. Elle est vivante, mais reste plongée dans un étrange mutisme.
        À la joie des retrouvailles, succèdent les interrogations. Où était Layla pendant toutes ces années ? Avec qui ? Et surtout : pourquoi est-elle revenue ?
        </p>
      </div>     
   </div>
  )
}

export default SinglePost