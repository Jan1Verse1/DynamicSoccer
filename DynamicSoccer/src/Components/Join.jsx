import React from "react";
import SportImg from "../assets/images/image00003.jpeg";

const Join = () => {
  return (
    <div className="grid grid-cols-2 gap-x-10 p-12 align-middle justify-items-center xs:grid-cols-1 p-8 gap-x-2  ">
      <div className="flex flex-col px-[3%] bg-white h-[720px] w-full p-20 justify-items-center xs:h-[240px] p-2 mb-8 ">
        <img src={SportImg} alt="Sport Image" />
      </div>
      <div className="flex flex-col p-20 xs:p-4 items-center ">
        <h2 className="text-5xl font-bold text-black mb-4 xs:text-center ">
          Join us in creating a brighter future for young adults everywhere
        </h2>
        <p className="text-xl font-medium text-black mb-4 xs:text-center">
          Sports aren’t just games—they’re a gateway to growth, character, and
          community. Through our outreach, we help young adults harness their
          potential, build lasting connections, and discover the values of
          discipline and teamwork.
        </p>
        <button className="flex flex-row px-3 py-2 bg-black rounded-lg items-center justify-center text-sm text-white border-none h-10 w-max mt-4">
          Join our Sponsors
        </button>
      </div>
    </div>
  );
};

export default Join;
