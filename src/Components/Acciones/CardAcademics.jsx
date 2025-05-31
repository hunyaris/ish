import React from "react";
import { Link } from "react-router-dom";

const CardAcademics = ({ img, titulo, texto, link, globalDomain }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div
          className="card-img"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <img
            style={{
              width: "100%",
              height: "fit-content",
              objectFit: "cover",
            }}
            src={globalDomain + `${img}`}
            alt={titulo}
          />
        </div>

        <div
          className="card-titulos"
          style={{
            backgroundColor: "rgba(169, 169, 169, 0.8)",
            padding: "10px",
          }}
        >
          <h3
            style={{
              fontSize: "42px",

              textAlign: "center",
              fontWeight: "500",
              marginBottom: "12px",
              letterSpacing: "5px",
                   fontFamily:"Roboto"
            }}
          >


            <Link
              className="te"
              style={{
                fontSize: "42px",
                textAlign: "center",
                fontWeight: "500",
                marginBottom: "12px",
                letterSpacing: "5px",

                textDecoration: "none",
              }}
              to={link} onClick={() => window.scrollTo(5, 0)}
            >
              {" "}
              {titulo}
            </Link>
          </h3>
          <div className="card-texto">
            <p
              style={{
                fontSize: "19px",
                color: "white",

                lineHeight: "1.5",
                letterSpacing: "5px",
                     fontFamily:"Roboto"
              }}
            >
              {texto}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAcademics;
