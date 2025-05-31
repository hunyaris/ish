import React from "react";
import "../ContactForm/ContactForm.css";
import Formulario from "./Formulario/Formulario";

const ContactForm = ({ globalDomain, contact }) => {
  const imageUrl = globalDomain + contact.field_general_map;

  return (
    <>
      {/* Banner */}
      <div class="separadorExtra"></div>
      <section className="ContactForm">
        <div className="titleForm">
          {" "}
          <h1>
            <span
              style={{
                fontWeight: 700,

                color: "#2b3380",
                fontSize: "2.5em",
              }}
            >
              {" "}
              Contact{" "}
            </span>{" "}
            <span
              style={{
                fontWeight: 700,
                fontSize: "2.5em",
                color: "white",
                textShadow:
                  "-1px -1px 0 #2b3380, 1px -1px 0 #2b3380, -1px 1px 0 #2b3380, 1px 1px 0 #2b3380",
              }}
            >
              US
            </span>
          </h1>
        </div>

        <div className="container-form">
          <div className="Form">
            <Formulario />
          </div>
          <div className="Map">
            <img
              src={imageUrl}
              alt="Mapa"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
