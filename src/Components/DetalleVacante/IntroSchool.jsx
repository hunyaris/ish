import React, { useEffect, useState } from "react";
import axios from "axios";
import "../DetalleVacante/Details.css";
import { renderParagraphs } from "../Utils/textUtils";

const IntroSchool = ({
  globalDomain,
  type,
  backgroundcolorTitle,
  backgroundcolorBody,
  fontSiz,
}) => {
  // General Info
  const [primary, setPrimary] = useState([]);
  useEffect(() => {
    axios.get(`${globalDomain}academics/${type}?_format=json`).then((res) => {
      setPrimary(res.data[0]);
    });
  }, [type, globalDomain]);

  return (
    <>
      {/* Intro */}

      <div className="introSchool">
        {" "}
        <div
          style={{ marginTop: "50px", border: "0px" }}
          className=" p-3 mb-5  "
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-3 ">
                <div
                  className="photoSchool"
                  style={{ backgroundImage: backgroundcolorTitle }}
                >
                  <div className="cuadroTexto">
                    {" "}
                    <h1 className="titleSchool">
                      {" "}
                      {/* Lorem ipsum dolor sit amet, consectetuer */}
                      {primary.field_subtitle}
                    </h1>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-9 ">
                <div
                  className="bodySchool"
                  style={{ backgroundColor: backgroundcolorBody }}
                >
                  <div className="cuadrobodyTexto">
                    {" "}
                    <p style={{ textAlign: "center" }} className="bodyTexto">
                      {primary.description}
                    </p>
                  </div>
                </div>
                <p className="subtitle-academics" style={{ color: fontSiz , fontFamily:"Roboto"}}>
                  {/* {primary.field_second_text} */}
                  {renderParagraphs(primary.field_second_text)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroSchool;
