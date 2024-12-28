import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import Logo from "../assets/images/Logo.png";

const Header = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/");
  };

  return (
    <div>
      <header className="flex flex-row px-[3%] bg-white h-[120px]  items-center justify-between sticky top-0 z-[200]">
        <div className="flex flex-row justify-between w-full">
          <div>
            <img
              className="w-24 h-24 cursor-pointer"
              src={Logo}
              alt="Dynamic Street Soccer Logo"
              onClick={navigateHandler}
            />
          </div>
          <div className="hidden md:flex flex-row justify-around">
            <ul className="flex flex-row justify-around text-black">
              <li className="p-4">
                <Link to="/" onClick={() => setNav(false)}>
                  Home
                </Link>
              </li>
              <li className="p-4">
                <Link to="/WhatWeDo" onClick={() => setNav(false)}>
                  What we do
                </Link>
              </li>
              <li className="p-4">
                <Link to="/WhoWeAre" onClick={() => setNav(false)}>
                  Who we are
                </Link>
              </li>
              <li className="p-4">
                <Link to="/Contact" onClick={() => setNav(false)}>
                  Contact Us
                </Link>
              </li>
            </ul>
            <button className="flex flex-row px-3 py-2 bg-black rounded-lg items-center justify-center text-sm text-white border-none h-10 w-max mt-1">
              Become a sponsor
            </button>
          </div>
          <IoMenu
            size={40}
            className="my-4 text-black md:hidden"
            onClick={toggleNav}
          />
        </div>
      </header>
      {nav && (
        <div className="flex flex-col md:hidden absolute top-30px left-0 w-full text-center text-white rounded-md bg-black z-[999]">
          <ul>
            <li className="p-4">
              <Link to="/" onClick={() => setNav(false)}>
                Home
              </Link>
            </li>
            <li className="p-4">
              <Link to="/WhatWeDo" onClick={() => setNav(false)}>
                What we do
              </Link>
            </li>
            <li className="p-4">
              <Link to="/WhoWeAre" onClick={() => setNav(false)}>
                Who we are
              </Link>
            </li>
            <li className="p-4">
              <Link to="/Contact" onClick={() => setNav(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
          <button className="flex flex-row px-3 py-2 bg-black rounded-lg items-center justify-center text-sm text-white border-none h-10 w-max mt-1">
            Become a sponsor
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
