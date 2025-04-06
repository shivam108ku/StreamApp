import React, { useState } from 'react'

const HeroPart = ({getwall}) => {

  console.log(getwall)

  return (
    <div className='w-full h-full flex gap-4'>
        <div
        style={{
          backgroundImage: `linear-gradient(to bottom, 
          rgba(0,0,0,0), rgba(0,0,0,0.4)), 
          url(https://image.tmdb.org/t/p/w780${getwall.backdrop_path || getwall.profile_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat', 
        }}
        className='h-full w-[40%] rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02]'>
          <h1 className=''>
          {getwall.name ||
              getwall.title ||
              getwall.original_name ||
              getwall.original_title           
              }
          </h1>
        </div>
        <div className='  h-full w-[60%] rounded-2xl  shadow-2xl' >
        <div
        style={{
          backgroundImage: `linear-gradient(to bottom, 
          rgba(0,0,0,0), rgba(0,0,0,0.4)), 
          url(https://image.tmdb.org/t/p/w780${getwall.backdrop_path || getwall.profile_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat', 
        }}
        className='h-full w-[45%] rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02]'>
          <h1 className=''>
          {getwall.name ||
              getwall.title ||
              getwall.original_name ||
              getwall.original_title           
              }
          </h1>
        </div>
        </div>
    </div>
  )
}

export default HeroPart