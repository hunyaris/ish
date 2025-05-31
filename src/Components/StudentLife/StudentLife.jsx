import React, { useEffect, useState, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../StudentLife/StudentLife.css";
import { QuickLinksContext } from '../../Context/Context';

import CardStudentLife from "./CardStudentLife";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import LinkIcon from "@mui/icons-material/Link";
import Banne from "../Banner/Banner";
import HealthServices from "./HealthServices";
import CafeteriaServices from "./CafeteriaServices";
import TransportationServices from "./TransportationServices";


const StudentLife = ({ globalDomain }) => {
  const [studentLife, setStudentLife] = useState([]);
  const cafeteria = useContext(QuickLinksContext);
  const filterCafeteria= cafeteria.filter((link) => link.title === "Foodsys");
  const urlCafeteria = filterCafeteria.length > 0 ? filterCafeteria[0].url : null;





  // General Student Life
  useEffect(() => {
    axios
      .get(globalDomain + `studentLife/?_format=json`, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        setStudentLife(res.data[0]);
      });
  }, [globalDomain]);

  const publicaciones = [
    "/images/health.png",
    "/images/cafetera.png",
    "/images/transpot.png",
  ];

  return (
    <>
      {/* Banner */}
      <Banne globalDomain={globalDomain} taxionomy={"studentlife"} />

      {/* Intro Extra */}

      <div className="studentlife">
        <div
          style={{ marginTop: "50px", border: "0px" }}
          className=" p-3 mb-5  "
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-9 ancho1 ">
                <div className="bodySchoolStudenLife">
                  <p className="cuadrobodyTextoLife" style={{
               fontFamily:"Roboto"
              }}>
                    {studentLife.field_subtitle_right_}
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-3  ancho2">
                <div className="studentlifeExtra">
                  <h1
                    className="titleStudentLife"
                    style={{ color: "white", fontWeight: "800" ,fontFamily:"Roboto"}}
                  >
                    EXTRA<span className="text-with-outline"          style={{ fontFamily:"Roboto"}}>CURRICULAR</span>
                  </h1>
                </div>
                <div className="ancho3">
                  <p style={{ color: "rgb(92, 92, 92)" ,fontFamily:"Roboto"}}>
                    {" "}
                    {studentLife.field_text_introductory}
                  </p>

                  <Button
                    component={Link}
                    to="/extracurricular"
                    variant="contained"
                    startIcon={<LinkIcon />}
                    tabIndex={-1}
                  >
                    Extracurricular
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="separadorExtra"></div>

      <HealthServices
        globalDomain={globalDomain}
        publicaciones={publicaciones}


      />
      <CafeteriaServices
        globalDomain={globalDomain}
        publicaciones={publicaciones}
        urlCafeteria={urlCafeteria}


      />
      <TransportationServices
        globalDomain={globalDomain}
        publicaciones={publicaciones}

      />
    </>
  );
};

export default StudentLife;
