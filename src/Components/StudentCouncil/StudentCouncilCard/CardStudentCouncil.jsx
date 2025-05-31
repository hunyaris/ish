import React, { useState } from 'react';
import './CardStudentCouncil.css';


const CardStudentCouncil = ({ img, titulo, texto, isTextFirst,globalDomain }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="card-student-council">
            {isTextFirst ? (
                <>
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
                    <img src={
                                globalDomain +
                                img
                              } alt={titulo} className='img1'/>
                </>
            ) : (
                <>
                    <img src={
                                globalDomain +
                                img
                              } alt={titulo}  className='img1'  />
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
                </>
            )}
        </div>
    );
};

export default CardStudentCouncil;