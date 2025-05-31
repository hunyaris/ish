import axios from "axios";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../IntroductorySlider/IntroductorySlider.css";

const IntroductorySlider = ({  globalDomain }) => {

  const [slider, setSlider] = useState([]);
  // Sliders FRONT
  useEffect(() => {
    axios
      .get(globalDomain + `sliders/?_format=json`, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        setSlider(res.data);
      });
  }, [globalDomain]);




  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    fade: true,
    cssEase: "linear",
  };

  return (
    <section className="section-carrusel">
      <div className="  carouselControles ">
        <Slider {...settings}>
          {slider.map((element, index) => (
            <div key={index} className="listControl container-large-slider">
              <img

                src={globalDomain + element.field_image}
                alt={"`Imagen ${index}`"}
                className="slider-image"
              />
              <div className="text-slider">{element.body}</div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default IntroductorySlider;
