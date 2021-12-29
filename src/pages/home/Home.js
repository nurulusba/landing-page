import React, { Fragment } from "react";
import BannerSection from "../../components/banner-section/BannerSection";
import FooterSection from "../../components/footer/FooterSection";
import Header from "../../components/header/Header";
import HeroSection from "../../components/hero-section/HeroSection";

const Home = () => {
  return (
    <Fragment>
      <BannerSection />
      <Header />
      <HeroSection />
      <FooterSection />
    </Fragment>
  );
};

export default Home;
