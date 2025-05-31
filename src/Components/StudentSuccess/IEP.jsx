import React, { useEffect, useState } from "react";
import axios from "axios";
import "./StudentSuccess.css";
import CardStudentLife from "../StudentLife/CardStudentLife";

const IEP = ({ text1,imagen }) => {



  return (
    <>

       <div className="test">
        <div className="servicesC">
          <div className="services-1-1C">
            <CardStudentLife
              texto={""}
              imagen={imagen}
              tipo="normal"
            />
          </div>

          <div className=" services-IEP-1-2C">
          <ul style={{  width:"40%" ,height: "400px", overflowY: "auto",  fontFamily:"Roboto"}}>
                <p>{text1}</p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default IEP;
