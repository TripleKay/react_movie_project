import React, { useEffect } from 'react';
import Movie from './Movie';
import Banner from './Banner';
import { useDispatch } from 'react-redux';
import { api,api_key } from '../api';
import {fetchMovies} from '../redux/actions/movies'

const Home = () => {

  const dispatch = useDispatch();

  const getMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;
    const res = await api.get(url);
    dispatch(fetchMovies(res.data.results));
    console.log(res.data.results) ;
  }

  useEffect(()=>{
    getMovies()
  },[])

  return (
    <div className="container mx-auto mt-3 mb-4">
        <div className=''>
            <Banner></Banner>
            <Movie></Movie>
        </div>
    </div>
  )
}

export default Home