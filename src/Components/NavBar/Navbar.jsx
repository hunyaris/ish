import React, { useEffect, useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";
import LOGO from "../../assets/MARCA.png";
import axios from "axios";
import { QuickLinksContext } from "../../Context/Context";
const Navbar = ({ globalDomain, menuItems }) => {
  const menuItemsRoute = [
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

    {
      title: "COMMUNITY",
      children: [
        { title: "STUDENT ", url: "/student" },
        { title: "PARENT", url: "/ptsa" },
      ],
    },
    { title: "CONTACT US", url: "/contact-us" },
  ];
  const quicks = useContext(QuickLinksContext); //links externos

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const navbarRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenSubMenu(null);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const filteredQuicks = quicks.filter((link) => link.title !== "Admissions");

  const getValidItems = () => {
    return menuItemsRoute
      .flatMap((item) => {
        const validItems = [];

        if (item.url && item.url !== "/") {
          validItems.push({ title: item.title, url: item.url });
        }

        if (item.children) {
          const validChildren = item.children.filter(
            (child) => child.url && child.url !== "/"
          );
          validItems.push(
            ...validChildren.map((child) => ({
              title: child.title,
              url: child.url,
            }))
          );
        }

        return validItems;
      })
      .filter((item) => item.url !== "/");
  };

  const validItems = getValidItems();
  const firstColumnItems = validItems.slice(0, 4);
  const secondColumnItems = validItems.slice(4, 9);

  return (
    <div className={isScrolled ? "scrolled" : "navBar"} ref={navbarRef}>
      <div className="logo">
        <Link to="/">
          <img src={LOGO} alt="Logo" />
        </Link>
      </div>
      <div className="menu" onClick={handleMenuToggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>

      <div className="links">
        <div className="quicksLink">
          <ul>
            {filteredQuicks.map((link, index) => (
              <li key={index}>
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <ul>
          {menuItemsRoute.map((item, index) => {
            const hasChildren = item.children && item.children.length > 0;

            return (
              <li
                key={index}
                className={hasChildren ? "has-submenu" : ""}
                onMouseEnter={() => setOpenSubMenu(index)}
                onMouseLeave={() => setOpenSubMenu(null)}
              >
                {hasChildren ? (
                  <span>{item.title}</span>
                ) : (
                  <Link to={item.url}>{item.title}</Link>
                )}
                {hasChildren && openSubMenu === index && (
                  <ul className="submenu">
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <Link to={child.url}>{child.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <div className={isScrolled ? "divisorno" : "divisor"}></div>
      </div>

      {isOpen && (
        <div className="grupos">
          <div className="group">
            <ul className="links-verticales">
              {firstColumnItems.map((item) => (
                <li key={item.title}>
                  <Link to={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <ul className="links-verticales">
              {secondColumnItems.map((item) => (
                <li key={item.title}>
                  <Link to={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="divisor-responsive"></div>
          <div className="group2">
            <ul className="quick-links-verticales">
              {filteredQuicks.map((link, index) => (
                <li key={index}>
                  <Link to={link.url}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
