import React, { useState } from "react";
import "../CardExtracurricular/CardExtra.css";
import AddIcon from '@mui/icons-material/Add'; // Importación del icono "+" de Material-UI

const ImageModal = ({ isOpen, onClose, image, titulo, texto }) => {
  if (!isOpen) return null;

  return (
    <section className="extra-modal">
      <div className="modalOverlay" onClick={onClose}>
        <div className="modalContent" onClick={(e) => e.stopPropagation()}>
          <span className="closeButton" onClick={onClose}>
            &times;
          </span>
          <div className="modalBody">
            <img className="modalImageE" src={image} alt="Imagen ampliada" />
            <div className="modalText">
              <h3>{titulo}</h3>
              <p>{texto}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CardExtra = ({ img, titulo, texto, globalDomain }) => {
  const [isModalOpenCard, setIsModalOpenCard] = useState(false);
  const [selectedImageCard, setSelectedImageCard] = useState(null);

  const handleImageClique = (imageSrc) => {
    const fullImagePath = globalDomain + imageSrc;
    setSelectedImageCard(fullImagePath);
    setIsModalOpenCard(true);
  };

  const handleCloseModalCard = () => {
    setIsModalOpenCard(false);
    setSelectedImageCard(null);
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-img" style={{ position: 'relative' }}>
          <img
            style={{
              width: "100%",
              height: "fit-content",
              objectFit: "cover",
            }}
            src={globalDomain + img}
            alt={titulo}
            onClick={() => handleImageClique(img)}
          />
          <button
            className="openImageButton"
            onClick={() => handleImageClique(img)}
          >
            <AddIcon />
          </button>
        </div>
      </div>
      <ImageModal
        isOpen={isModalOpenCard}
        onClose={handleCloseModalCard}
        image={selectedImageCard}
        titulo={titulo}
        texto={texto}
      />
    </div>
  );
};

export default CardExtra;