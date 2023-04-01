import React from 'react'
import { Card } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
const Movie = () => {
  return (
    <div className="container mx-auto mt-3">
      <div className='grid grid-cols-4 gap-3'>
        <div className="max-w-sm">
          <Link to='/movies/3'>
            <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                <h4 className='text-start text-xl'>Avator : The Way of Water 2022</h4>
                <span className='text-start text-slate-700'>Action , Fantasty</span>
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
    </div>
  )
}

export default Movie