import Image from "next/image";
import { useState, useEffect } from "react";
import client from "../../../public/client.png";
import client2 from "../../../public/client2.jpg";
import client3 from "../../../public/client3.png";
import client4 from "../../../public/client4.png";
import client5 from "../../../public/client5.png";
import client6 from "../../../public/client6.png";
import client7 from "../../../public/client7.jpg";
import client8 from "../../../public/client8.png";
import client9 from "../../../public/client9.svg";
import client10 from "../../../public/client10.png";
import client11 from "../../../public/client11.jpg";
import client12 from "../../../public/client12.png";

const images = [
  client,
  client2,
  client3,
  client4,
  client5,
  client6,

];

const images2 = [
    client7,
    client8,
    client9,
    client10,
    client11,
    client12,
]


import Slider from "react-slick";

var settings = {
  dots: false,
  autoplay:true,
  infinite: true,
  speed: 500,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  slidesToShow: 5,
  slidesToScroll: 3 ,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }
  ]
};

const SliderComp = ({ cards }) => {
  return (
    <div>
      <Slider {...settings} className="py-10">
        {images.map((item, index) => (
          <div className="w-12 h-14" key={index}>
            <Image
              key={index}
              className="w-full h-full"
              src={item}
              alt={`Photo ${"hello"}`}
            />
          </div>
        ))}
      </Slider>
      <Slider {...settings}>
        {images2.map((item, index) => (
          <div className="w-12 h-14" key={index}>
            <Image
              key={index}
              className="w-full h-full"
              src={item}
              alt={`Photo ${"hello"}`}
             
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComp;
