import React from 'react'
import { Link } from 'react-router-dom'
import { Card,Button } from 'flowbite-react'
const MovieBox = ({movie}) => {
  return (
    <div>
        <div className="max-w-sm">

              <Link to={`/movies/${movie.id}`}>
            <Card imgSrc={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}>
                <h4 className='text-start text-xl'>{movie.name}</h4>
                <span className='text-start text-slate-500 mb-3'>{movie.overview.slice(0,100)}</span>
                <Button
                  color="dark"
                  pill={true}
                >
                  Watch
                </Button>
            </Card>
          </Link>
    </div>
    </div>

  )
}

export default MovieBox