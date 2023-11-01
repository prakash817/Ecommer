import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Category from "../components/Category";
import Product from "../components/Product";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Category />
      <Product />
      <NewsLetter />
    </div>
  );
};

export default Home;
