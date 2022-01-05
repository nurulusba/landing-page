import React, { Fragment } from "react";
import BannerSection from "../banner-section/BannerSection";
import FooterSection from "../footer/FooterSection";
import Header from "../header/Header";

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <BannerSection />
      <Header />
      {children}
      <FooterSection />
    </Fragment>
  );
};

export default MainLayout;
