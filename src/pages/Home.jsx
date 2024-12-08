import React, { useState, useEffect } from "react";
import ImagesList from "../pages/Images";
import whitePlane from "../assets/whitePlane.png";
import blackPlane from "../assets/blackPlane.png";

import pageBackground from "../assets/1background.png";

import background1 from "../assets/zamin_back.png";
import background2 from "../assets/boyqush_back.png";
import background3 from "../assets/burgut_back.png";

import logo1 from "../assets/logo_zamindar.png";
import logo2 from "../assets/logo_boyqush.png";
import logo3 from "../assets/logo_burgutkoz.png";

import ProjectList from "../pages/ProjectList";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

const Home = () => {
  const slides = [
    { image: background1, logo: logo1 },
    { image: background2, logo: logo2 },
    { image: background3, logo: logo3 },
  ];
  return (
    <div
  className="relative min-h-screen bg-cover bg-center"
  style={{
    backgroundImage: `url(${pageBackground})`,
    height: "100vh", // Ekran balandligiga moslashtirish
  }}
>
      <section
        id="home"
        className="relative flex items-center justify-center h-[600px] overflow-hidden"
        style={{height:"100vh"}}
      >
        {/* Slideshow Container */}
        <div className="absolute w-full h-full flex animate-slide-loop">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full flex flex-col items-center justify-center"
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="object-contain max-w-[70%] h-[70%]"
              />
              {/* Logo */}
              <img
                src={slide.logo}
                alt={`Logo ${index}`}
                className="mt-4 w-44 h-44 object-contain" // Increased size
              />
            </div>
          ))}
        </div>
      </section>
      {/* Memories Section */}
      <section
        id="news"
        className="py-20 text-center"
        style={{ backgroundColor: "#142143" }}
      >
        <ImagesList />
      </section>

      <section
        id="projects"
        className="py-20 text-center"
        style={{ backgroundColor: "#142143" }}
      >
        <ProjectList />
      </section>

      {/* Airplanes Section */}
      <section
        id="airplane"
        className="py-20"
        style={{ backgroundColor: "#142143" }}
      >
        <h2 className="text-center text-2xl font-semibold mb-6 text-white">
          Airplanes Comparison
        </h2>
        <div>
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src={whitePlane}
                alt="Before Image"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={blackPlane}
                alt="After Image"
              />
            }
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
