import React, { useEffect, useState } from "react";
import "../Banner/Banner.css";
import axios from "axios";

const gradientesPorTaxonomía = {

};

const Banne = ({ globalDomain, taxionomy }) => {

  const [banner, setBanner] = useState([]);
  useEffect(() => {
    axios
      .get(`${globalDomain}banner/${taxionomy}?_format=json`)
      .then((res) => {
        setBanner(res.data[0]);
      });
  }, [taxionomy, globalDomain]);




  const gradienteActual =
    gradientesPorTaxonomía[taxionomy] ||
    "linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 93%)";
  return (
    <>
      {/* Banner */}
      <div
        className="head-banner"
        style={{
          backgroundImage: `url(${globalDomain}/${banner.field_image_header})`,
        }}
      >
        <div
          className="texto-cuadrado-banner"
          style={{ background: gradienteActual }}
        >
          <h1 className="sitiosdeinterestitulo-banner">
            {banner.field_header_name}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Banne;
