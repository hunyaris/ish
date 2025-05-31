import axios from "axios";
import React, { useEffect, useState } from "react";
import CardPublication from "./CardPublication";
import "../PublicationSection/PublicationSection.css";
import { Col, Container, Row } from "react-bootstrap";
import CardTemporal from "./CardTemporal";

const Publicacionessection = ({  globalDomain }) => {
  const [program, setProgram] = useState([]);
  //Program
  useEffect(() => {
    axios
      .get(globalDomain + `program/?_format=json`, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        setProgram(res.data);
      });
  }, [globalDomain]);

  return (
    <>
      <section className="section-publication">
        <Row>
          {program.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={3} className="mb-4">

              <CardTemporal

                titulo={item.title}
                texto={item.body}
                title={item.field_program_files_1}
                doc={globalDomain + item.field_program_files}
              />

            </Col>
          ))}

          <div className="separadorExtra"></div>
        </Row>
      </section>
    </>
  );
};

export default Publicacionessection;
