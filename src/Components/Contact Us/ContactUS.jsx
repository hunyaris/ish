import React, { useEffect, useState } from "react";
import "../Contact Us/ContactUS.css";
import ContactForm from "./ContactForm/ContactForm";
import Banne from "../Banner/Banner";
import axios from "axios";

const ContactUS = ({ globalDomain, contact_address }) => {



  const [contact, setContact] = useState([]);


  useEffect(() => {
    axios
      .get(globalDomain + `contatcs/?_format=json`, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        setContact(res.data[0]);
      });
  }, [globalDomain]);


  return (
    <>
      {/* Banner */}
      <Banne globalDomain={globalDomain} taxionomy={"contact-us"} />
      <h1 className="titleAdress" style={{
               fontFamily:"Roboto"
              }} >
Adress
          </h1>
      <section className="contac-US">
        <div className="contactALL">
          {contact_address.map((contact, index) => (
            <div key={index} className="info">
              <div className="adress">
                <h2 style={{
               fontFamily:"Roboto"
              }}> {contact.field_campus_1}</h2>
                <br></br>
                <p style={{
               fontFamily:"Roboto"
              }}>{contact.field_campus_address}</p>
              </div>
              <div className="phone">
                {" "}
                <h2 style={{
               fontFamily:"Roboto"
              }}> {contact.field_campus_header_phone}</h2>
                <br></br>
                <p style={{ fontWeight: "700", fontFamily:"Roboto" }}>
                  {contact.field_campus_phone}
                </p>
              </div>

              <div className="image-section">
                <img
                  loading="lazy"
                  src={globalDomain + contact.field_campus_map}
                  alt={"hello"}
                  className="contact-image"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <ContactForm  globalDomain={globalDomain} contact={contact} />
    </>
  );
};

export default ContactUS;
