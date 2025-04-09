import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import HeroPart from './HeroPart';
import axios from '../utils/axios';
import HomeCards from './HomeCards';
import ThreeBackground from './ThreeBackground'; // 👈 Add this

const Home = () => {
  document.title = "MyPrime || Homepage";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);

  const GetWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData = data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(randomData);
    } catch (error) {
      console.log(error);
    }
  };

  const GetHomeCard = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      setTrending(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    !wallpaper && GetWallpaper();
    !trending && GetHomeCard();
  }, []);

  return wallpaper && trending ? (
    <div className="relative w-screen h-screen overflow-hidden">
      <ThreeBackground /> {/* 🌌 Particle BG */}

      <div className="flex items-center justify-center 
      w-full h-full bg-black
      relative z-10">

        <div className="h-[93%] flex flex-col justify-center gap-4 items-center w-[85%] rounded-2xl p-6
        backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl">

          <div className='h-[7%] w-[95%] mx-auto'>
            <Navbar />
          </div>
          <div className='h-[42%] w-[95%] mx-auto'>
            <HeroPart getwall={wallpaper} />
          </div>
          <div className='h-[45%] w-[95%] mx-auto'>
            <HomeCards data={trending} />
          </div>

        </div>
      </div>
    </div>
  ) : (
    <h1 className="text-white text-2xl text-center mt-10">LOADING...</h1>
  );
};

export default Home;
