import React from "react";

const CardAcreditations = ({ icon, globalDomain }) => {
  return (
    <div className="card" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="card-content" style={{ padding: "10px", width: "100%" }}>
        <img
          src={globalDomain + icon}
          alt="acreditación"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "200px",
            marginBottom: "10px",
          }}
        />
      </div>
    </div>
  );
};

export default CardAcreditations;