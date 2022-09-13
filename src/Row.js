import React, { useEffect, useState } from 'react'
import axios from "./axios"
function Row({title,fetchapi}) {
    const [movies,setMovies]=useState([]);

    useEffect(()=>{

       const getmovies= async()=>{
        try{

        const mdata= await axios.get({fetchapi})
        setMovies(mdata.data)
        }
        catch(err){
          console.log(err)
        }

       }
       getmovies();

    },[])
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default Row