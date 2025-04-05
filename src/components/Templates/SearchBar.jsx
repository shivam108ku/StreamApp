import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const SearchBar = () => {

    const [query , setQuery] = useState("");
    console.log(query)

  return (
    <div className='ml-18 relative flex justify-center gap-2 items-center'>
        <i className="ri-search-fill"></i>
        <input 
        onChange={(e)=>setQuery(e.target.value)}
        value={query}
        className='outline-none border-none
         bg-transparent font-semibold text-zinc-200' 
        type="text"
        placeholder='search anything'  /> 

        <div className='absolute flex overflow-x-hidden flex-col gap-2 w-[100%] mt-3 ml-1 h-[40vh]
         backdrop-blur-md bg-black/10 border rounded-xl border-white/20 shadow-4xl
        transparent top-[100%] '>

            <div></div>

            <Link className='inline-block
              w-[95%] mx-auto p-5   transition-colors
              duration-300 ease-in-out hover:text-amber-50'>
              <img src="" alt="" />
              <span>Hello EveryOne</span>
              </Link>
        
              
           
           

            

             

            
            
            
        </div>

    </div>
  )
}

export default SearchBar