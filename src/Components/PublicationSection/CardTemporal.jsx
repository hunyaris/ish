import React from "react";
import { Link } from "react-router-dom";
const CardTemporal = ({ titulo, texto, title, doc }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div
          style={{
            height: "fit-content",
            padding: "10px",
            display: "grid",

            position: "relative",
            width: "100%",
            margin:"0",
          }}
        >
          <img
            src="../images/document-svgrepo-com(1).png"
            alt={titulo}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "200px",
              marginBottom: "10px",
            }}
          />
        </div>
        <div
          className="card-titulos"
          style={{
            backgroundColor: "rgba(169, 169, 169, 0.8)",
            padding: "10px",
            textAlign: "start",

          }}
        >
          <Link to={doc} target="_blank">
            <h5
              style={{
                color: "#5c5c5c",
                fontWeight: "500",
                marginBottom: "12px",
                letterSpacing: "1px",
                textAlign: "start",

              }}
            >
              {title}
            </h5>
          </Link>

          <div className="card-texto" style={{ alignItems: "center" }}>
            <p
              style={{
                fontSize: "20px",
                color: "#5c5c5c",
                lineHeight: "1.5",
                letterSpacing: "1px",
              }}
            >
              {texto}
            </p>
          </div>    </div>

      </div>
    </div>
  );
};

export default CardTemporal;
