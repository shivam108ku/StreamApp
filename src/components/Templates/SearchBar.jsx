import React, { use, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from '../../utils/axios'

const SearchBar = () => {

    const [query , setQuery] = useState("");
    const [search , setSearch] = useState([])
    
    const GetSearches = async()=>{
      try{
        const data = await axios.get(`/search/multi?query=${query}`)
        setSearch(data.data.results || [] );
      } catch (error){
        console.log(error)
      }
    }

    useEffect(()=>{
      GetSearches();
    },[query])

  return (
    <div className='ml-16 relative flex justify-center gap-2 items-center'>

        <i className="ri-search-fill"></i>
        <input 
        onChange={(e)=>setQuery(e.target.value)}
        value={query}
        className='flex-1 outline-none border-none
         bg-transparent font-semibold text-zinc-200' 
        type="text"
        placeholder='search anything'  /> 
        {query.length > 0 &&(
             <i onClick={()=>setQuery("")} className="ri-close-fill cursor-pointer"></i>
        ) }

        <div className='absolute flex overflow-x-hidden flex-col gap-2 w-[100%] mt-3 ml-1 max-h-[40vh]
         backdrop-blur-md bg-black/10 border rounded-xl border-white/20 shadow-4xl
        transparent top-[100%] '>

          {search.map((s,i)=>(
            <Link key={i} className='inline-block
            w-[95%] mx-auto p-5 text-white font-semibold transition-colors
            duration-300 ease-in-out hover:text-purple-200'>
              
              <img className="h-30 w-60 object-cover 
              rounded-2xl 
              shadow-[0_1px_25px_rgba(255,255,255,0.15)]
               hover:shadow-[0_15px_35px_rgba(255,55,55,0.25)] 
               transition-all duration-300"
            src={`https://image.tmdb.org/t/p/w500${s.backdrop_path || s.profile_path}`}
            alt="" />
              
               
              <span>
              {s.name ||
              s.title ||
              s.original_name ||
              s.original_title           
              }</span>
               
           
            
            </Link>
          ))}
            
        </div>

    </div>
  )
}

export default SearchBar