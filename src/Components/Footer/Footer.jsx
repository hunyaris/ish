import React, { useEffect, useState , useContext } from "react";
import axios from "axios";
import CardContactanos from "./CardContactanos/CardContactanos";
import CardLinks from "./CardLinks/CardLinks";
import "../Footer/Footer.css";
import FooterMenu from "./FooterMenu";
import LOGOBLANCO from "../../assets/LOGO-BLANCO.png";
import { Link } from "react-router-dom";
import Copyright from "../Copyright/Copyright";
import LOGO from "../../assets/MARCA.png";
import { QuickLinksContext } from '../../Context/Context';
const Footer = ({ globalDomain, contact_address, menuItems }) => {
  const menuItemsFooterRigth= [
    { title: "ABOUT US", url: "/aboutUs" },
    {
      title: "ACADEMIC",
      children: [
        { title: "PRIMARY SCHOOL", url: "school/primaryschool" },
        { title: "MIDDLE SCHOOL", url: "school/middleschool " },
        { title: "HIGH SCHOOL", url: "school/highschool " },
      ],
    },
    {
      title: "ADMISSIONS",
      url: "https://admissions.rediker.com/intschoolhavana",
    },
    { title: "STUDENT LIFE", url: "/studentlife" },
    { title: "STUDENT SUCCESS", url: "/studentSuccess" },

    {
      title: "COMMUNITY",
      children: [
        { title: "STUDENT ", url: "/student" },
        { title: "PARENT", url: "/ptsa" },
      ],
    },
    { title: "CONTACT US", url: "/contact-us" },
  ];
  /*const [footer_menu, setFooter_menu] = useState([]);
  // Footer Menu
  useEffect(() => {
    axios
      .get(globalDomain + `entity/menu/footer/tree?format=json`)
      .then((res) => {
        const buildMenuItems = (items) => {
          return items.map((item) => {
            return {
              title: item.link ? item.link.title : "",
              url: item.link ? item.link.url : "",
              children: item.subtree ? buildMenuItems(item.subtree) : [],
            };
          });
        };

        const formattedMenuItems = buildMenuItems(res.data);
        setFooter_menu(formattedMenuItems);
      })
      .catch((error) => {
        console.error("Error fetching menu items:", error);
      });
  }, [globalDomain]);
  */


  const FooterMenuCenterRoute= [
    { title: "ABOUT US", url: "/aboutUs" },
    {title: "ADMISSIONS",
      url: "https://admissions.rediker.com/intschoolhavana",
    },
    { title: "Employement", url: "/aboutUs#employment" },

    { title: "CONTACT US", url: "/contact-us" },
  ];



  return (
    <>
      <div className="container-footer">
        <div
          style={{ width: "90%", height: "fit-content", display: "flex" }}
          className="responsive"
        >
          <div className="contact-footer-rigth">
            <div className="contact-footer-contact">
              <CardContactanos contact_address={contact_address} />
              <Copyright globalDomain={globalDomain} />
            </div>
          </div>
          <div className="container-responsive">
            <div className="links-footer-center">
              <FooterMenu footer_menu={FooterMenuCenterRoute} />
            </div>
            <div className="contact-footer-left">
              <div className="contact-footer-image-left"></div>
              <div className="links-footer-left">
                <CardLinks menuItems={menuItemsFooterRigth} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
