import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";

const FooterMenu = ({ footer_menu }) => {
  const handleLinkClick = (link) => {
    if (link.title !== "Employment") {
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <div className="linkd" style={{ margin: "auto" }}>
        <div
          style={{
            width: "80%",

            margin: "auto",
            fontSize: "14px",
          }}
          className="border-raya"
        ></div>

        <ul>
          {footer_menu.map((link, index) => (
            <li key={index}>
              <Link to={link.url} onClick={() => handleLinkClick(link)}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterMenu;
