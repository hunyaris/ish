import React from "react";
import "../History/History.css";
import { renderParagraphs } from "../../Utils/textUtils";

const History = ({ field_ish_history }) => {
  
  // 🚀 DATOS DE PRUEBA (MOCK)
  // Aquí puedes escribir el texto que quieras que se muestre por defecto.
  // Si tu API normalmente devuelve un array de párrafos, cámbialo por: ["Párrafo 1", "Párrafo 2"]
  const textoDePrueba = "Este es un texto de prueba para el componente History. Aquí normalmente se mostraría la historia de la ISH que viene desde la API. ";

  // Si field_ish_history tiene datos, usamos los reales. 
  // Si no (undefined, null o vacío), usamos el texto de prueba.
  const dataToRender = field_ish_history || textoDePrueba;

  return (
    <>
      <section className="sectionHistory">
        <div className="history">
          <div className="text-history">
            <h1 className="text-history-h1">ISH</h1>
            <h3 className="text-history-h3">History</h3>
          </div>
        </div>

        <div className="marca"></div>
        <div className="body-history">
          {/* Renderizamos el dato real o el de prueba */}
          {renderParagraphs(dataToRender)}
        </div>
      </section>
    </>
  );
};

export default History;
