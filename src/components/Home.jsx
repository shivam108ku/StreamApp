import React, { useEffect,useState } from 'react'
import Navbar from './Navbar'
import HeroPart from './HeroPart'
import axios from '../utils/axios'


const Home = () => {

  document.title = "MyPrime || Homepage"

  const [wallpaper , setWallpaper] = useState(null);
   
  const GetWallpaper = async ()=>{
    try {
      const {data} = await axios.get(`/trending/all/day`);
       
      let randomData = data.results[(Math.random()*data.results.length).toFixed()];
      setWallpaper(randomData);
    }
    catch(error){
      console.log(error);
    }
   };
   useEffect(()=>{
    !wallpaper && GetWallpaper()
   },[])

  return wallpaper ?  (
    <div className="flex items-center justify-center 
      w-screen h-screen bg-gradient-to-l
      from-purple-800 via-purple-500 to-purple-800 ">
      
      <div className="h-[93%] flex flex-col  justify-center gap-4 items-center w-[85%] rounded-2xl p-6
        backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl">
           
           <div className='h-[7%] w-[95%] mx-auto'>
            <Navbar/>
            </div>
           <div className='h-[31%] w-[95%] mx-auto '>
            <HeroPart getwall={wallpaper} />
           </div>
           <div className='h-[13%] w-[95%] mx-auto bg-red-500'>Nav</div>
           <div className='h-[43%] w-[95%] mx-auto bg-green-500'>Last</div >

      </div>
      
    </div>
  ):<h1>LOADING</h1>
}

export default Home
