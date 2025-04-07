import React, { useState,useEffect } from 'react'
import axios from '../utils/axios'
import { Link } from 'react-router-dom';

const HeroPart = ({getwall}) => {

const [wallpaper , setWallpaper] = useState(null);
  const GetWallpaper2 = async ()=>{
    try {
      const {data} = await axios.get(`/trending/all/day`);
       
      let randomData2 = data.results[(Math.random()*data.results.length).toFixed()];
      setWallpaper(randomData2);
    }
    catch(error){
      console.log(error);
    }
   };
   useEffect(()=>{
    !wallpaper && GetWallpaper2()
   },[])

  console.log(getwall)

  return (
    <div className='w-full h-full flex gap-4'>
        <div
        style={{
          backgroundImage: `linear-gradient(to bottom, 
          rgba(0,0,0,0.8), rgba(0,0,0,0)), 
          url(https://image.tmdb.org/t/p/w780${getwall.backdrop_path || getwall.profile_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat', 
        }}
        className='h-full w-[40%] rounded-2xl shadow-xl'>
          <h1 className='text-white text-xl font-bold p-4'>
          {getwall.name ||
              getwall.title ||
              getwall.original_name ||
              getwall.original_title           
              }
          </h1>
          <p className='text-sm ml-4 w-[50%] mt-[-0.5rem] 
          font-lg text-white'>{getwall.overview.slice(0,50)}...<Link className='text-purple-400'>more</Link></p>
          <div className='mt-5'> <Link className='ml-4 p-3 rounded-md
              text-white text-sm font-semibold hover:bg-purple-800
              mt-40 bg-purple-500'>Watch Trailer</Link>  </div>

        </div>
        <div className='h-full w-[60%] rounded-2xl shadow-2xl'>
        {wallpaper && (
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, 
              rgba(0,0,0,0.8), rgba(0,0,0,0)), 
              url(https://image.tmdb.org/t/p/w780${wallpaper.backdrop_path || wallpaper.profile_path})`,
              backgroundSize: 'cover',
              backgroundPosition: '50% 40%',
              backgroundRepeat: 'no-repeat',
            }}
            className='h-full w-full rounded-2xl shadow-xl'>
            <h1 className='text-white text-xl font-bold p-4'>
              {wallpaper.name ||
                wallpaper.title ||
                wallpaper.original_name ||
                wallpaper.original_title}
            </h1>
            <p className='text-sm  ml-4 w-[50%] mt-[-0.5rem]
             font-light text-white'>
              {wallpaper.overview.slice(0,100)}...<Link className='text-purple-400'>more</Link></p>
              <div className='mt-5'> <Link className='ml-4 p-3 rounded-md
              text-white text-sm font-semibold hover:bg-purple-800
              mt-40 bg-purple-500'>Watch Trailer</Link>  </div>         
              </div>
        )}
      </div>
    </div>
  )
}

export default HeroPart