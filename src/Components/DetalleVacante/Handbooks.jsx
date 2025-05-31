import React, { useEffect, useState } from "react";
import axios from "axios";
import "../DetalleVacante/Details.css";
import { Card, Col, Row, Tab, Tabs } from "react-bootstrap";
import CardPublication from "../PublicationSection/CardPublication";

const Handbooks = ({
  globalDomain,
  type,

  backgroundcolorBody2,
}) => {
  const [HandBook, setHandBook] = useState([]);
  // Get HandBook
  useEffect(() => {
    axios.get(`${globalDomain}handbook/${type}?_format=json`).then((res) => {
      setHandBook(res.data);
    });
  }, [type, globalDomain]);

  return (
    <>
      {/* HandBooks*/}
      <div
        className="HandBooks"
        style={{ backgroundColor: backgroundcolorBody2 }}
      >
        {" "}
        <div
          style={{ marginTop: "50px", border: "0px", margin: "auto" }}
          className=" p-3   "
        >
          <div className="container-fluid">
            <div className="row">
              {/* <div className="col-12 col-md-3"></div> */}
              <Row>
                {HandBook.map((item, index) => (
                  <Col key={index} xs={6} sm={6} md={6} lg={3} className="mb-4">
                    <CardPublication
                      key={index}
                      titulo={item.field_handbook_title}
                      texto={globalDomain + `/${item.field_handbook_document}`}
                      imagen="/images/DIC-ICON.png"
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Handbooks;
