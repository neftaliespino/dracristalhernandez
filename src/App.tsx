import "./App.css";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, HashNavigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";

import { IconButton } from "@mui/material";
import NavBar from "./components/common/NavBar";
import MainPage from "./pages/MainPage";
import IntroductionPage from "./pages/IntroductionPage";
import ServicesPage from "./pages/ServicesPage";
import Expertise from "./pages/Expertise";
import CvPage from "./pages/CvPage";
import ContactPage from "./pages/ContactPage";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

function App() {
  const slideHashes = [
    "main",
    "experience",
    "services",
    "expertise",
    "cv",
    "about",
  ];
  const goToNextSlide = () => {
    const currentHash = window.location.hash.replace("#", "");
    const currentIndex = slideHashes.indexOf(currentHash);
    const nextIndex = (currentIndex + 1) % slideHashes.length;
    window.location.hash = slideHashes[nextIndex];
  };

  const goToPrevSlide = () => {
    const currentHash = window.location.hash.replace("#", "");
    let currentIndex = slideHashes.indexOf(currentHash);
    currentIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : 5;
    const nextIndex = currentIndex % slideHashes.length;
    window.location.hash = slideHashes[nextIndex];
  };
  return (
    <>
      <NavBar />

      <IconButton
        onClick={goToNextSlide}
        style={{
          position: "fixed",
          top: "50%",
          right: "0px",
          zIndex: 100,
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        <ArrowCircleRightIcon color="secondary" />
      </IconButton>
      <IconButton
        onClick={goToPrevSlide}
        style={{
          position: "fixed",
          top: "50%",
          left: "0px",
          zIndex: 100,
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        <ArrowCircleLeftIcon color="secondary" />
      </IconButton>

      <Swiper
        grabCursor={true}
        effect={"creative"}
        hashNavigation={{
          watchState: true,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: [0, "100%", 0],
          },
        }}
        modules={[EffectCreative, HashNavigation]}
        className="mySwiper"
      >
        <SwiperSlide data-hash="main">
          <MainPage />
        </SwiperSlide>
        <SwiperSlide data-hash="experience">
          <IntroductionPage />
        </SwiperSlide>
        <SwiperSlide data-hash="services">
          <ServicesPage />
        </SwiperSlide>
        <SwiperSlide data-hash="expertise">
          <Expertise />
        </SwiperSlide>
        <SwiperSlide data-hash="cv">
          <CvPage />
        </SwiperSlide>
        <SwiperSlide data-hash="about">
          <ContactPage />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
