import React from "react";
import "../Mision/Mision.css";
import { Card } from "react-bootstrap";

const Mision = ({ mision, vision }) => {
  const mision_vision = [
    {
      title: "Mision",
      imagen: "/images/office-925806.jpg",
    },
    {
      title: "Vision",
      imagen: "/images/school.jpg",
    },
  ];

  return (
    <section className="Mision">
      <div className="misionVision">
        <div className="misionVision1">
          <div className="titleSection">
            <h1 className="Our"  style={{
               fontFamily:"Roboto"
              }}>Our Mission & Visions</h1>
          </div>
          <div className="misionBody">
            <Card
              style={{
                border: "0",
                backgroundColor: "#E0E0E0",
                marginBottom: "15px",
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
                position: "relative",
                borderRadius: "200px 0 0 200px",
              }}
            >
              <Card.Body style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
              }}>
                <img
                  src={mision_vision[0].imagen}
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginLeft: "-6%",
                  }}
                />
                <div style={{ width: "70%", height: "fit-content", color: "black", marginRight: "5%", padding: "20px" }}>
                  <Card.Title style={{ fontSize: "1.25em", fontWeight: "500" }}>
                    {mision_vision[0].title}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "16px", color: "black", textAlign: "left", fontFamily:"Roboto" }}>
                    {mision}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="misionVision2">
          <div className="visionBody">
            <Card
              style={{
                border: "0",
                backgroundColor: "#E0E0E0",
                marginBottom: "15px",
                marginLeft: "auto",
                marginRight: "auto",
                position: "relative",
                borderRadius: "0 200px 200px 0",
                width: "80%",
              }}
            >
              <Card.Body style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
              }}>
                <div style={{ textAlign: "right", width: "70%", height: "fit-content", color: "black" }}>
                  <Card.Title style={{ fontSize: "3.25em", fontWeight: "500" }}>
                    {mision_vision[1].title}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "16px", color: "black", textAlign: "right", fontFamily:"Roboto"  }}>
                    {vision}
                  </Card.Text>
                </div>
                <img
                  src={mision_vision[1].imagen}
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: "-6%",
                  }}
                />
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mision;