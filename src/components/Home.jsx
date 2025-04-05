import React from 'react'
import Navbar from './Navbar'


const Home = () => {
  return (
    <div className="flex items-center justify-center 
      w-screen h-screen bg-gradient-to-l
      from-purple-800 via-purple-500 to-purple-800 ">
      
      <div className="h-[93%] flex flex-col  justify-center gap-4 items-center w-[85%] rounded-2xl p-6
        backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl">
           
           <div className='h-[7%] w-[95%] mx-auto'>
            <Navbar/>
            </div>
           <div className='h-[31%] w-[95%] mx-auto bg-green-500'>Hero</div>
           <div className='h-[13%] w-[95%] mx-auto bg-red-500'>Nav</div>
           <div className='h-[43%] w-[95%] mx-auto bg-green-500'>Last</div >

      </div>
      
    </div>
  )
}

export default Home
