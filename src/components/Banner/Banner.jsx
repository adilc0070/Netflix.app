import { useEffect, useState } from 'react'
import './Banner.css'
import {API_KEY,imageUrl} from '../../constants/constants.js'
import axios from '../../axios.jsx'
function Banner() {
    let [movie,setMovie]=useState()
    useEffect(()=>{
        let random=Math.floor(Math.random()*20)
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results[random])
            setMovie(response.data.results[random])
        })
    },[])

    return (
        <div className='banner'
            style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path :''})`}}>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : ''}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ''}</h1>
            </div>
            <div className='fade_bottom'></div>
        </div>
    )
}

export default Banner
