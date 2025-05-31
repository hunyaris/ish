import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CouncilCard/CouncilCard.css";
import CouncilCard from "./CouncilCard";


const overlays = [
  'linear-gradient( rgba(0, 0, 255, 0),rgb(202, 154, 39))',
  'linear-gradient(rgba(0, 0, 255, 0),rgba(114, 170, 215))',
  'linear-gradient( rgba(0, 0, 255, 0),rgba(131, 175, 61))',
];


const Council = ({globalDomain}) => {
  const [studentcouncil, setStudentcouncil] = useState([]);
  useEffect(() => {
    axios
      .get(globalDomain + `/studentcouncil/studentCouncil?_format=json`, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        setStudentcouncil(res.data[0]);
      });
  }, [globalDomain]);
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
  <section className="council">

<div className="council-container">
<div className="text-Council">
        <h1>Student Council</h1>
      </div>
    <div className="council-cards">
      {/* {publicacioness.map((item, index) => (
        <div key={index}>
          <CouncilCard
            img={item.imagen}
            titulo={item.titulo}
            texto={item.texto}
            overlayColor={index < 3 ? overlays[index] : 'transparent'}
          />
        </div>
      ))} */}
    </div>
     <div className="intro-counciltwo">
          <div className="intro-council-ver" ></div>
          <div className="intro-council-text">
          <h5>
              {studentcouncil.field_text_two
                ? renderParagraphs(studentcouncil.field_text_two)
                : "No text available."}
            </h5>

    </div>

          <div className="intro-council-words"></div>
        </div>

    </div>
  </section>
    );
};

export default Council;
