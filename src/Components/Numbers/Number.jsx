import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Numbers/Number.css";
import { ListGroup, ListGroupItem, Row } from "react-bootstrap";

const Number = ({ globalDomain }) => {
  const [number, setNumber] = useState([]);

    //Numbers
    useEffect(() => {
      axios
        .get(globalDomain + `number/?_format=json`, {
          headers: {
            "content-type": "application/json",
          },
        })
        .then((res) => {
          setNumber(res.data);
        });
    }, [globalDomain]);
  const mapeoEstilos = {
    Students: {
      color: "#ffb608",
      fontSize: "24px",
      circleSize: "150px",
      circleColor: "#ffb608",
    },
    "Age of students": {
      color: "#83af3d",
      fontSize: "20px",
      circleSize: "100px",
      circleColor: "#83af3d",
    },
    Countries: {
      color: "#2b3380",
      fontSize: "24px",
      circleSize: "90px",
      circleColor: "#2b3380",
    },
    "Full-time facul-ty members": {
      color: "#72aad7",
      fontSize: "24px",
      circleSize: "90px",
      circleColor: "#72aad7",
    },
    Campus: {
      color: "#9d9c9c",
      fontSize: "24px",
      circleSize: "100px",
      circleColor: "#9d9c9c",
    },
    Since: {
      color: "#c0912b",
      fontSize: "24px",
      circleSize: "140px",
      circleColor: "#c0912b",
    },
  };

  const margins = ["0", "150px", "0", "130px", "30px", "130px"];

  return (
    <section className="ListGroups-Number">

      <Row>
        <ListGroup horizontal>
          {number.map((principio, index) => {

            const estilo = mapeoEstilos[principio.title] || {
              fontSize: "16px",
              circleSize: "80px",
              circleColor: "black",
            };

            const { color, fontSize, circleSize, circleColor } = estilo;

            return (
              <ListGroupItem key={index} style={{ marginTop: margins[index] }}>
                <div className="contenedor-raya-vertical">
                  <div
                    className="circle-vertical"
                    style={{
                      width: circleSize,
                      height: circleSize,
                      backgroundColor: circleColor,
                      borderRadius: "50%",
                      fontSize: fontSize,
                    }}
                  >
                    <div className="number-vertical">
                      <p>{principio.field_n}</p>
                    </div>
                  </div>

                  {index < number.length && (
                    <div className="raya-vertical">
                      <div
                        className="recta-vertical"
                        style={{ borderColor: circleColor }}
                      ></div>
                    </div>
                  )}
                </div>

                <div className="pace-vertical">
                  <p className="label-vertical" style={{ color, fontSize }}>
                    {principio.title}
                  </p>
                </div>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Row>
    </section>
  );
};

export default Number;
