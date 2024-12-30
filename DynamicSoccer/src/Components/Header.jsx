// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { IoMenu } from "react-icons/io5";
// import Logo from "../assets/images/Logo.png";

// const Header = () => {
//   const [nav, setNav] = useState(false);
//   const toggleNav = () => setNav(!nav);
//   const navigate = useNavigate();

//   const navigateHandler = () => {
//     navigate("/");
//   };

//   return (
//     <div>
//       <header className="flex flex-row px-[3%] bg-white h-[120px]  items-center justify-between sticky top-0 z-[200]">
//         <div className="flex flex-row justify-between w-full">
//           <div>
//             <img
//               className="w-24 h-24 cursor-pointer"
//               src={Logo}
//               alt="Dynamic Street Soccer Logo"
//               onClick={navigateHandler}
//             />
//           </div>
//           <div className="hidden md:flex flex-row justify-around">
//             <ul className="flex flex-row justify-around text-black">
//               <li className="p-4">
//                 <Link to="/" onClick={() => setNav(false)}>
//                   Home
//                 </Link>
//               </li>
//               <li className="p-4">
//                 <Link to="/WhatWeDo" onClick={() => setNav(false)}>
//                   What we do
//                 </Link>
//               </li>
//               <li className="p-4">
//                 <Link to="/WhoWeAre" onClick={() => setNav(false)}>
//                   Who we are
//                 </Link>
//               </li>
//               <li className="p-4">
//                 <Link to="/Contact" onClick={() => setNav(false)}>
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//             <button className="flex flex-row px-3 py-2 bg-black rounded-lg items-center justify-center text-sm text-white border-none h-10 w-max mt-1">
//               <a href=" https://wa.me/2347080226755" target="blank">
//                 {" "}
//                 Become a sponsor
//               </a>
//             </button>
//           </div>
//           <IoMenu
//             size={40}
//             className="my-4 text-black md:hidden"
//             onClick={toggleNav}
//           />
//         </div>
//       </header>
//       {nav && (
//         <div className="flex flex-col md:hidden absolute top-30px left-0 w-full text-center text-white rounded-md bg-black z-[999]">
//           <ul>
//             <li className="p-4">
//               <Link to="/" onClick={() => setNav(false)}>
//                 Home
//               </Link>
//             </li>
//             <li className="p-4">
//               <Link to="/WhatWeDo" onClick={() => setNav(false)}>
//                 What we do
//               </Link>
//             </li>
//             <li className="p-4">
//               <Link to="/WhoWeAre" onClick={() => setNav(false)}>
//                 Who we are
//               </Link>
//             </li>
//             <li className="p-4">
//               <Link to="/Contact" onClick={() => setNav(false)}>
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//           <button className="flex flex-row px-3 py-2 bg-black rounded-lg items-center justify-center text-sm text-white border-none h-10 w-max mt-1">
//             <a href=" https://wa.me/2347080226755" target="blank">
//               Become a sponsor
//             </a>
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;

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
      <header className="flex flex-row px-[3%] bg-white h-[120px] items-center justify-between sticky top-0 z-[200]">
        <div className="flex flex-row justify-between w-full">
          <div>
            <img
              className="w-24 h-24 cursor-pointer"
              src={Logo}
              alt="Dynamic Street Soccer Logo"
              onClick={navigateHandler}
            />
          </div>
          {/* Ensure this div displays correctly on medium and larger screens */}
          <div className="hidden md:flex flex-row items-center justify-around w-full">
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
            <button className="flex flex-row px-3 py-2 bg-black rounded-lg items-center justify-center text-sm text-white border-none h-10 w-max ml-4">
              <a
                href="https://wa.me/2347080226755"
                target="_blank"
                rel="noreferrer"
              >
                Become a sponsor
              </a>
            </button>
          </div>
          {/* Mobile menu icon */}
          <IoMenu
            size={40}
            className="my-4 text-black md:hidden"
            onClick={toggleNav}
          />
        </div>
      </header>
      {/* Mobile Menu */}
      {nav && (
        <div className="flex flex-col md:hidden absolute top-[120px] left-0 w-full text-center text-white bg-black z-[999]">
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
          <button className="flex flex-row px-3 py-2 bg-black rounded-lg items-center justify-center text-sm text-white border-none h-10 w-max mt-4 mx-auto">
            <a
              href="https://wa.me/2347080226755"
              target="_blank"
              rel="noreferrer"
            >
              Become a sponsor
            </a>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
