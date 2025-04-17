import React from "react";
import { MdOutlineStarHalf } from "react-icons/md";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const { bookName, bookId, image, rating, author } = singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="border-[#13131315] border rounded-[24px] p-6">
        <div className="bg-[#F3F3F3] py-8 flex justify-center rounded-[16px] mb-6">
          <img src={image} className="h-40 lg:h-48" />
        </div>
        <div className="flex items-center gap-5 pl-4 mb-4">
          <h5 className="text-[14px] text-[#23BE0A] font-medium">
            Young Adult
          </h5>
          <h5 className="text-[14px] text-[#23BE0A] font-medium">Identity</h5>
        </div>
        <h1 className="font-bold text-[20px] lg:text-[24px] text-[#131313] mb-4">
          {bookName}
        </h1>
        <h6 className="text-[14px] lg:text-[16px] text-[#13131380] font-medium pb-5 border-dashed border-b border-[#13131315]">
          By: {author}
        </h6>
        <div className="flex items-center justify-between pt-5">
          <h6 className="text-[14px] lg:text-[16px] text-[#13131380] font-medium ">
            Fiction
          </h6>
          <div className="flex items-center gap-2">
            <h6 className="text-[14px] lg:text-[16px] text-[#13131380] font-medium ">
              {rating}{" "}
            </h6>
            <MdOutlineStarHalf className="text-yellow-500" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
