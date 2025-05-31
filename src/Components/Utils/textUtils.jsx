import React from "react";
export const renderParagraphs = (text) => {
    if (!text) return null;
    const sentences = text.split(/(?<=\.)\s+/);
    const paragraphs = [];

    for (let i = 0; i < sentences.length; i += 3) {
      paragraphs.push(sentences.slice(i, i + 3).join(" ").trim());
    }
    return paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>);
  };