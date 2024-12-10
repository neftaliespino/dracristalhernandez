import "./App.css";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCreative,
  HashNavigation,
  Mousewheel,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/mousewheel";

import NavBar from "./components/common/NavBar";
import MainPage from "./pages/MainPage";
import IntroductionPage from "./pages/IntroductionPage";
import ServicesPage from "./pages/ServicesPage";
import Expertise from "./pages/Expertise";
import CvPage from "./pages/CvPage";
import ContactPage from "./pages/ContactPage";

import { useEffect } from "react";
import { useTour } from "@reactour/tour";

function App() {
  const { setIsOpen } = useTour();

  useEffect(() => {
    const hasSeenTour = localStorage.getItem("hasSeenTour");
    if (!hasSeenTour) {
      setIsOpen(true);
      localStorage.setItem("hasSeenTour", "true");
    }
  }, []);

  return (
    <>
      <NavBar />
      <Swiper
        direction={"vertical"}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Pagination, HashNavigation, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide data-hash="main">
          <MainPage />
        </SwiperSlide>
        <SwiperSlide data-hash="experience">
          <IntroductionPage />
        </SwiperSlide>
        <SwiperSlide data-hash="about">
          <CvPage />
        </SwiperSlide>
        <SwiperSlide data-hash="expertise">
          <Expertise />
        </SwiperSlide>
        <SwiperSlide data-hash="services">
          <ServicesPage />
        </SwiperSlide>

        <SwiperSlide data-hash="contact">
          <ContactPage />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
