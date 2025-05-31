import React, { useEffect, useState } from "react";
import axios from "axios";
import "./StudentSuccess.css";
import CardStudentLife from "../StudentLife/CardStudentLife";

const CS = ({ text2,imagen }) => {
    const [transportation, setTransportation] = useState([]);
  return (
    <>
    {/* Transportation */}
    <div className="servicesT">
        <div className="services-chT">
          <div className="col-12 col-md-9 services-CS-1-1T ">
          <ul style={{  width:"40%" ,height: "400px", overflowY: "auto",  fontFamily:"Roboto"}}>
                <p>{text2}</p>
            </ul>
          </div>
          <div className="col-12 col-md-3  services-1-2T">
            <CardStudentLife
              texto={""}
              imagen={imagen}
              tipo="normal"

            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CS;
