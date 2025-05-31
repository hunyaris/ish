import React from "react";
const CardTraditional = ({ titulo, texto, imagen, DefaultSVG }) => {
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
              height: "314px",
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
          <h5
            style={{
              fontSize: "25px",
              color: "#5c5c5c",
              fontWeight: "500",
              marginBottom: "12px",
              letterSpacing: "5px",
              fontFamily: "Roboto",
            }}
          >
            {titulo}
          </h5>
          <div className="card-texto" style={{ alignItems: "center" }}>
            <p
              style={{
                fontSize: "18px",
                color: "#5c5c5c",
                lineHeight: "1.5",
                letterSpacing: "5px",
                fontFamily: "Roboto",
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

export default CardTraditional;
