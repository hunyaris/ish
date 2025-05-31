import React from "react";
const CardPrinciples = ({ texto}) => {
  return (
    <div className="card"  style={{  border: "0", borderRadius:"0", marginTop: "20%",}}>
      <div className="card-content">
        <div className="card-titulos" style={{  padding: "10px" }}>
          <div className="card-texto" style={{ alignItems: "center" }}>
            <p
              style={{
                fontSize: "20px",
                color: "#1c2298",
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

export default CardPrinciples;