import { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import axios from '../../axios.jsx'
import { API_KEY, imageUrl } from '../../constants/constants'
import './RowPost.css'
import YouTube from 'react-youtube'
import alertify from 'alertifyjs'
function RowPost({ title, isSmall, url }) {
    let [movies, setMovies] = useState([])
    let [urlId,setUrlId]=useState('')
    useEffect(() => {
        axios.get(url).then((response) => {
            setMovies(response.data.results)
        })
    }, [movies])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
          mute:1,
        },
      };
      let showAlert=(string)=>{
        alertify.set('notifier','position', 'top-center');
        alertify.success(string);
      }
      let HandleMovieTriler=(id)=>{
        console.log(id);
        axios.get(`movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then((response)=>{
            response.data.results.length>0 ? setUrlId(response.data.results[0]): showAlert("no videos")
        }).catch((err)=>{
            showAlert('video not available'+err)
        })
      }
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='posters'>
                {
                    movies.map((items) => {
                        return (
                            <img onClick={()=>{HandleMovieTriler(items.id)}} key={items.id} className={isSmall ? "smallPoster" : 'poster'} alt='poster' src={items ? `${imageUrl}${items.backdrop_path}` : ''} />
                        )
                    })
                }
            </div>
            {urlId && <YouTube opts={opts} videoId={urlId? urlId.key:''}/>}
        </div>
    )
}

export default RowPost