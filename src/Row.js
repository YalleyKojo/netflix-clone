import React, { useEffect, useState } from 'react'
import geturl from "./geturl"
import "./Row.css"

function Row({title,fetchapi}) {
  const imageBase="https://image.tmdb.org/t/p/original/";
    const [movies,setMovies]=useState([]);

    useEffect(()=>{

       const getmovies= async()=>{
        try{

        const mdata= await geturl.get(fetchapi);
        setMovies(mdata.data.results)
        console.table(movies);
        
        }
        catch(err){
          
          console.log(err)
        }

       }
       getmovies();

    },[fetchapi])
  return (
    <div classname="row">
      <h2>{title}</h2>

      <div className='row_posters'>

     
      { 
     movies.map(movie=>(
      <img 
      key={movie.id}
      className='row_poster'
      src={`${imageBase}${movie.poster_path}`} alt={movie.name}/>
     ))
     }

      </div>

    </div>
  )
}

export default Row