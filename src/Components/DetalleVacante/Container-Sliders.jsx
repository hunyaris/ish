import React, { useEffect, useState } from "react";
import axios from "axios";
import "../DetalleVacante/Details.css";
import SliderSchool from "./SchoolSlider/SliderSchool";



const ContainerSliders = ({
  globalDomain,
  type,


}) => {

  const [slider_academics, setSlider_academics] = useState([]);
      // Get Slider Academics
  useEffect(() => {
    axios
      .get(`${globalDomain}slider_academics/${type}?_format=json`)
      .then((res) => {
        setSlider_academics(res.data);
      });
  }, [type, globalDomain]);

  return (
    <>
    {/* Carrusel */}
    <div className="slider-school">

          <div className="container-fluid">
            <div className="row">

              <SliderSchool
                imagenes={slider_academics}
                globalDomain={globalDomain}
              />
            </div>
          </div>
        </div>


    </>
  );
};

export default ContainerSliders;
