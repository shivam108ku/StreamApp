import React from 'react'
import PopularMenu from './Templates/PopularMenu'
import Trending from './Templates/Trending'
import Movies from './Templates/Movies'
import TvShow from './Templates/TvShow'
import SearchBar from './Templates/SearchBar'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>

            <div
            style={{
               color: "#b5b5b5a4",
               background: `linear-gradient(
                 120deg,
                 rgba(255, 255, 255, 0) 10%,
                 rgba(255, 255, 255, 1) 50%,
                 rgba(255, 255, 255, 0) 70%
               )`,
               backgroundSize: "200% 100%",
               WebkitBackgroundClip: "text",
               backgroundClip: "text",
               display: "inline-block",
               WebkitTextFillColor: "transparent",
               animation: "shine 5s linear infinite",
             }} className="w-[30%] text-4xl font-black
             ">
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