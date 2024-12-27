import React from "react";
import BackgroundImage from "../assets/images/bgimg.png";

const Hero = () => {
  return (
    <div
      className="flex flex-col px-[3%] bg-white h-[720px] w-full p-20 justify-items-center bg-cover bg-center bg-no-repeat items-center  "
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="w-2/4 mb-24">
        <h1 className="text-7xl font-bold text-left text-white mb-4 leading-auto">
          Targeted and Impactful Youth Development through Sport Competition
        </h1>
        <button className="flex flex-row px-3 py-2 bg-black rounded-lg items-center justify-center text-sm text-white border-none h-10 w-max mt-4">
          What We Do
        </button>
      </div>
      <div className="flex flex-row w-3/4 justify-between  mb-4 ">
        <h5 className="text-xl font-bold text-white">
          Over 100+ young lives impacted
        </h5>
        <div className="bg-white w-auto"></div>
        <h5 className="text-xl font-bold text-white">
          10+ sponsors and supporters
        </h5>
      </div>
    </div>
  );
};

export default Hero;
