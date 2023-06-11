import React from "react";
import PropTypes from "prop-types";
import BannerSection from "../Common/BannerSection";
import Todays from "../Common/Todays";
import Categories from "../Common/Categories";
import BestSelling from "../Common/BestSelling";
import ItemPromo from "../Common/ItemPromo";
import OurProducts from "../Common/OurProducts";
import Featured from "../Common/Featured";
import Benefits from "../Common/Benefits";

function MainPage(props) {
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
