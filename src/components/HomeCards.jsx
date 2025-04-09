import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 
const HomeCards = ({ data }) => {
  return (
    <div className='relative h-[100%] w-[100%] overflow-hidden'>
      
      
      <div className='relative z-10'>
        <h1 className='h-[10%] mb-1 text-xl font-bold text-white'>TRENDING</h1>

        <div className='h-[90%] mr-5 flex w-full overflow-x-auto scrollbar-hide'>
          {data.map((d, i) => (
            <div className='min-w-80 mr-2' key={i}>
              <img
                src={`https://image.tmdb.org/t/p/w500${d.poster_path}`}
                alt={d.name || d.title}
                className='w-full h-38 object-cover rounded-t-2xl'
              />
              <h1 className='text-xl font-bold text-white'>
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p className='text-sm w-full mt-[0.2rem] font-lg text-zinc-100'>
                {d.overview.slice(0, 80)}...
                <Link className='text-purple-200 hover:text-amber-50'>more</Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
