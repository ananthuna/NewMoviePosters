import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import { apikey, imageUrl} from '../../constants/constants'
import Youtube from 'react-youtube'

function RowPost(props) {
    const [Movies, setMovies] = useState([])
    const [url, setUrl] = useState('')
    useEffect(() => {
      axios.get(props.url).then((response)=>{
        setMovies(response.data.results)
      }).catch(err=>{
        console.log('network error:'+err)
      })
    }, [props.url])

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const handleMovie =(id)=>{
        console.log(id)
        axios.get(`movie/${id}/videos?api_key=${apikey}&language=en-US`).then((response)=>{
          if(response.data.results.legnth!==0){
            setUrl(response.data.results[0])
          }else{
            console.log('trailer not found')
          }
        })
    }
    
  return (
    <div className="rowpost">   
        <h2>{props.title}</h2>
        <div className="posters">
            {Movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} 
            className={props.isSmall ? "smallPosters" : "poster"} src={`${imageUrl+obj.backdrop_path}`} alt="card_img" />
            )}
        </div>
        { url && <Youtube  opts={opts} videoId={url.key}/> }
    </div>
  )
}

export default RowPost