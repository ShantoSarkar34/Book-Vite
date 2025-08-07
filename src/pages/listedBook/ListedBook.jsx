import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreBook } from "../../utility/addToDB";
import WishBooks from "../wishbooks/WishBooks";

const ListedBook = () => {
  const [wishlist, setWishList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoreBook();
    const convertedStoredBook = storedBookData.map((id) => parseInt(id));
    const myWishList = data.filter((book) =>
      convertedStoredBook.includes(book.bookId)
    );
    setWishList(myWishList);
  }, []);

  const handleSort = (type) => {
    setSort(type);

    if(type==="rating"){
      const sortByRating= [...wishlist].sort((a,b)=>a.rating-b.rating);
      setWishList(sortByRating);
    }if(type === "pages"){
      const sortByPages = [...wishlist].sort((a,b)=>a.pages-b.pages);
      setWishList(sortByPages);
    }
    console.log(sort);
    
  };

  return (
    <div className=" py-[50px] lg:py-[100px]">
      <h1 className="text-center text-[20px] lg:text-[40px] font-bold text-[#131313] mb-9">
        Books
      </h1>
      <div className="flex justify-center">
        <select
          defaultValue="Sort by :"
          className="select select-success focus:outline-none border-none w-[190px] bg-[#23BE0A] text-[16px] font-semibold cursor-pointer"
        >
          <option
            disabled={true}
            className="text-[#131313] text-[16px]  font-semibold bg-[#F0F0F0]"
          >
            Sort by :
          </option>
          <option className="bg-[#F0F0F0] text-[#13131380]">
            <a onClick={() => handleSort("rating")}>Rating</a>
          </option>
          <option className="bg-[#F0F0F0] text-[#13131380]">
            <a onClick={() => handleSort("pages")}>Number of pages</a>
          </option>
          <option className="bg-[#F0F0F0] text-[#13131380]">
            <a onClick={() => handleSort("year")}>Publisher year</a>
          </option>
        </select>
      </div>
      <Tabs className="text-black mt-4 lg;mt-8">
        <TabList>
          <Tab>
            Wishlist Books :{" "}
            <span className="text-[#23be0a] font-semibold">
              {wishlist.length}
            </span>
          </Tab>
          <Tab>Read Books</Tab>
        </TabList>

        <TabPanel>
          {/* <h2 className="text-[18px] font-semibold my-3 lg:my-6">
            Total wished books :{" "}
            {" "}
          </h2> */}

          <div className="space-y-6">
            {wishlist.map((wish) => (
              <WishBooks key={wish.bookId} wish={wish}></WishBooks>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>read books</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBook;
