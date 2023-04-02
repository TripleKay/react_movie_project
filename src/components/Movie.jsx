import React from 'react'
import { useSelector } from 'react-redux';
import MovieBox from './MovieBox';
const Movie = () => {

  const data = useSelector(state => state.movies.movies);
  console.log("moviesData",data);
  return (
    <div className="container mx-auto mt-3">

      <div className='grid grid-cols-4 gap-3'>
          {
            data.length > 0 ? data.map(item=> <MovieBox key={item.key} movie={item} />) : <h1>loading.....{data.length}</h1>
            }        
      </div>
    </div>
  )
}

export default Movie