import React from "react";
import Banner from "../../components/banner/Banner";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {

  const data = useLoaderData();
  console.log(data);
  
  return (
    <div className="py-28">
      <Banner></Banner>
      <Books data ={data}></Books>
    </div>
  );
};

export default Home;
