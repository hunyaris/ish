import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import ParentCouncilCard from "../ParentCouncilCard/ParentCouncilCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ParentCouncilSlider = ({  globalDomain }) => {




    const [parentsSlider, setParentsSlider] = useState([]);


    useEffect(() => {
      axios
        .get(globalDomain + `/communityActivities/Parent Council?_format=json`, {
          headers: {
            "content-type": "application/json",
          },
        })
        .then((res) => {
          setParentsSlider(res.data);
        });
    }, [globalDomain]);








    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 468,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    };

    return (
        <div className="Section-ParentCouncilSlider">
            <div className="text-Activities-Parents">
                <h1>Activities</h1>
            </div>

            <Slider {...settings}>
                {parentsSlider.map((card, index) => (
                    <div key={index-1}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <ParentCouncilCard
                                img={card.field_image_activities}
                                titulo={card.field_title_activities}
                                texto={card.field_description_of_activities}
                                isFirstInPair={(index % 2) === 1}
                                globalDomain={globalDomain}
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ParentCouncilSlider;