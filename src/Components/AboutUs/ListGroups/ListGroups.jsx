import React, { useEffect, useState } from "react";
import "../ListGroups/ListGroups.css";
import { ListGroup, ListGroupItem, Row } from "react-bootstrap";
import axios from "axios";


const ListGroups = ({globalDomain,urlApply}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const principles = [
    {
      title: "Misión",
      hecho: "People can learn how to learn and have a right to do so",
      field_w: "Año Nuevo",
      imagen: "/images/office-925806.jpg",
    },
    {
      title: "Visión",
      hecho: "Personal and a social process.",
      imagen: "/images/school.jpg",
    },
    {
      title: "Misión",
      hecho: "We are all responsible for learning.",
      field_w: "Año Nuevo",
      imagen: "/images/office-925806.jpg",
    },
    {
      title: "Visión",
      hecho: "Both cognitive and emotional.",
      imagen: "/images/school.jpg",
    },
    {
      title: "Visión",
      hecho: "Learning is both cognitive and emotional.",
      imagen: "/images/school.jpg",
    },
  ];


  const [admissions, setAdmissions ] = useState([]);


  useEffect(() => {
    axios
      .get(globalDomain+`admissionsAbout?_format=json`, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {

        setAdmissions(res.data);

          })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [globalDomain]);

  return (
    <>
      <section className="ListGroups">
        <Row>
          <h1>
            <span
              style={{
                fontWeight: 700,
                fontSize: "50px",
                color: "white",
                textShadow:
                  "-1px -1px 0 #1c2298, 1px -1px 0 #80AA3D, -1px 1px 0 #80AA3D, 1px 1px 0 #80AA3D",
              }}
            >
              {" "}
              Admissions{" "}
            </span>{" "}
            <span
              style={{
                fontWeight: 500,
                fontSize: "40px",
                color: "#80AA3D",
              }}
            >
              Process
            </span>
          </h1>
        </Row>

        <Row>
          <ListGroup horizontal>
            {admissions.map((principle, index) => (
              <ListGroupItem key={index}>
                <div className="contenedor-raya">
                  <div className="circle">
                    <div className="number">
                      <p>{index + 1}</p>
                    </div>
                  </div>

                  {index < principles.length - 1 && (
                    <div className="raya">
                      <div className="recta"></div>
                    </div>
                  )}
                </div>

                <div className="pace">
                  <h3 style={{
               fontFamily:"Roboto"
              }}>{principle.field_title}</h3>
                  <p style={{
               fontFamily:"Roboto"
              }}>{principle.field_description}</p>
                </div>
                <div></div>
              </ListGroupItem>
            ))}
          </ListGroup>
          <div
            style={{
              width: isMobile ? "90%" : "30%",
              height: "fit-content",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "1rem",
            }}
          >
            <a
              href={urlApply}
              target="_blank"
              rel="noopener noreferrer"
              className="custom-yellow-button"
              style={{
                marginTop: "1rem",
                width: isMobile ? "100%" : "270px",
                height: isMobile ? "60px" : "60px",
                border: "0",
                borderRadius: "0",
                fontSize: isMobile ? "16px" : "18px",
                backgroundColor: "#FFB708",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
                  boxShadow: "rgba(0, 0, 0, 0.2) 2px 2px 4px",
              }}
            >
              <span className="apply">APPLY</span>
              <span className="here">HERE</span>
            </a>
          </div>
        </Row>
      </section>
    </>
  );
};

export default ListGroups;