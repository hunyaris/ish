import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Employement/Employement.css";
import { Card, Tab, Nav, Row, Col } from "react-bootstrap";
import ModalPostular from "../ModalPostular/ModalPostular";
import { renderParagraphs } from "../../Utils/textUtils";

const Employement = ({ globalDomain }) => {
  const [selectedVacante, setSelectedVacante] = useState(null);
  const [openedpost, setOpenedaddpost] = useState(false);
  const [vacancyTitle, setVacancyTitle] = useState([]);
  const [vacancy, setVacancy] = useState([]);
  const [activeKey, setActiveKey] = useState(null);

  const handleOpenedppost = (vacante) => {
    setSelectedVacante(vacante);
    setOpenedaddpost(true);
  };

  const handleCloseedppost = () => setOpenedaddpost(false);

  useEffect(() => {
    axios
      .get(`${globalDomain}vacancy?_format=json`, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        const extractedTitles = res.data.map((item) => item.title);
        setVacancyTitle(extractedTitles);
        setVacancy(res.data);
        if (extractedTitles.length > 0) {
          setActiveKey(extractedTitles[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [globalDomain]);


  const isDateInRange = (startDate, endDate) => {
    const currentDate = new Date();
    return currentDate >= new Date(startDate) && currentDate <= new Date(endDate);
  };

  return (
    <>
      <section className="Employement" id="employment">
        <Row>
          <h1>
            <span style={{ fontWeight: 700, fontSize: "50px", color: "white", textShadow: "-1px -1px 0 #d7ae64, 1px -1px 0 #d7ae64, -1px 1px 0 #d7ae64, 1px 1px 0 #d7ae64" }}>
              Employement
            </span>

              {" "}
            <span style={{ fontWeight: 500, fontSize: "40px", color: "#d7ae64" }}>
              Process
            </span>
          </h1>
        </Row>
        <Tab.Container id="left-tabs-example" activeKey={activeKey}>
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {vacancyTitle.map((title, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={title} onClick={() => setActiveKey(title)}>
                      {title}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="borderDer">
                {vacancyTitle.map((title, index) => {
                  const efemeridesFiltradas = vacancy.filter((efemeride) => efemeride.title === title);

                  return (
                    <Tab.Pane eventKey={title} key={index}>
                      {efemeridesFiltradas.map((efemeride, efemerideIndex) => {
                        const [startDate, endDate] = efemeride.field_fechas_1.split(" - ");

                        const isActive = isDateInRange(startDate, endDate);

                        return (
                          <Card key={efemerideIndex} style={{ marginBottom: "10px" }}>
                            <Card.Body>
                              <Card.Text style={{
               fontFamily:"Roboto"
              }}>
                                {renderParagraphs(efemeride.body)}
                              </Card.Text>
                              <button
                                className="btn col-3 button"
                                style={{
                                  borderRadius: "0",
                                  color: "#FFF",
                                  background: isActive ? "#e5e5e5" : "#ccc",
                                  height: "fit-content",
                                }}
                                type="button"
                                onClick={() => isActive && handleOpenedppost(efemeride.vacante)}
                                disabled={!isActive}
                              >
                                <span className="apply" style={{ color: "#6694b4", fontSize: "20px" }}>
                                  Join
                                </span>
                                <span className="here" style={{ color: "#e0b449", fontSize: "20px" }}>
                                  ISH
                                </span>
                              </button>
                            </Card.Body>
                          </Card>
                        );
                      })}
                    </Tab.Pane>
                  );
                })}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </section>
      <ModalPostular
        openedpost={openedpost}
        handleOpenedppost={handleOpenedppost}
        handleCloseedppost={handleCloseedppost}
        vacante={selectedVacante}
      />
    </>
  );
};

export default Employement;