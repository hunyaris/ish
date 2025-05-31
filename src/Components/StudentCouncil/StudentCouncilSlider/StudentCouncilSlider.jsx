import React, { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardStudentCouncil from "../StudentCouncilCard/CardStudentCouncil";

import "../StudentCouncilSlider/StudentCouncilSlider.css";

const StudentCouncilSlider = ({  globalDomain }) => {
  const [studentactivities, setActivities] = useState([]);
  useEffect(() => {
    axios
      .get(globalDomain + `/communityActivities/Student Council?_format=json`, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        setActivities(res.data);
      });
  }, [globalDomain]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,

  };

  const groupedPublicaciones = [];
  for (let i = 0; i < studentactivities.length; i += 2) {
    groupedPublicaciones.push(studentactivities.slice(i, i + 2));
  }

  return (
    <div className="Section-StudentCouncilSlider">
      <div className="text-Activities">
        <h1>Activities</h1>
      </div>

      <Slider {...settings}>
        {groupedPublicaciones.map((group, index) => (
          <div key={index} className="card-container">
            {group.map((card, subIndex) => (
              <CardStudentCouncil
                key={subIndex}
                img={card.field_image_activities}
                titulo={card.field_title_activities}
                texto={card.field_description_of_activities}
                globalDomain={globalDomain}
                isTextFirst={subIndex === 1}
              />
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StudentCouncilSlider;
