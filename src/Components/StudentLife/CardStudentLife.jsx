import React from "react";
import DOMPurify from 'dompurify';
const CardStudentLife = ({ texto, imagen, tipo,correo }) => {
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
            src={imagen}
            style={{
              width: "100%",
              height: "fit-Content",
              marginBottom: "10px",
            }}
          />
        </div>
        <div className="card-titulos" style={{ padding: "10px" }}>
          <h5
            style={{
              fontSize: "40px",
              color: "#5c5c5c",
              fontWeight: "500",
              marginBottom: "12px",
              letterSpacing: "5px",
              fontFamily: "Roboto",
            }}
          >
            {/* {titulo} */}
          </h5>
          <div
            className="card-texto"
            style={{
              alignItems: "center",
              height: "250px",
              width:"100%",
              overflowX: "auto",

              overflowY: "auto",
              padding: "10px",
              color:"red"
            }}
          >
{/* <div
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(texto) }}//
            /> */}
              <p
              style={{
                fontSize: "20px",
                color: "#5c5c5c",
                lineHeight: "1.5",
                letterSpacing: "5px",
                fontFamily: "Roboto",
                margin: 0,
              }}
            >
{texto}     {tipo === 'especial' && correo && (

                <p> <a href={`mailto:${correo}`}>{correo}</a></p>

            )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStudentLife;
