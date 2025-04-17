import React from "react";
import banner_img from "../../assets/hero_img.png"

const Banner = () => {
  return (
    
    <div className=" bg-[#13131310] rounded-[24px] p-12 lg:py-[80px] lg:px-[120px]">
      <div className="flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center ">
        <div className="flex justify-center">
        <img
          src={banner_img}
          className=" mb-[20px] w-40 lg:w-full"
        />
        </div>
        <div>
          <h1 className=" text-[28px] lg:text-[56px] text-center lg:text-start font-bold text-[#131313] ">Books to freshen up <br /> your bookshelf</h1>
          <div className="mt-[20px] lg:mt-[48px] flex justify-center lg:justify-start">
          <button className="btn border-none shadow-none bg-[#23BE0A]">View The List</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
