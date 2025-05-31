
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../DetalleVacante/Details.css";
import { Card, Col, Row, Tab, Tabs } from "react-bootstrap";
import { renderParagraphs } from "../Utils/textUtils";

const CurriculumDetails = ({
  globalDomain,
  type,



}) => {




  const [titles, setTitles] = useState([]);
  const [details, setDetails] = useState([]);

  // Curriculum details
  useEffect(() => {
    axios
      .get(`${globalDomain}cDetailsAcademic/${type}?_format=json`)
      .then((res) => {

        const extractedTitles = res.data.map((item) => item.field_titleee);
        setTitles(extractedTitles);
        setDetails(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [type, globalDomain]);




  return (
    <>
  {/* Curriculum Details */}

  <div className="curriculum-details">
        {" "}
        <div
          style={{ marginTop: "50px", border: "0px" }}
          className=" p-3 mb-5  "
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-3">
                <h1 className="h1-details">Curriculum Details</h1>
              </div>

              <Tabs
                id="fill-tab-example"
                defaultActiveKey={titles[0]}
                className="mb-3 "
                fill
                style={{ width: "100%" }} // Add this if necessary
              >
                {titles.map((t, n) => {
                  const efemeridesFiltradas = details.filter(
                    (efe) => efe.field_titleee === t
                  );

                  efemeridesFiltradas.sort(
                    (a, b) => parseInt(a.dia) - parseInt(b.dia)
                  );

                  return (
                    <Tab
                      key={t}
                      onClick={() => handlemeses(t)}
                      eventKey={t}
                      title={t}
                      style={{
                        height: "auto",
                        width: "100%",
                      }}
                      className="tab"
                    >
                      {efemeridesFiltradas.map((t, n) => (
                        <Card key={n}>
                          <Card.Body
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <div style={{ flex: 1 }}>
                              <Card.Text style={{
               fontFamily:"Roboto"
              }}>
                                {/* {t?.field_description_curriculum_det} */}
                                {renderParagraphs(t?.field_description_curriculum_det)}

                              </Card.Text>
                            </div>
                            <img
                              loading="lazy"
                              src={
                                globalDomain +
                                `${t.field_curriculum_details_image}`
                              }
                              alt={t.field_w}
                              style={{
                                width: "30%",
                                height: "300px",
                              }}
                            />
                          </Card.Body>
                        </Card>
                      ))}
                    </Tab>
                  );
                })}
              </Tabs>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default CurriculumDetails;


