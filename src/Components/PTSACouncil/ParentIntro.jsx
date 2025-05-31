import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ParentCouncil..css";

const ParentIntro = ({ globalDomain, category }) => {
  const [parentintro, setParentIntro] = useState([]);

  useEffect(() => {
    axios
      .get(`${globalDomain}/studentcouncil/${category}?_format=json`)
      .then((res) => {
        setParentIntro(res.data[0]);
      });
  }, [category, globalDomain]);

  return (
    <>
      <div className="intro-council">
        <div className="intro-council-ver"></div>
        <div className="intro-council-text">
          <h1 className="council-text"> {parentintro.body}</h1>
        </div>
        <div className="intro-council-words"></div>
      </div>
    </>
  );
};

export default ParentIntro;
