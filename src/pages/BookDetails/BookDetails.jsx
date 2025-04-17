import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();

  const singleData = data.find((book) => book.bookId === bookId);

  const {
    bookName,
    image,
    author,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = singleData;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 py-20">
      <div className="flex justify-center">
        <div className="bg-[#13131310] w-[80%] lg:w-full p-10 lg:p-[74px] rounded-[16px]">
          <div className="flex justify-center">
            <img src={image} alt="book" className="w-60 lg:w-72" />
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-[#131313] text-[22px] lg:text-[40px] font-bold mb-2">
          {bookName}
        </h1>
        <h5 className="font-medium  lg:text-[20px] text-[#13131380]">
          By : {author}
        </h5>
        <div className="my-3 lg:my-6 py-2 lg:py-4 border-y border-[#13131315]">
          <p className="font-medium text-[16px] lg:text-[20px] text-[#13131380]">
            Fiction
          </p>
        </div>
        <p className="text-[#13131370]">
          <span className="text-[#131313] font-bold text-justify leading-[26px]">
            Review :
          </span>{" "}
          Sit amet consectetur. Interdum porta pulvinar non sit aliquam. Aenean
          pulvinar blandit vel non enim elementum penatibus pellentesque ac. Nec
          accumsan euismod nulla adipiscing lectus. Morbi elementum a auctor
          erat diam tellus. Fermentum faucibus nulla enim ornare. <br />
          Id neque neque pretium enim platea urna non dictum. Faucibus dignissim
          ridiculus nibh tristique massa non.
        </p>
        <div className="border-b border-[#13131315] py-4 lg:py-6 flex items-center gap-6">
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
        <div className="mt-6 flex items-center gap-12">
          <div className="space-y-3">
            <h5 className="text-[#13131370] text-[16px] leading-[26px]">
              Number Of Pages:
            </h5>
            <h5 className="text-[#13131370] text-[16px] leading-[26px]">
              Publisher:
            </h5>
            <h5 className="text-[#13131370] text-[16px] leading-[26px]">
              Year of Publishing:
            </h5>
            <h5 className="text-[#13131370] text-[16px] leading-[26px]">
              Rating:
            </h5>
          </div>
          <div className="space-y-3">
            <h5 className="text-[#131313] font-semibold text-[16px] leading-[26px]">
              {totalPages}{" "}
            </h5>
            <h5 className="text-[#131313] font-semibold text-[16px] leading-[26px]">
              {publisher}{" "}
            </h5>
            <h5 className="text-[#131313] font-semibold text-[16px] leading-[26px]">
              {yearOfPublishing}{" "}
            </h5>
            <h5 className="text-[#131313] font-semibold text-[16px] leading-[26px]">
              {rating}{" "}
            </h5>
          </div>
        </div>
        {/* single book button are here  */}
        <div className="mt-8 flex items-center gap-8">
          <button className="py-2 px-4 lg:px-5 rounded-sm text-white font-semibold text-[12px] lg:text-[14px] cursor-pointer hover:shadow-sm shadow-[#23be0a] bg-[#23be0a]">
            Read Now
          </button>
          <button className="py-2 px-4 lg:px-5 rounded-sm text-white font-semibold text-[12px] lg:text-[14px] cursor-pointer hover:shadow-sm shadow-[#59C6D2] bg-[#59C6D2]">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
