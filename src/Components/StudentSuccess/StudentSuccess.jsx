import React, { useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./StudentSuccess.css";

import Banne from "../Banner/Banner";
import HealthServices from "../StudentLife/HealthServices";
import CafeteriaServices from "../StudentLife/CafeteriaServices";
import TransportationServices from "../StudentLife/TransportationServices";
import EAL from "./EAL";
import IEP from "./IEP";
import CS from "./CS";



const StudentSuccess = ({ globalDomain }) => {
  const [studentSuccess, setStudentSuccess] = useState([]);


  // General Student Life
  useEffect(() => {
    axios
      .get(globalDomain + `studentsuccess/?_format=json`, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        setStudentSuccess(res.data[0]);
      });
  }, [globalDomain]);

  const publicaciones = [
    "/images/EAL.png",
    "/images/IEP.png",
    "/images/CS.png",
  ];

  return (
    <>
      {/* Banner */}
      <Banne globalDomain={globalDomain} taxionomy={"studentsucces"} />

      {/* Intro Extra */}

      <div className="studentsuccess">
        <div
          style={{ marginTop: "50px", border: "0px" }}
          className=" p-3 mb-5  "
        >
          <div className="container-fluid">
            <div className="row">
              {/* <div className="col-12 col-md-9 ancho1 ">
                <div className="bodySchoolStudenLife">
                  <p className="cuadrobodyTextoLife" style={{
               fontFamily:"Roboto"
              }}>
                    {studentSuccess.field_introductory_student_succe}
                  </p>
                </div>
              </div> */}
              <div className="col-12 col-md-3  ancho2">

                <div className="ancho33">
                  <p style={{ color: "rgb(92, 92, 92)" ,fontFamily:"Roboto"}}>
                    {" "}
                    {studentSuccess.field_introductory_student_succe}
                  </p>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="separadorExtra"></div>
      <EAL

        text={studentSuccess.field_english_as_an_additional_l}
        imagen={publicaciones[0]}



      />

<IEP
        text1={studentSuccess.field_individual_education_plan_}
        imagen={publicaciones[1]}


      />

<CS
       text2={studentSuccess.field_individual_education_plan_}
       imagen={publicaciones[2]}

      />

      {/*

    */}
    </>
  );
};

export default StudentSuccess;
