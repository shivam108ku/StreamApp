import React from 'react';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import ThreeBackground from './components/ThreeBackground';

const App = () => {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      
      {/* Background: Absolute so it stays behind everything */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <ThreeBackground />
      </div>

      {/* Foreground: All your app content goes here */}
      <div className="relative z-10 w-full h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here */}
        </Routes>
      </div>

    </div>
  );
};

export default App;