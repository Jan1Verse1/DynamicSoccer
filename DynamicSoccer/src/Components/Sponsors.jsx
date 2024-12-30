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
    <div className="flex flex-col p-12 h-auto bg-[#FAF7F2] items-center overflow-hidden">
      <h4 className="text-xl font-bold text-black  mb-12">
        Our Sponsors over the years
      </h4>
      <div className="flex w-full animate-marquee space-x-16 sm:overflow-hidden">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Sponsor ${index + 1}`}
            className="h-32 w-auto "
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
