import React, { useEffect, useState } from "react";
import axios from "axios";
import "../DetalleVacante/Details.css";
import { useParams } from "react-router-dom";
import Banne from "../Banner/Banner";
import IntroSchool from "./IntroSchool";
import CurriculumDetails from "./Curriculum-details";
import Handbooks from "./Handbooks";
import ContainerSliders from "./Container-Sliders";

const SchoolPageComponent = ({ globalDomain }) => {
  const { type } = useParams();


  const schoolType = type.replace("school", "");
  const stylesBySchoolType = {
    primary: {
      photoSchool: "linear-gradient(to bottom, #f1e0b9, #edd59d, #e8c980, #e3be63, #deb245)",
      bodySchool: "#a4bac1",
      subtitleAcademics: "#8eb4cd",
      handbookBackground: "#51808f",
    },
    middle: {
      photoSchool: " linear-gradient(to bottom, #d6e5be, #c6dba5, #b6d18c, #a6c673, #96bc5a)",
      bodySchool: "#deb245",
      subtitleAcademics: "#91b952",
      handbookBackground: "#91b952",
    },
    high: {
      photoSchool: "linear-gradient(to bottom, #e4e5ef, #bcbfd8, #9699c2, #7175ab, #4c5394)",
      bodySchool: "#90b851",
      subtitleAcademics: "#42498e",
      handbookBackground: "#42498e",
    },
  };

  const currentStyles =    stylesBySchoolType[schoolType] || stylesBySchoolType.primary;
  return (
    <>
      {/* Banner */}
      <Banne globalDomain={globalDomain} taxionomy={type} />
      <section  style={{
        width: "100%",
        height: "fit-content"}}>
      <IntroSchool
        globalDomain={globalDomain}
        type={type}
        backgroundcolorTitle={currentStyles.photoSchool}
        backgroundcolorBody={currentStyles.bodySchool}
         fontSiz={currentStyles.subtitleAcademics}
      />

<CurriculumDetails  globalDomain={globalDomain} type={type}    backgroundcolorBody={currentStyles.bodySchool} />
<Handbooks  globalDomain={globalDomain} type={type}    backgroundcolorBody2={currentStyles.handbookBackground}/>
<ContainerSliders  globalDomain={globalDomain} type={type}   />
</section>
    </>
  );
};

export default SchoolPageComponent;
