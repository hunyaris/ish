import React from "react";
import ParentCouncilSlider from "./ParentCouncilSlider/ParentCouncilSlider";
import "./ParentCouncil..css";
import Parent from "./ParentCard/Parent";
import Banne from "../Banner/Banner";
import ParentIntro from "./ParentIntro";

const ParentCouncil = ({globalDomain}) => {

  return (
    <>

<Banne globalDomain={globalDomain} taxionomy={"ptsa"} />



      <div className="colectivo">
      <div className="overlay-image"></div>

         <ParentIntro  globalDomain={globalDomain} category={"ptsa"} />
        <Parent  globalDomain={globalDomain} category={"ptsa"} />
        <ParentCouncilSlider  globalDomain={globalDomain}  />
      </div>
    </>
  );
};

export default ParentCouncil;
