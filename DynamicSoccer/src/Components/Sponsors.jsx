import React from "react";
import LASG from "../assets/images/LASG.png";
import BukkaHut from "../assets/images/Bukkahut.png";
import FanMilk from "../assets/images/FanMilk.png";
import Kelloggs from "../assets/images/Kelloggs.png";
import Glo from "../assets/images/Glo.png";
import MaltaG from "../assets/images/MaltaG.jpeg";
import MunchIt from "../assets/images/MunchIt.jpg";
import LASHMA from "../assets/images/LASHMA.jpg";
import LSSC from "../assets/images/LSSC.jpeg";
import mallmart from "../assets/images/mallmart.jpeg";

const Sponsors = () => {
  const logos = [
    LASG,
    LASHMA,
    BukkaHut,
    FanMilk,
    Kelloggs,
    Glo,
    MaltaG,
    MunchIt,
    LSSC,
    mallmart,
  ];

  return (
    <div className="flex flex-col p-12 bg-[#FAF7F2] items-center">
      <h4 className=" mb-4">Our Sponsors over the years</h4>
      <div className="flex w-full animate-marquee space-x-16">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Sponsor ${index + 1}`}
            className="h-32 w-auto "
          />
        ))}
      </div>
      {/* <div className="flex flex-row justify-between">
        <img
          className="w-40 h-40 mr-9 cursor-pointer"
          src={LASG}
          alt="LASG Logo"
        />
        <img
          className="w-40 h-40 mr-9 cursor-pointer"
          src={BukkaHut}
          alt="BukkaHut logo"
        />
        <img
          className="w-40 h-40 mr-9 cursor-pointer"
          src={FanMilk}
          alt="Fan-Milk Logo"
        />
        <img
          className="w-40 h-40 mr-9 cursor-pointer"
          src={Kelloggs}
          alt="Kelloggs Logo"
        />
        <img
          className="w-40 h-40 mr-9 cursor-pointer"
          src={Glo}
          alt="Glo Logo"
        />
        <img
          className="w-40 h-40 mr-9 cursor-pointer"
          src={MaltaG}
          alt="Malta Guinness Logo"
        />
        <img
          className="w-40 h-40 mr-9 cursor-pointer"
          src={MunchIt}
          alt="Munch It Logo"
        />
      </div> */}
    </div>
  );
};

export default Sponsors;
