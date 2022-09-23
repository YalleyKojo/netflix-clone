import React, { useState } from 'react'
import "./Nav.css"

import {useEffect} from 'react'
function Navbar() {
  const [show,handleShow]=useState(false);
// handle scroll event 
  const handleSroll=()=>{  
    if(window.scrollY>100){
      handleShow(true)
    }
    else handleShow(false);
  }

// add scroll transition effect when window is scroll down more than a 100px
   useEffect(()=>{
        window.addEventListener("scroll",handleSroll)

        return ()=>{
  window.removeEventListener("scroll",handleSroll)
        }
   },[])


  return (


    <div className={`nav ${show && "nav_black"}`}>

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