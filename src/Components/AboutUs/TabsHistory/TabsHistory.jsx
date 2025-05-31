import React, { useEffect, useState } from "react";
import "../TabsHistory/TabsHistory.css";
import { Card, Tab, Nav, Row, Col } from "react-bootstrap";
import axios from "axios";

const TabsHistory = ({ globalDomain }) => {
  const [chronologicTitle, setChronologicTitle] = useState([]);
  const [chronologic, setChronologic] = useState([]);
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    axios
      .get(globalDomain+`cronologicAbout?_format=json`, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        const extractedTitles = res.data.map(
          (item) => item.field_title_of_the_events
        );
        setChronologicTitle(extractedTitles);
        setChronologic(res.data);

        if (extractedTitles.length > 0) {
          setActiveKey(extractedTitles[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [globalDomain]);

  return (
    <section className="tabsHistory">
      <Tab.Container
        id="left-tabs-example"
        activeKey={activeKey}
        onSelect={(key) => setActiveKey(key)}
      >
        <Row>
          <Col sm={9}>
            <Tab.Content className="borderIzq">
              {chronologicTitle.map((mes, index) => {
                const efemeridesFiltradas = chronologic.filter(
                  (efemeride) => efemeride.field_title_of_the_events === mes
                );

                return (
                  <Tab.Pane eventKey={mes} key={index}>
                    {efemeridesFiltradas.length > 0 ? (
                      <Card style={{ marginBottom: "10px" }}>
                        <Card.Body>
                          <Card.Title>
                            {efemeridesFiltradas[0].field_title_of_the_events}
                          </Card.Title>
                          <Card.Text>
                            {
                              efemeridesFiltradas[0]
                                .field_description_of_the_event
                            }
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    ) : (
                      <p>No hay eventos disponibles para {mes}.</p>
                    )}
                  </Tab.Pane>
                );
              })}
            </Tab.Content>
          </Col>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              {chronologicTitle.map((mes, index) => (
                <Nav.Item key={index}>
                  <Nav.Link eventKey={mes} onClick={() => setActiveKey(mes)}>
                    {mes}
                    <span className="year">
                      {chronologic[index]?.field_year_of_events}
                    </span>
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
        </Row>
      </Tab.Container>
    </section>
  );
};

export default TabsHistory;
