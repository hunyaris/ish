import React, { useState, useEffect } from "react";
import axios from "axios";

const Copyright = ({ globalDomain }) => {
  const [copyright, setCopyright] = useState({});

  useEffect(() => {
    axios.get(globalDomain+`entity/block/copyrightfooter?_format=json`)
      .then((response) => {
        setCopyright(response.data.settings);
      });
  }, [globalDomain]);

  return (
    <div style={{ width: "100%", height: "20%", alignItems: "center", justifyContent: "center", marginTop: "2%" }}>
      <p style={{ color: "#FFFFf", fontSize: "15px" ,fontFamily:"Roboto"}}>
        © Copyright {copyright.year_to_date}  {copyright.organization_name}
      </p>
    </div>
  );
};

export default Copyright;