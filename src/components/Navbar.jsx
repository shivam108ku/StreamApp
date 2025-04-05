import React from 'react'
import PopularMenu from './Templates/PopularMenu'
import Trending from './Templates/Trending'
import Movies from './Templates/Movies'
import TvShow from './Templates/TvShow'
import SearchBar from './Templates/SearchBar'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>

            <div className="w-[30%] text-3xl font-black
             bg-gradient-to-r from-purple-300 via-white to-purple-400 
             bg-clip-text text-transparent animate-pulse">
              MyPrime
           </div>

        {/* Categopries */}
         <div className=' flex justify-center w-[40%] items-center'>
            <nav className='flex h-[2.67rem] w-[70%] bg-black rounded-4xl gap-6 justify-center items-center
            text-[0.75rem] font-semibold
             text-amber-50'>
                 <PopularMenu/>
                  <Trending/> 
                  <Movies/>
                  <TvShow/>
            </nav>
        </div>

        {/* Search Bar */}
        <div className='w-[30%]'>
           <SearchBar/>
        </div>
    </div>
  )
}

export default Navbar