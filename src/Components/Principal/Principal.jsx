import axios from "axios";
import React, { useEffect, useState } from "react";
import Copyright from "../Copyright/Copyright";
import Footer from "../Footer/Footer";
import IntroductorySlider from "../IntroductorySlider/IntroductorySlider";
import Academics from "../Acciones/Academics";
import Publicacionessection from "../PublicationSection/PublicationSection";
import WelcomeISH from "../WelcomeISH/WelcomeISH";
import Acreditations from "../Acreditation/Acreditation";
import Separador from "../Acreditation/Separador";
import Number from "../Numbers/Number";

const Principal = ({ globalDomain,quicks }) => {
  return (
    <>
      <IntroductorySlider globalDomain={globalDomain} />
      {/* falto yo */}
      <WelcomeISH globalDomain={globalDomain} message={"message Home"}  />
      <Academics

        globalDomain={globalDomain}
      />
      <Publicacionessection  globalDomain={globalDomain} />
      <Number globalDomain={globalDomain} />
      <Separador />{" "}
      <Acreditations  globalDomain={globalDomain} />
    </>
  );
};

export default Principal;
