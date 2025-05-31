import React from "react";
import { Link } from "react-router-dom";
const CardPublication = ({ titulo, texto, imagen, DefaultSVG }) => {
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
          }}
        >
          <img
            src={imagen ? imagen : DefaultSVG}
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
          }}
        >
          {/* <h5
            style={{
              fontSize: "40px",
              color: "#5c5c5c",
              fontWeight: "500",
              marginBottom: "12px",
              letterSpacing: "5px",
            }}
          >
            {titulo}
          </h5> */}

          <div className="card-texto" style={{ alignItems: "center" }}>
            <Link to={texto} target="_blank">

                {titulo}

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPublication;
