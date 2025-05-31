import React from "react";
import "../ParentCard/ParentCard.css";

const ParentCard = ({ globalDomain,img, texto, titulo }) => {
  return (
    <div className={`responsive-lotus`}>
      <div className='image-container'>
        <img
               src={globalDomain + img}
          alt={titulo}
          className='lotus-image'
        />
        <div className='overlay'>
        </div>
      </div>

      <div className='text-container'>
        <h5
          style={{
            fontSize: "40px",
            color: "#5c5c5c",
            fontWeight: "600",
            marginBottom: "12px",
            letterSpacing: "2px",
            fontFamily:"Roboto"
          }}
        >
          {titulo}
        </h5>
        <div className="card-text-lotus">
          <p
            style={{
              fontSize: "20px",
              color: "#5c5c5c",
              lineHeight: "1.5",
              letterSpacing: "5px",
              textAlign: "end",
              fontFamily:"Roboto"
            }}
          >
            {texto}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ParentCard;