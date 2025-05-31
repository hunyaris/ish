import React, { useEffect, useState } from "react";
import axios from "axios";
import "../ParentCard/ParentCard.css";
import ParentCard from "./ParentCard";

const Parent = ({ globalDomain, category }) => {
  const [parentcouncil, setParentcouncil] = useState([]);

  useEffect(() => {
    axios
      .get(`${globalDomain}/studentcouncil/${category}?_format=json`)
      .then((res) => {
        setParentcouncil(res.data[0]);
      });
  }, [category, globalDomain]);

  console.log(parentcouncil.field_text_two);

  const renderParagraphs = (text) => {
    const sentences = text.split(". ").filter(Boolean);
    const paragraphs = [];
    for (let i = 0; i < sentences.length; i += 3) {
      paragraphs.push(
        sentences.slice(i, i + 3).join(". ") +
          (i + 3 < sentences.length ? "." : "")
      );
    }
    return paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>);
  };
  const publicacioness = [
    {
      imagen: "/images/Actividad_extraescolar_niños.jpg",
      titulo: "Título de la Publicación 1",
      texto: "Este es el texto descriptivo de la publicación 1."
    },
    {
      imagen: "/images/Actividad_extraescolar_niños.jpg",
      titulo: "Título de la Publicación 2",
      texto: "Este es el texto descriptivo de la publicación 2."
    },
    {
      imagen: "/images/Actividad_extraescolar_niños.jpg",
      titulo: "Título de la Publicación 3",
      texto: "Este es el texto descriptivo de la publicación 3."
    },
    {
      imagen: "/images/Actividad_extraescolar_niños.jpg",
      titulo: "Título de la Publicación 4",
      texto: "Este es el texto descriptivo de la publicación 4."
    },
    {
      imagen: "/images/Actividad_extraescolar_niños.jpg",
      titulo: "Título de la Publicación 5",
      texto: "Este es el texto descriptivo de la publicación 5."
    }
  ];
  return (
    <section className="parents">
      {/* ///*Seccion Staf of Student Council */}
    {/* <div className="council-container">


    <div className="council-cards">
      {publicacioness.map((item, index) => (
        <div key={index}>
          <ParentCard
            img={item.imagen}
            titulo={item.titulo}
            texto={item.texto}

          />
        </div>
      ))}
    </div>
    </div> */}
      <div className="council-container">
        <div className="text-Council">
          <h1>Parent Council</h1>
        </div>

        <div className="intro-parenttwo">
          <div className="intro-council-ver"></div>
          <div className="intro-council-text">
            <h5>
              {parentcouncil.field_text_two
                ? renderParagraphs(parentcouncil.field_text_two)
                : "No text available."}
            </h5>
          </div>

          <div className="intro-council-words"></div>
        </div>
      </div>
    </section>
  );
};

export default Parent;
