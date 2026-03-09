"use client";

import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center text-white text-center px-6">
      <div className="max-w-2xl">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Welcome to My First Next.js Project
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
          Exploring the power of React and Next.js
        </p>
        <p className="text-lg md:text-xl font-medium opacity-85">
          Building amazing web experiences with modern technologies
        </p>
      </div>
    </div>
  );
};

export default Banner;
