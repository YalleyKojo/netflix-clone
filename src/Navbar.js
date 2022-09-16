import React, { useState } from 'react'
import "./Nav.css"

import {useEffect} from 'react'
function Navbar() {
  const [show,handleShow]=useState(false);


   


  return (


    <div className="nav">

        <img className='nav_logo'
        src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Netflix123123.png'
        alt='logo'/>

        <img className='nav_avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='avatar'/>
    
    
    </div>
    
  )
}

export default Navbar