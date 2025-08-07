import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { SlDocs } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const WishBooks = ({ wish }) => {
  const {
    image,
    bookName,
    rating,
    author,
    totalPages,
    publisher,
    yearOfPublishing,
  } = wish;

  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 p-6 border border-[#13131315] rounded-[12px]">
      <div className="flex justify-center">
        <div className="bg-[#13131310] w-[50%] lg:w-full p-10 lg:py-7 lg:px-13 rounded-[16px]">
          <div className="flex justify-center">
            <img src={image} alt="book" className="w-20 lg:w-32" />
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-[#131313] text-[20px] lg:text-[24px]  font-bold mb-2">
          {bookName}
        </h1>
        <h5 className="font-medium  lg:text-[16px] text-[#13131380] lg:my-4">
          By : {author}
        </h5>
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 ">
          <div className="  flex items-center gap-6">
            <h4 className="text-[#131313] font-bold text-[16px] leading-[26px]">
              Tags :
            </h4>
            <h4 className="text-[#23BE0A] font-bold text-[16px] leading-[26px] cursor-pointer">
              #Young Adult
            </h4>
            <h4 className="text-[#23BE0A] font-bold text-[16px] leading-[26px] cursor-pointer">
              #Identity
            </h4>
          </div>
          <div className="flex items-center gap-1">
            <CiLocationOn className="text-[#131313]" />
            <h6 className="text-[#13131380] text-[16px]">
              Year of Publishing: {yearOfPublishing}
            </h6>
          </div>
        </div>
        <div className="border-b border-[#13131315] w-full flex items-center gap-4 lg:gap-6 py-[18px] flex-wrap">
          <div className="flex items-center gap-1">
            <FaRegUser className="text-[#13131360]" />
            <h6 className="text-[#13131380] text-[16px]">
              Publisher: {publisher}
            </h6>
          </div>
          <div className="flex items-center gap-1">
            <SlDocs className="text-[#13131360]" />
            <h6 className="text-[#13131380] text-[16px]">
              Total Pages: {totalPages}
            </h6>
          </div>
        </div>

        {/* single book button are here  */}
        <div className="mt-6 flex items-center gap-3 flex-wrap">
          <div className="bg-[#328EFF15] py-[11px] px-5 lg:px-6 rounded-full">
            <p className="text-[#328EFF] text-[16px]">Caregory: Classic</p>
          </div>
          <div className="bg-[#FFAC3315] py-[11px] px-5 lg:px-6 rounded-full">
            <p className="text-[#FFAC33] text-[16px] flex items-center gap-2">
              {" "}
              Rating: {rating} <FaRegStarHalfStroke />
            </p>
          </div>
          <button className="flex items-center gap-2 bg-[#23BE0A] py-[10px] px-5 rounded-full text-white">
            <IoEyeOutline className="text-[18px]" />
            <p>View Details</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishBooks;
