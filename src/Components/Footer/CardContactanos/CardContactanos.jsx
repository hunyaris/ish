import React from "react";
import "../Footer.css";

const CardContactanos = ({ contact_address }) => {


  return (
    <div className="container" style={{ display: "flex", width: "100%" }}>
      <div className='card-contacto' style={{ flex: 1 }}>
        <div style={{ marginTop: "10px" }}>
          {contact_address.map((campusItem, index) => (
            <div key={index} style={{ marginBottom: "15px" }}>
              <p style={{ color: "white", margin: 0 }}>
                {campusItem.field_campus_1}
              </p>
              <p style={{ color: "white", margin: 0 }}>
                {campusItem.field_campus_address}
              </p>
            </div>
          ))}


        </div>
      </div>
    </div>
  );
};

export default CardContactanos;