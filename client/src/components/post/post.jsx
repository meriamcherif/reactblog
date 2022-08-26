import React from 'react'
import "./post.css";
import green from './green.png';

function post() {
  return (

    <div className='post'>post
  <img className="postImg" src={green} alt="" />

<div className="postInfo">
    <div className="postCats">
        <span className="postCat">Music</span>
        <span className="postCat">Life</span>

    </div>
    <span className="postTitle">
Ce que le jour doit à la nuit. 
    </span>
    <hr/>
    <span className="postDate">1 hour ago</span>
</div>
<p className='postDesc'>
La nuit, une douceur amère et une amertume douce.
Les battements de notre coeur sont notre unique preuve de vie.
La nuit, une douceur amère et une amertume douce.
Les battements de notre coeur sont notre unique preuve de vie.
La nuit, une douceur amère et une amertume douce.
Les battements de notre coeur sont notre unique preuve de vie.
La nuit, une douceur amère et une amertume douce.
Les battements de notre coeur sont notre unique preuve de vie.
La nuit, une douceur amère et une amertume douce.
Les battements de notre coeur sont notre unique preuve de vie.

</p>
    </div>


  )
}

export default post