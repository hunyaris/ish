import React from "react";
import Slider from "react-slick";
import CardPublication from "../../PublicationSection/CardPublication";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../ExtraSliderCard/ExtraSlider.css";
import CardTraditional from "./CardTraditional";

const ExtraSlider = ({ publicaciones, globalDomain }) => {
  const settingss = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1550,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 469,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Section-Card-Activities">
      <Slider {...settingss}>
        {publicaciones.map((item, index) => (
          <CardTraditional
            key={index}
            titulo={item.title}
            texto={item.field_summary}
            imagen={globalDomain + item.field_imagen_traditional_events}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ExtraSlider;
