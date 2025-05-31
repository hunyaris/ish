import StudentCouncilSlider from "./StudentCouncilSlider/StudentCouncilSlider";
import "../StudentCouncil/StudentCouncil.css";
import React, { useEffect, useState } from "react";
import Council from "./CouncilCard/Council";
import axios from "axios";
import Banne from "../Banner/Banner";
import ParentIntro from "../PTSACouncil/ParentIntro";

const StudentCouncil = ({ globalDomain }) => {

  return (
    <>
      {/* Banner */}

      <Banne globalDomain={globalDomain} taxionomy={"student"} />
      <div className="colectivo">
      <div className="overlay-image"></div>
        <ParentIntro globalDomain={globalDomain} category={"studentCouncil"} />
        <Council globalDomain={globalDomain} />
        <StudentCouncilSlider
           globalDomain={globalDomain}
        />
      </div>
    </>
  );
};

export default StudentCouncil;
