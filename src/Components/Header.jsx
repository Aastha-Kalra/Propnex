import React, { useState } from "react";
import { Link } from "react-scroll";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`bg-[#1F252A] fixed top-0 xl:flex  
        justify-around
        xl:justify-center items-center h-16 w-full  duration-300 ease-in-out text-white z-50 order-1`}
      >
        <div className="flex justify-between items-center px-4 py-3 ">
          <img src="Images/logo.png" alt="" />
          <div
            className="text-3xl pt-3 xl:hidden"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
        </div>

        <div className="flex w-full">
          <ul
            className={`xl:gap-5 items-center xl:justify-center flex  bg-[#22395d] h-fit flex-col xl:flex-row w-full mt-[4px] gap-16 xl:py-10 py-12  absolute xl:overflow-hidden overflow-y-scroll
          xl:static
          z-[-1] xl:z-10 xl:text-xl text-2xl  transition-all duration-500 ease-in xl:bg-inherit ${
            open ? "top-14" : "top-[-1190px]"
          }`}
            style={{ maxHeight: open ? "calc(100vh - 60px)" : "0" }}
          >
            <Link
              to="propertyShow"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Property Show
            </Link>
            <Link
              to="buy"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Buy
            </Link>
            <Link
              to="rent"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Rent
            </Link>
            <Link
              to="sell"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Sell
            </Link>
            <Link
              to="newLaunch"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              New Launch
            </Link>
            <Link
              to="businessSpace "
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Business Space
            </Link>
            <Link
              to="overseas"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Overseas
            </Link>
            <Link
              to="consultancy"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Consultancy
            </Link>
            <Link
              to="watch+"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Watch+
            </Link>
            <Link
              to="News"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              News
            </Link>
            <Link
              to="login"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Login
            </Link>
          </ul>
        </div>
      </div>

      <div className="bg-[#E6E9EC] hidden  h-16 text-[#303841] mt-14 lg:flex justify-center items-center ">
        <span className="text-[#113DFA] font-medium"> Click here</span> &nbsp;
        to purchase and own the limited-edition Gold Champion CEO Figurine!
        Avaiable from December 2021.
      </div>
      <div className="bg-[#E6E9EC] lg:hidden h-16 text-[#303841] mt-14 flex justify-center items-center ">
        <span className="text-[#113DFA] font-medium"> Click here</span> &nbsp;
        to purchase and own
      </div>
    </>
  );
};

export default Header;
