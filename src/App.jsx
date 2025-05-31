import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Principal from "./Components/Principal/Principal";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import Extracurricular from "./Components/Extracurricular/Extracurricular";
import StudentLife from "./Components/StudentLife/StudentLife";
import AboutUs from "./Components/AboutUs/AboutUs";
import StudentCouncil from "./Components/StudentCouncil/StudentCouncil";
import ParentCouncil from "./Components/PTSACouncil/ParentCouncil";
import ContactUS from "./Components/Contact Us/ContactUS";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SchoolPageComponent from "./Components/DetalleVacante/SchoolPageComponent";
import NotFound from "./Components/NotFound/NotFound";
import StudentSuccess from "./Components/StudentSuccess/StudentSuccess";


function App({globalDomain}) {


  const [contact_address, setContact_address] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [quicks, setQuicks] = useState([]);

  //Footer Contact-US
  useEffect(() => {
    axios
      .get(globalDomain + `contact_map/?_format=json`, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        setContact_address(res.data);
      });
  }, [globalDomain]);

  //Navigation Menu Prinicpal

  useEffect(() => {
    axios
      .get(globalDomain + `entity/menu/main/tree?format=json`)
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

        setMenuItems(formattedMenuItems);
      })
      .catch((error) => {
        console.error("Error fetching menu items:", error);
      });
  }, [globalDomain]);

  //Quicks Links
  useEffect(() => {
    axios
      .get(`${globalDomain}quicksLink/quicks?_format=json`, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        const quicksData = res.data[0];
        const links = quicksData.field_link
          .split(",")
          .map((link) => link.trim());
        const titles = quicksData.field_link_1
          .split(",")
          .map((title) => title.trim());

        const formattedQuicksLinks = links.map((link, index) => ({
          title: titles[index],
          url: link,
        }));

        const filteredQuicksLinks = formattedQuicksLinks.filter(
          (link) => !link.title.includes("Admission")
        );

        setQuicks(filteredQuicksLinks);
      })
      .catch((error) => {
        console.error("Error fetching quick links:", error);
      });
  }, [globalDomain]);



  return (
    <>
      {/* <NAVBAR/> */}
      <Navbar
        globalDomain={globalDomain}
        menuItems={menuItems}
        // quicks={quicks}
      />
      {/* <HOME/> */}
      <Routes>
        <Route
          path="/"
          element={<Principal globalDomain={globalDomain}   />}
        />
        {/* <ACADEMICS/> */}
        <Route
          path="/school/:type"
          element={<SchoolPageComponent globalDomain={globalDomain} />}
        />
        {/* Extracurricular */}
        <Route
          path="/extracurricular"
          element={<Extracurricular globalDomain={globalDomain} />}
        />
        {/* StudentLife */}
        <Route
          path="/studentlife"
          element={<StudentLife globalDomain={globalDomain} />}
        />

<Route
          path="/studentSuccess"
          element={<StudentSuccess globalDomain={globalDomain} />}
        />
        {/* About us */}
        <Route
          path="/aboutUs"
          element={<AboutUs globalDomain={globalDomain} />}
        />
        {/* Student */}
        <Route
          path="/student"
          element={<StudentCouncil globalDomain={globalDomain} />}
        />
        {/* PTSA */}
        <Route
          path="/ptsa"
          element={<ParentCouncil globalDomain={globalDomain} />}
        />
        {/* Contact-us */}
        <Route
          path="/contact-us"
          element={
            <ContactUS
              globalDomain={globalDomain}
              contact_address={contact_address}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* FOOTER */}
      <Footer
        globalDomain={globalDomain}
        contact_address={contact_address}
        menuItems={menuItems}
      />
    </>
  );
}
export default App;
