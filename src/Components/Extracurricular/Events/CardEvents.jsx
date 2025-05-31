import React from "react";

import "../Events/CardEvents.css";

const CardEvents = ({ titulo, texto, fecha, lugar }) => {

  const [fechaParte, horaParte] = fecha.split("T");
  return (
    <div className="card-v">
      <div className="card-content-v">
        <div className="card-titulos-v" style={{ padding: "10px" }}>
          <h5 className="text-events-title">{titulo}</h5>
          <h6 className="text-events-date">{fechaParte}</h6>
          <h6 className="text-events-date">{horaParte}</h6>

          <small className="text-events-place">{lugar}</small>

          <div
            style={{
              width: " 60%",
              border: "1px solid #d7ae64",
              margin: " 0px",
            }}
          ></div>

          <div className="card-texto" style={{ alignItems: "center" }}>
            <p className="text-events-text">{texto}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEvents;
