import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { apikey, imageUrl } from '../../constants/constants'

function Banner() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${apikey}&language=en-US`).then((response) => {
      let index=getRandomInt(0,20)
      setMovie(response.data.results[index])
    })
  }, [])


  return (

    <div
      style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
      className='banner'>
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner_button">
          <button className='button'><i class="fa-solid fa-play button_icon"></i>Play</button>
          <button className='button'><i class="fa-solid fa-plus button_icon"></i>My List</button>
        </div>
        <h1 className="discription">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
