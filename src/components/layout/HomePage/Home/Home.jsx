import React from "react";
import css from "./Home.module.css";
import Header from "../../../common/Header";
import NavBar from "../NavBar/NavBar";
import NewArrial from "../NewArrialSection/NewArrial";
import SliderCard from "../SliderCard/SliderCard";

const Home = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className={css.homeBody}>
        <NewArrial />
        <SliderCard />
      </div>
    </>
  );
};

export default Home;
