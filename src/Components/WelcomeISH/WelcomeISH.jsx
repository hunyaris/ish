// import axios from "axios"; // ❌ Ya no lo necesitamos por ahora
import React, { useContext } from "react";
import "../WelcomeISH/WelcomeISH.css";
import { QuickLinksContext } from "../../Context/Context";

const WelcomeISH = ({ globalDomain, message }) => {
  const admision = useContext(QuickLinksContext);
  
  // ⚠️ NOTA: Si no tienes el Contexto configurado en GitHub Pages, 
  // esto podría dar error. Si te da error, comenta las siguientes 3 líneas
  // y usa directamente: const url = "https://www.ejemplo.com";
  const filterAdmision = admision ? admision.filter((link) => link.title === "Admissions") : [];
  const url = filterAdmision.length > 0 ? filterAdmision[0].url : "https://www.ejemplo.com";

  // 🚀 AQUÍ ESTÁN LOS DATOS DE PRUEBA
  // En lugar de un array vacío [], ponemos un objeto con la propiedad "body"
  const [messageHome, setMessageHome] = useState({
    body: "Este es un texto de prueba para el componente WelcomeISH. Aquí normalmente se mostraría el mensaje que viene de la API. Puedes cambiar este texto por el que quieras para probar el diseño."
  });

  // ❌ API DESACTIVADA POR AHORA
  /*
  useEffect(() => {
    axios
      .get(`${globalDomain}welcomeISH/${message}?_format=json`)
      .then((res) => {
        setMessageHome(res.data[0]);
      });
  }, [message, globalDomain]);
  */

  return (
    <section
      style={{
        width: "100%",
        height: "fit-content",
        padding: "70px 0px 60px 0px",
      }}
    >
      <div className="container text-center">
        <div className="row align-items-start">
          {/* Primer Columna */}
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            style={{ marginBottom: "20px", position: "relative" }}
          >
            <div
              className="container"
              style={{
                maxWidth: "85%",
                height: "fit-content",
                marginLeft: "auto",
                marginRight: "auto",
                padding: "1rem",
              }}
            >
              <div
                style={{ height: "30%", background: "#FFF", padding: "10px" }}
              ></div>
              <div style={{ height: "70%" }}>
                <h2
                  style={{
                    fontSize: "18px",
                    color: "#475052",
                    fontWeight: "lighter",
                  }}
                ></h2>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#475052",
                    fontWeight: "lighter",
                  }}
                ></p>
                <img
                  src="images/MESA-1-LISTO.png"
                  alt="Descripción de la imagen"
                  style={{
                    position: "absolute",
                    top: "-18%",
                    left: "90px",
                    width: "90%",
                    height: "auto",
                    objectFit: "cover",
                    zIndex: 0,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Segunda Columna */}
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            style={{ marginBottom: "20px", position: "relative" }}
          >
            <div
              className="container"
              style={{
                maxWidth: "85%",
                height: "fit-content",
                marginLeft: "auto",
                marginRight: "auto",
                padding: "1rem",
              }}
            >
              <div style={{ height: "30%", padding: "10px" }}></div>
              <div style={{ height: "70%" }}>
                <img
                  src="/images/HAVANA.png"
                  alt="Descripción de la imagen"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    zIndex: 0,
                  }}
                />
                <p
                  style={{
                    fontSize: "18px",
                    color: "#1c2298",
                    fontWeight: "600",
                    position: "relative",
                    textAlign: "justify",
                    zIndex: 1,
                    marginTop: "5%",
                  }}
                >
                  {/* Aquí se mostrará el texto de prueba */}
                  {messageHome.body}
                </p>
              </div>
            </div>
          </div>

          {/* Tercera Columna */}
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            style={{ marginBottom: "20px" }}
          >
            <div
              className="container"
              style={{
                maxWidth: "85%",
                height: "fit-content",
                marginLeft: "auto",
                marginRight: "auto",
                padding: "1rem",
              }}
            >
              <div
                style={{ height: "50%", background: "#FFF", padding: "10px" }}
              ></div>
              <div className="d-flex justify-content-end">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-yellow-button"
                  style={{
                    marginTop: "1rem",
                    width: "220px",
                    height: "50px",
                    border: "0",
                    borderRadius: "0",
                    fontSize: "18px",
                    backgroundColor: "#FFB708",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "inherit",
                    boxShadow: "rgba(0, 0, 0, 0.2) 2px 2px 4px",
                  }}
                >
                  <span className="apply">APPLY</span>
                  <span className="here">HERE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeISH;
