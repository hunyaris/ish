import History from "./History/History";
import TabsHistory from "./TabsHistory/TabsHistory";
import Mision from "./Mision/Mision";
import "../AboutUs/AboutUs.css";
import Principles from "./Principles/Principles";
import ListGroups from "./ListGroups/ListGroups";
import Employement from "./Employement/Employement";
import Banne from "../Banner/Banner";
import axios from "axios";
import React, { useEffect, useState,useContext } from "react";
import Directory from "./Directory/Directoy";
import { QuickLinksContext } from "../../Context/Context";
const AboutUs = ({ globalDomain }) => {

  const admisionAbout = useContext(QuickLinksContext);
  const filterAdmisionAbout = admisionAbout.filter((link) => link.title === "Admissions");
  const urlApply = filterAdmisionAbout.length > 0 ? filterAdmisionAbout[0].url : null;
  const [aboutusGeneral, setAboutusGeneral] = useState([]);
  // About General
  useEffect(() => {
    axios
      .get(globalDomain + `aboutusGeneral/?_format=json`, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        setAboutusGeneral(res.data[0]);
      });
  }, [globalDomain]);



  return (
    <>
      <Banne globalDomain={globalDomain} taxionomy={"aboutUs"} />
      <Principles
        texto={aboutusGeneral}
        globalDomain={globalDomain}
        images={aboutusGeneral.field_learning_principles_image}
      />
      <div className="separadorExtra"></div>
      <Mision
        mision={aboutusGeneral.field_mission}
        vision={aboutusGeneral.field_vision}
      />
      <History field_ish_history={aboutusGeneral.field_ish_history} />

      <TabsHistory globalDomain={globalDomain} />
      <div className="separadorExtra"></div>

<Directory globalDomain={globalDomain}/>
      <ListGroups globalDomain={globalDomain} urlApply={urlApply}/>
      <div className="separadorExtra"></div>
      <Employement globalDomain={globalDomain} />
    </>
  );
};

export default AboutUs;
