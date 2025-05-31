import React, { useEffect, useState } from "react";
import axios from "axios";
import "../StudentLife/StudentLife.css";
import CardStudentLife from "./CardStudentLife";
import Button from "@mui/material/Button";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import LinkIcon from "@mui/icons-material/Link";


const TransportationServices = ({ globalDomain, publicaciones }) => {
    const [transportation, setTransportation] = useState([]);
   ///transportation
   useEffect(() => {
    axios
      .get(globalDomain + `/transportationservices/?_format=json`, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        setTransportation(res.data[0]);
      });
  }, [globalDomain]);

  //split multiples document
  const transportationFiles = transportation.field_flies_;
  let transportationFilesOk = [];
  if (transportationFiles) {
    transportationFilesOk = transportationFiles.split(", ");
  }

  //split multiples name document
  const transportationNaFiles = transportation.field_flies__1;
  let transportationNaFilesOk = [];
  if (transportationNaFiles) {
    transportationNaFilesOk = transportationNaFiles.split(", ");
  }

  const combinedFiles = transportationFilesOk.map((link, index) => ({
    url: link,
    title: transportationNaFilesOk[index] || `Documento ${index + 1}`,
  }));


  return (
    <>
    {/* Transportation */}
    <div className="servicesT">
        <div className="services-chT">
          <div className="col-12 col-md-9 services-1-1T ">
          <ul style={{     fontFamily:"Roboto"}}>
      {combinedFiles.map(({ url, title }, index) => (
        <li key={index}>
          <Button
            component="a"
            href={url}
            target="_blank"
            variant="contained"
            startIcon={<ArrowCircleDownIcon />}
          >
            {title}
          </Button>
        </li>
      ))}
    </ul>
          </div>
          <div className="col-12 col-md-3  services-1-2T">
            <CardStudentLife
              texto={transportation.field_text_introductory_transpor}
              imagen={publicaciones[2]}
              tipo="especial"
              correo={transportation.field_contact}



            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TransportationServices;
