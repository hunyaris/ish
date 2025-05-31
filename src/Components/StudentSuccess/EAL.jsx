import React, { useEffect, useState } from "react";
import axios from "axios";
import "./StudentSuccess.css";
import CardStudentLife from "../StudentLife/CardStudentLife";


const EAL = ({ text , imagen}) => {




  return (
    <>
      {/* Services */}
      <div className="services">
        <div className="services-ch">
          <div className="col-12 col-md-9 services-EAL-1-1" >
            <ul style={{  width:"40%" ,height: "400px", overflowY: "auto",  fontFamily:"Roboto"}}>
                <p>{text}</p>
            </ul>
          </div>
          <div className="col-12 col-md-3 services-1-2">
            <CardStudentLife
              texto={""}
              imagen={ imagen}
                tipo="normal"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EAL;
