import React, { useEffect, useState } from 'react'
import geturl from "./geturl"
import requests from './requests'
import "./Banner.css"

function Banner() {
 const [movie,setMovie]=useState([])
/*get  randon netflix originals movie and display them on banner*/
 useEffect(()=>{

  const getmovies= async ()=>{
    const res=await geturl.get(requests.fetchNetflixOriginals)  //get netflix originals movies
   
   setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length -1 )])
   
  }
getmovies()
 },[])

 const reduce=(str,n)=>{
    return str?.length > n? str.substr(0,150) + "..." : str;
 }

  return (
    <header className='banner'
    style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition:"center center"
    }}
    >

        <div className='banner_contents'>

        <h1 className='banner_title'>
            {movie?.title||movie?.name||movie?.original_name}
        </h1>
      <div className='banner_buttons'>
        <button className='banner_button'>Play</button>
        <button className='banner_button'>My List</button>

      </div>

      <h1 className='banner_description'>
       {reduce(movie?.overview,150)}
      </h1>
      <div className='banner_fadebottom'>

      </div>
        </div>

    </header>
  )
}

export default Banner