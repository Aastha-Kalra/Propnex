import React, { useState, useEffect } from "react";
import { Link } from 'react-scroll';
const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`bg-[#1F252A]  fixed top-0 xl:flex
        
        justify-around
        xl:justify-cente items-center h-16 w-full  duration-300 ease-in-out text-white z-50 order-1`}
      >
        <div className="flex justify-between items-center  w-full px-4 py-3 ">
         <img src="Images/logo.png" alt="" />
          <div className="text-3xl pt-3 xl:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
        </div>

        <div>
          <ul
            className={`xl:gap-5 items-center xl:justify-center flex  bg-[#22395d] h-fit flex-col xl:flex-row w-full mt-[4px] gap-16 xl:py-10 py-12  absolute
          xl:static
          z-[-1] xl:z-10 xl:text-xl text-2xl  transition-all duration-500 ease-in xl:bg-inherit ${
            open ? "top-14" : "top-[-790px]"
          }`}
          >
            <Link
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-sky-600"
            >
              HOME
            </Link>
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-sky-600"
            >
              ABOUT
            </Link>
            <Link
              to="features"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-sky-600"
            >
             FEATURES
            </Link>
            <Link
              to="clients"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-sky-600"
            >
              CLIENTS
            </Link>
            <Link
              to=""
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-sky-500 text-2xl font-bold px-4 py-1 cursor-pointer  hover:bg-sky-600
              hidden xl:block
              "
            >
              SMART ENERGY
            </Link>
            <Link
              to="team"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-sky-600"
            >
              TEAM
            </Link>
            <Link
              to="blogs"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-sky-600"
            >
            BLOGS
            </Link>
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-sky-600"
            >
              CONTACT US
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;