import React from "react";
import PropTypes from "prop-types";
import BannerSection from "../MainPageComponents/BannerSection";
import Todays from "../MainPageComponents/Todays";
import Categories from "../MainPageComponents/Categories";
import BestSelling from "../MainPageComponents/BestSelling";
import ItemPromo from "../MainPageComponents/ItemPromo";
import OurProducts from "../MainPageComponents/OurProducts";
import Featured from "../MainPageComponents/Featured";
import Benefits from "../MainPageComponents/Benefits";

function MainPage() {
  return (
    <div>
      <BannerSection />
      <Todays />
      <Categories />
      <BestSelling />
      <ItemPromo />
      <OurProducts />
      <Featured />
      <Benefits />
    </div>
  );
}

MainPage.propTypes = {};

export default MainPage;
