import React from "react";

const Search = () => {
  return (
    <>
      <div className="h-[153px] absolute -bottom-3 pl-24 w-full 2xl:flex hidden justify-center items-center  bg-gradient-to-r from-white/50 py-3 mb-3 via-white/50 to-white/5 ">
        <div className="h-[61px] 2xl:grid 2xl:grid-cols-8  gap-2 w-full">
          <div className="flex flex-col gap-2">
            <label>SEARCH</label>
            <input
              type="text"
              className="p-4 focus:outline-none rounded-lg w-96 bg-white"
              placeholder="City, neighborhood, ZIP, or address ..."
            />
          </div>
          <br />
          <div className=" flex flex-col gap-2 ">
            <label>TYPE</label>
            <input
              type="text"
              className="p-4 rounded-lg w-28"
              placeholder="Condo"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label>PRICE RANGE</label>
            <input
              type="text"
              className="p-4 rounded-lg w-48"
              placeholder="Min Price - Max Price"
            />
          </div>
          <div className="h-[1px] flex flex-col gap-2 ">
            <label>RENT/SELL</label>
            <input
              type="text"
              className="p-4 rounded-lg w-32"
              placeholder="Rent"
            />
          </div>
          <div className="h-[1px] flex flex-col gap-2 ">
            <label>BEDS</label>
            <input
              type="text"
              className="p-4 rounded-lg w-24"
              placeholder="5+"
            />
          </div>
          <div className="h-[1px] flex flex-col  gap-2">
            <label>BATHS</label>
            <input
              type="text"
              className="p-4 rounded-lg w-24"
              placeholder="5+"
            />
          </div>
          <div className="flex flex-col justify-center items-center h-24">
            <button className="bg-[#113DFA] text-white px-7 py-4 mt-5 rounded-lg">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
