import React, { useEffect, useState } from "react";
import axios from "axios";
import "../StudentLife/StudentLife.css";
import CardStudentLife from "./CardStudentLife";
import Button from "@mui/material/Button";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import LinkIcon from "@mui/icons-material/Link";

const CafeteriaServices = ({ globalDomain, publicaciones, urlCafeteria }) => {
    const [cafeteria, setCafeteria] = useState([]);

  ///cafeteria
  useEffect(() => {
    axios
      .get(globalDomain + `/cafeteriaServices/?_format=json`, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        setCafeteria(res.data[0]);
      });
  }, [globalDomain]);



  return (
    <>
       {/* Cafeteria Services */}
       <div className="test">
        <div className="servicesC">
          <div className="services-1-1C">
            <CardStudentLife
              texto={cafeteria.field_introductory_other_service}
              imagen={publicaciones[1]}
              tipo="normal"
            />
          </div>

          <div className=" services-1-2C">
            <ul>
              <li>
                <Button
                  component="a"
                  href={globalDomain + `/${cafeteria.field_file}`}
                  download
                  target="_blank"
                  variant="contained"
                  startIcon={<ArrowCircleDownIcon />}
                >
                  {cafeteria.field_file_1}
                </Button>
              </li>
              <li>
                <Button
                  component="a"
                  href={urlCafeteria}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  startIcon={<LinkIcon />}
                >
                  Foodsys
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CafeteriaServices;
