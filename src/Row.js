import React, { useEffect, useState } from 'react'
import geturl from "./geturl"
import "./Row.css"
import Youtube from 'react-youtube'
import movieTrailer from "movie-trailer"

function Row({title,fetchapi,isLargeRow}) {
  const imageBase="https://image.tmdb.org/t/p/original/";
    const [movies,setMovies]=useState([]);
    const [trailer,setTrailer]=useState('')

    useEffect(()=>{

       const getmovies= async()=>{
        try{

        const mdata= await geturl.get(fetchapi);
        setMovies(mdata.data.results)
       // console.table(movies);
        
        }
        catch(err){
          
          console.log(err)
        }

       }
       getmovies();

    },[fetchapi])

    const opts={
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    
const handleClick=(movie)=>{
  if (trailer){
    setTrailer('')
  }
  else{
    movieTrailer(movie?.name||'').then(url=>{
    const urlparams= new URLSearchParams(new URL(url).search)
      setTrailer(urlparams.get('v'))
    }).catch(err=>console.log(err))
  }
}
    
  return (
            <><div classname="row">
      <h2>{title}</h2>

      <div className='row_posters'>


        {movies.map(movie => (
          <img
            key={movie.id}
            onClick={()=>handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"} `}
            src={`${imageBase}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
        ))}

      </div>

    </div>
    
    <div>
        {trailer && <Youtube videoId={trailer} opts={opts} />}
      </div></>
            
  )
    }

export default Row