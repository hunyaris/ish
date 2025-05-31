import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Acreditation/Acreditation.css";
import CardAcreditations from "./CardAcreditations";
import { Row } from "react-bootstrap";

const Acreditation = ({  globalDomain }) => {
  const [acreditaions, setAcreditaions] = useState([]);


  //_Accreditations
  useEffect(() => {
    axios
      .get(globalDomain + `acreditaions/?_format=json`, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        setAcreditaions(res.data);
      });
  }, [globalDomain]);
  return (
    <section className="section-acreditation">
      <div className="p-3">
        <div className="container-fluid">
          <Row style={{ display: "flex", justifyContent: "center" }}>
            {acreditaions.map((item, index) => (
              <div key={index} className="col">
                <CardAcreditations icon={item.field_image} globalDomain={globalDomain} />
              </div>
            ))}
          </Row>
        </div>
      </div>

    </section>
  );
};

export default Acreditation;