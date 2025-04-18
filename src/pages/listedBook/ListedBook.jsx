import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreBook } from "../../utility/addToDB";
import WishBooks from "../wishbooks/WishBooks";

const ListedBook = () => {
  const [wishlist, setWishList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoreBook();
    const convertedStoredBook = storedBookData.map((id) => parseInt(id));
    const myWishList = data.filter((book) =>
      convertedStoredBook.includes(book.bookId)
    );
    setWishList(myWishList);
  }, []);

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
          <option className="bg-[#F0F0F0] text-[#13131380]">Rating</option>
          <option className="bg-[#F0F0F0] text-[#13131380]">
            Number of pages
          </option>
          <option className="bg-[#F0F0F0] text-[#13131380]">
            Publisher year
          </option>
        </select>
      </div>

      <Tabs className="text-black">
        <TabList>
          <Tab>Wishlist Books</Tab>
          <Tab>Read Books</Tab>
        </TabList>

        <TabPanel>
          <h2>wished books : {wishlist.length}</h2>
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
