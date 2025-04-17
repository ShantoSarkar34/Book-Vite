import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="navbar bg-white text-black shadow-none p-0 max-w-full   mx-auto z-50">
      <div className="navbar-start">
        <div className="dropdown ">
          <button
            tabIndex={0}
            role="button"
            className="pr-3 pt-3 cursor-pointer lg:hidden hover:text-[#23be0a] focus:text-[#23be0a] transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 pl-4 shadow bg-white space-y-[2px]"
          >
            <Link
              to="/"
              className="text-[14px] font-semibold hover:text-[#23be0a]"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-[14px] font-semibold hover:text-[#23be0a]"
            >
              Listed Books
            </Link>
            <Link
              to="/pages"
              className="text-[14px] font-semibold hover:text-[#23be0a]"
            >
              Pages to Read
            </Link>
          </ul>
        </div>
        <a href="/" className="text-2xl font-bold">
          Book Vibe
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          <Link
            to="/"
            className="text-[14px] font-semibold hover:text-[#23be0a]"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-[14px] font-semibold hover:text-[#23be0a]"
          >
            Listed Books
          </Link>
          <Link
            to="/pages"
            className="text-[14px] font-semibold hover:text-[#23be0a]"
          >
            Pages to Read
          </Link>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-4">
          <button className="py-2 px-4 lg:px-5 rounded-sm text-white font-semibold text-[12px] lg:text-[14px] cursor-pointer hover:shadow-sm shadow-[#23be0a] bg-[#23be0a]">
            Sign In
          </button>
          <button className="py-2 px-4 lg:px-5 rounded-sm text-white font-semibold text-[12px] lg:text-[14px] cursor-pointer hover:shadow-sm shadow-[#59C6D2] bg-[#59C6D2]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
