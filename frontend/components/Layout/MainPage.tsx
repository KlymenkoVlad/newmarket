import React from "react";
import PropTypes from "prop-types";
import BannerSection from "../MainPageComponents/BannerSection";
import Recommend from "../MainPageComponents/Recommend";
import Categories from "../MainPageComponents/Categories";
import ItemPromo from "../MainPageComponents/ItemPromo";
import Featured from "../MainPageComponents/Featured";
import Benefits from "../MainPageComponents/Benefits";
import Modal from "@/app/Modal";

function MainPage() {
  return (
    <div className="ms:mt-20 mt-6">
      <Modal />
      <BannerSection />
      <Recommend name="The cheapest" sortParam="price" />
      <Categories />
      <ItemPromo />
      <Recommend name="Interesting New" sortParam="-date" />
      <Featured />
      <Benefits />
    </div>
  );
}

MainPage.propTypes = {};

export default MainPage;
