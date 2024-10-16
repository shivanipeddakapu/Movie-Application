import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import YouTube, { YouTubePlayer } from 'react-youtube';

export default function Infopage() {
    let location=useLocation()
    
    let moviedetails=location.state.x
    let [trailer,setTrailer]=useState('')
    async function trail(id) {
        fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=c202f0c11aa8b52272804f5b020a8667`).then(x=>x.json()).then(x=>setTrailer(x.results[0].key)).catch(err=>console.error('error',err)
        )
    }
    
  return (
    <div className='moviedetailcontainer'>
        <div className='innerdetailsdiv'>
        <img style={{marginBottom:"50px"}} className='dtailimg' src={`https://image.tmdb.org/t/p/original/${moviedetails.backdrop_path}`} alt="trailer" />
        <h1>Movie:{moviedetails.title}</h1>
        <h3>Rating:{moviedetails.vote_average}</h3>
        <p><b>About the movie:</b>{moviedetails.overview}</p>
        
        <button id='trailerbtn' onClick={()=>trail(moviedetails.id)}>watch trailer</button>

        <div  className='trailerdiv'>
            {trailer&&<YouTube  videoId={trailer} opts={{height:'561vh',width:'100%'}} />}
        </div>
        </div>
        
    </div>
  ) 
}