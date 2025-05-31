import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Directory/Directory.css";
import ParentCard from "../../PTSACouncil/ParentCard/ParentCard";

const Directory = ({ globalDomain }) => {

  const [ishboard, setIshBoard] = useState([]);
  // Get ISHBOARD
  useEffect(() => {
    axios.get(`${globalDomain}ishboard/?_format=json`).then((res) => {
      setIshBoard(res.data);
    });
  }, [globalDomain]);

  return (
    <section className="directory">
      <h1>
        <span
          style={{
            fontSize: "15vh",
            fontWeight: "600",
            color: "#ffb608",
          }}
        >
          ISH{" "}
        </span>{" "}
        <span
          style={{
            fontWeight: 500,
            fontSize: "40px",
            color: "#1c2298",
          }}
        >
          BOARD
        </span>
      </h1>
      <div className="directory-container ">
        <div className="directory-cards">
          {ishboard.map((item, index) => (
            <div key={index}>
              <ParentCard
                img={item.field_image_board}
                titulo={item.field_title_board}
                texto={item.field_description_board}
                globalDomain={globalDomain}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directory;
