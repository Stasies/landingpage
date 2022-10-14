import React, { useEffect, useState } from "react";
import Artists from "../components/artists/Artists";
import Community from "../components/community/Community";
import Footer from "../components/footer/Footer";
import Formats from "../components/formats/Formats";
import Gallery from "../components/gallery/Gallery";
import Header from "../components/header/Header";
import MobileHeader from "../components/header/mobile/MobileHeader";
import HeroSection from "../components/hero/HeroSection";
import RunningLine from "../components/runningLine/RunningLine";
import Services from "../components/services/Services";
import Studio from "../components/studio/Studio";
import Support from "../components/support/Support";
import { PageContainer } from "./HomepageElements";

const Homepage = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>();
  window.addEventListener("resize", resize);
  window.addEventListener("load", resize);
  function resize() {
    setWindowWidth(window.innerWidth);
  }

  return (
    <PageContainer className={openNav ? "scroll_lock" : ""}>
      {windowWidth! < 992 ? (
        <MobileHeader openNav={openNav} setOpenNav={setOpenNav} />
      ) : (
        <Header />
      )}
      <HeroSection />
      <Formats />
      <Services />
      <Support />
      <Community />
      <Gallery />
      <RunningLine />
      <Artists />
      <Studio />
      <Footer />
    </PageContainer>
  );
};

export default Homepage;
