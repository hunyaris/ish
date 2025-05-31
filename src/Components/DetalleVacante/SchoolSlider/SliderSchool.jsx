import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../SchoolSlider/SchoolSlider.css";
import MaskSVG from "../../Mask/Mask";

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <span className="closeButton" onClick={onClose}>
          &times;
        </span>
        <img src={image} alt="Imagen ampliada" />
      </div>
    </div>
  );
};

const SliderSchool = ({ imagenes, globalDomain }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
  };
  return (
    <section className="section-SliderSchool">
      <div

        className="carouselControles "
        id="listControl"
      >
        <Slider {...settings}>
          {imagenes.map((element, index) => (
            <div key={index} style={{ margin: "1%" }}>
              <div
                style={{ width: "60%", height: "100%" }}
                className="listControl "
              >
                <img
                  loading="lazy"
                  src={globalDomain + element.field_slider_image}
                  onClick={() =>
                    handleImageClick(globalDomain + element.field_slider_image)
                  }
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        image={selectedImage}
      />
    </section>
  );
};
export default SliderSchool;
