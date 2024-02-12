import React from "react";
import Search from "./Search";

const Home = () => {
  return (
    <div className="relative">
      <img
        src="Images/homebg.jpg"
        className="w-full relative bg-cover bg-no-repeat h-screen"
        alt=""
      />
      <div className="absolute bg-white/20 top-[0px] left-0 w-full h-[100%] bg-gradient-to-r from-white via-white/50 to-white/5 flex md:py-12 md:px-36 lg:py-28 md:gap-10 lg:px-36 flex-col text-lg gap-6 sm:gap-4 sm:px-14 px-8 sm:py-12 py-24">
        <span className="text-[#1F252A] text-[32px] md:text-[60px]">
          Welcome to{" "}
        </span>
        <span className="md:text-[72px] sm:text-[42px] text-blue-600 font-medium text-4xl">
          PropNex, Inc.
        </span>
        <span className="font-medium text-[#1F252A] relative">
          The{" "}
          <span className="text-blue-600 font-medium">
            #1 Real Estate Company
          </span>{" "}
          in Singapore.
        </span>
        <span className="absolute md:top-[222px] lg:top-[286px] w-48 border-2 border-blue-600 h-1 sm:top-[171px]  md:left-44 sm:left-24 top-[237px] left-16"></span>

        <span className="text-black/80  font-medium mt-4">
          We are the leading real estate website in Singapore.
          <br />
          This is where your property journey begins.
        </span>
      </div>

      <Search />
    </div>
  );
};

export default Home;
