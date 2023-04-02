import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { api_key } from '../api';
import { api } from '../api';
import { selectedMovie } from '../redux/actions/movies';
const Detail = () => {
  const {movieId} = useParams();
  const dispatch = useDispatch();

  const fetchMovie = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`;
    const res = await api.get(url);
    console.log(res.data);
    if(res.data) dispatch(selectedMovie(res.data));
  }
  const data = useSelector(state=>state.movies.movie);
  console.log('detail',data);
  
  useEffect(()=>{
    fetchMovie();
  },[movieId]);


  return (
    <div className='container m-auto py-5'>
      <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} className='rounded-2xl' alt="" srcset="" />
      <div className='flex'>
        <h1 className='text-start text-3xl font-extrabold py-3 my-5'>{data.title}</h1>
      </div>
        <p className="text-start text-slate-500 py-5">{data.overview}</p>
    </div>
  )
}

export default Detail