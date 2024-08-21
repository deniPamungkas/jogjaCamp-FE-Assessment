import React from "react";
import Card from "../components/card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestLayout = () => {
  const CustomArrow = ({ className, style, onClick }) => (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );

  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoPlay: true,
  };
  return (
    <div className="flex flex-col gap-y-5 py-5 text-black font-bold text-3xl px-5 xl:px-52">
      <section className="w-full h-fit slider-container">
        <Slider {...settings}>
          <div className="w-full h-[200px] md:h-[400px] xl:h[500px] rounded-xl overflow-hidden object-cover">
            <img
              src="/images/borobudur.jpg"
              alt="borobudur"
              className="-translate-y-[160px] md:-translate-y-[300px] xl:-translate-y-[500px]"
            />
          </div>
          <div className="w-full h-[200px] md:h-[400px] xl:h[500px] rounded-xl overflow-hidden object-cover">
            <img
              src="/images/gmerapi.jpg"
              alt="gmerapi"
              className="-translate-y-[170px] md:-translate-y-[300px] xl:-translate-y-[500px]"
            />
          </div>
          <div className="w-full h-[200px] md:h-[400px] xl:h[500px] rounded-xl overflow-hidden object-cover">
            <img
              src="/images/gmerbabu.jpg"
              alt="gmerbabu"
              className="-translate-y-[130px] md:-translate-y-[300px] xl:-translate-y-[430px]"
            />
          </div>
          <div className="w-full h-[200px] md:h-[400px] xl:h[500px] rounded-xl overflow-hidden object-cover">
            <img
              src="/images/gbromo.jpg"
              alt="gbromo"
              className="xl:-translate-y-[100px]"
            />
          </div>
        </Slider>
      </section>
      <section className="w-full h-fit grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
};

export default TestLayout;
