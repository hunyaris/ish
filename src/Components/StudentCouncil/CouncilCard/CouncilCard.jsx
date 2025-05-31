import React from "react";
import "../CouncilCard/CouncilCard.css";

const CouncilCard = ({ img, texto, titulo, overlayColor }) => {
  return (
    <div className={`responsive-lotus`}>
      <div className='image-container'>
        <img
          src={img}
          alt={titulo}
          className='lotus-image'
        />
        <div className='overlay' style={{ background: overlayColor }}> 
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
              textAlign: "end"
            }}
          >
            {texto}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CouncilCard;