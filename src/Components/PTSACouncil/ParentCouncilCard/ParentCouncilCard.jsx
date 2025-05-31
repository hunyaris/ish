import React, { useState } from 'react';
import "../ParentCouncilSlider/ParentCouncilSlider.css";

const ParentCouncilCard = ({ img, titulo, texto, isFirstInPair, globalDomain }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="card-parent-council">
            <img
                src={`${globalDomain}${img}`} // Usar template literals para construir la URL
                alt={titulo}
                className={isFirstInPair ? 'img-narrow' : 'img'}
            />
            <div className="text">
                <h3>{titulo}</h3>
                <p className={isExpanded ? 'expanded' : ''}>
                    {texto}
                </p>
                <button
                    className="toggle-button"
                    onClick={toggleText}
                >
                    {isExpanded ? 'Less' : 'Read more'}
                </button>
            </div>
        </div>
    );
};

export default ParentCouncilCard;