import React from "react";
import "../Principles/Principles.css";
import { Row, Col } from "react-bootstrap";
import CardPrinciples from "./CardPrinciples";

const Principles = ({ texto, globalDomain, images }) => {
  const learningPrinciplesString = texto.field_learning_principles;

  let learningPrinciples = [];
  if (learningPrinciplesString) {
    learningPrinciples = learningPrinciplesString.split(", ");
  }

  return (
    <section className="Principles">
      <Row>
        <h1>
          <span style={{ fontWeight: 700, fontSize: "60px", fontFamily:"Roboto" }}>Learning</span>{" "}
          Principles
        </h1>
        <hr style={{ backgroundColor: "black", height: "1px" }} />
      </Row>

      <Row>
        {/* Columna de imagen */}
        <Col xs={12} md={6} className="mb-4 text-center">
          <img
            src={globalDomain + images}
            alt="Descripción de la imagen"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "400px",
              objectFit: "cover",
            }}
          />
        </Col>

        {/* Columna de principios de aprendizaje */}
        <Col xs={12} md={6}>
          <Row>
            {learningPrinciples.map((principle, index) => (
              <Col key={index} xs={12} sm={6} className="mb-4">
                <CardPrinciples texto={principle} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Principles;