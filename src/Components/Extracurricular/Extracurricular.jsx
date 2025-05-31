import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Extracurricular/Extracurricular.css";
import CardExtra from "./CardExtracurricular/CardExtra";
import ExtraSlider from "./ExtraSliderCard/ExtraSlider";
import CardPublication from "../PublicationSection/CardPublication";
import CardTemporal from "../PublicationSection/CardTemporal";
import Publicacionessection from "../PublicationSection/PublicationSection";
import { Col, Row } from "react-bootstrap";
import CardEvents from "./Events/CardEvents";
import Banne from "../Banner/Banner";

const Extracurricular = ({globalDomain}) => {

  const [openedpost, setOpenedaddpost] = React.useState(false);
  const handleOpenedppost = () => setOpenedaddpost(true);
  const handleCloseedppost = () => setOpenedaddpost(false);
  let { id } = useParams();

//Message
  const [introExtra, setIntroExtra] = useState([]);
  useEffect(() => {
    axios.get(`${globalDomain}generalextracurricular/?_format=json`)
      .then((res) => {
        setIntroExtra(res.data[0]);
      });
  }, [ globalDomain]);
//Card  Extracurricular
  const [cardExtracurricular, setCardExtracurricular] = useState([]);
  useEffect(() => {
    axios.get(`${globalDomain}cardExtracurricular/?_format=json`)
      .then((res) => {
        setCardExtracurricular(res.data);
      });
  }, [ globalDomain]);

  //Traditional eventes
 const [traditional_activities, setTraditionalActivities] = useState([]);
  useEffect(() => {
    axios.get(`${globalDomain}traditional_activities/?_format=json`)
      .then((res) => {
        setTraditionalActivities(res.data);
      });
  }, [ globalDomain]);

  // eventes
  const [event, setEvents] = useState([]);
  useEffect(() => {
    axios.get(`${globalDomain}events/?_format=json`)
      .then((res) => {
        setEvents(res.data);
      });
  }, [ globalDomain]);


  return (
    <>
      <Banne globalDomain={globalDomain} taxionomy={"extracurricular"} />

      {/* Intro */}

      <div className="extraCard">
        <div style={{ marginTop: "50px", border: "0px" }} className="p-3 mb-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-5 extra1ancho">
                {" "}
                <div className="backgroundLeft">
                  <div className="card-container">
                    {cardExtracurricular.map((card, index) => (
                      <CardExtra
                        key={index}
                        img={card.field_image_card_extracurricular}
                        titulo={card.title}
                        texto={card.body}
                        globalDomain={globalDomain}
                      />
                    ))}
                  </div>
                </div>
              </div>

                <div className="col-12 col-md-7 extra1ancho2">
                  <div className="bodySchoolextra">
                    <div className="ExtracuadrobodyTextoo">
                      <h1
                        style={{
                          textAlign: "center",
                          fontSize: "60px",
                          fontWeight: 600,
                          color: "#22289b",
                          fontFamily: "Roboto",
                        }}
                      >
                        Extracurricular
                      </h1>
                      <p
                        style={{ textAlign: "center", color: "#d7ae64" , fontFamily: "Roboto"}}
                        className="bodyTextoextra"
                      >

                        {introExtra.body}
                      </p>
                    </div>
                    <div className="extra1ancho3"></div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="separadorExtra"></div>

      {/* Traditional Activities*/}
      <div className="Activities">
        <div
          style={{ marginTop: "50px", border: "0px" }}
          className=" p-3 mb-5  "
        >
          <h1
            className="sitiosdeinterestitulo"
            style={{ fontWeight: "700", color: "#6F8041" }}
          >
            TRADITIONAL <span style={{ color: "#6F8041" , fontFamily: "Roboto",}}>ACTIVITIES</span>
          </h1>
        </div>
        <div className="      Activities-background">
          <ExtraSlider publicaciones={traditional_activities} globalDomain={globalDomain} />
        </div>
      </div>

      {/* Events */}
      <div className="Events">
        {" "}
        <div
          style={{ border: "0px" }}
          className=" p-3 mb-5  "
        >
          <div className="container-fluid">
            <div className="row">

                {" "}

                <h1
            className="sitiosdeinterestitulo"
            style={{ fontWeight: "700", color: "#b1b1b1" , fontFamily: "Roboto"}}
          >
            EVENTS
          </h1>
              <Row style={{ marginTop: "-3%" }}>
                {event.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={3} className="mb-4">
                    <CardEvents
                      key={index}
                      titulo={item.title}
                      texto={item.field_invitation}
                      fecha={item.field_dateh}
                      lugar={item.field_places}
                      // test={item.field_dateh}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Extracurricular;
