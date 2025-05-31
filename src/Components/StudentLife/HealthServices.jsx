import React, { useEffect, useState } from "react";
import axios from "axios";
import "../StudentLife/StudentLife.css";
import CardStudentLife from "./CardStudentLife";

const HealthServices = ({ globalDomain, publicaciones }) => {
  const [healthServices, setHealthServices] = useState([]);
  ///healthServices
  useEffect(() => {
    axios
      .get(globalDomain + `/healthservices/?_format=json`, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        setHealthServices(res.data[0]);
      });
  }, [globalDomain]);

  //split for multiple fields
  const listHealth = healthServices.field_serviceslist;
  let listHealthOK = [];
  if (listHealth) {
    listHealthOK = listHealth.split(", ");
  }

  return (
    <>
      {/* Services */}
      <div className="services">
        <div className="services-ch">
          <div className="col-12 col-md-9 services-1-1">
            <ul style={{  width:"40%" ,height: "400px", overflowY: "auto",  fontFamily:"Roboto"}}>
              {listHealthOK &&
                listHealthOK.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
            </ul>
          </div>
          <div className="col-12 col-md-3 services-1-2">
            <CardStudentLife
              texto={healthServices.field_health_services}
              imagen={publicaciones[0]}
                tipo="normal"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthServices;
