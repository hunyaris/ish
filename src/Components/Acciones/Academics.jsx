import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardAcademics from "./CardAcademics";

import "../Acciones/Academics.css";

const Academics = ({ globalDomain }) => {
  const [summaryAcademics, setsummaryAcademics] = useState([]);

  const schoolTypes = ["primaryschool", "middleschool", "highschool"];

  // ACADEMICS SUMMARY
  useEffect(() => {
    axios
      .get(globalDomain + `academics/?_format=json`, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        setsummaryAcademics(res.data);
      });
  }, [globalDomain]);

  return (
    <>
      <section className="section-academics">
        <div className="divOpacity ">
          <Row style={{ margin: "auto" }}>
            <Col
              className="d-flex justify-content-center flex-wrap text-center mt-5 px-3"
              xs={{ order: 12 }}
            >
              {summaryAcademics.map((item, index) => (
                <CardAcademics
                  key={index}
                  img={item.cardImage}
                  titulo={item.title.substring(0, 75)}
                  texto={item.description.substring(0, 120)}
                  link={`/school/${schoolTypes[index]}`}
                  globalDomain={globalDomain}
                />
              ))}
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Academics;
