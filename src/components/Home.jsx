import React from 'react';
import { Carousel } from 'flowbite-react';

const Home = () => {
  return (
    <div className="container mx-auto mt-3 mb-4">
        <div className=''>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel>
        <img
        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
        alt="..."
        />
        <img
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
        alt="..."
        />
        <img
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
        alt="..."
        />
        <img
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
        alt="..."
        />
        <img
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
        alt="..."
        />
    </Carousel>
    </div>
        </div>
    </div>
  )
}

export default Home