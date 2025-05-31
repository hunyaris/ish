import React from "react";
import "./CardLinks.css";
import { Link } from "react-router-dom";
const CardLinks = ({ menuItems }) => {
  const desiredUrls = [
    "primaryschool",
    "middleschool",
    "highschool",
    "studentlife",
    "studentSuccess"
  ];
  const getFilteredLinks = (menuItems, desiredUrls) => {
    let filteredLinks = [];
    menuItems.forEach((item) => {
      if (item.url && desiredUrls.includes(item.url.split("/").pop().trim())) {
        filteredLinks.push(item);
      }
      if (item.children && item.children.length > 0) {
        item.children.forEach((child) => {
          if (desiredUrls.includes(child.url.split("/").pop().trim())) {
            filteredLinks.push(child);
          }
        });
      }
    });
    return filteredLinks;
  };
  const filteredLinks = getFilteredLinks(menuItems, desiredUrls);
  return (
    <div className="card-links border-raya-vertical">
      <ul>
        {filteredLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.url} onClick={() => window.scrollTo(0, 0)}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CardLinks;
