import React, { useState } from "react";
import ImagesList from "../pages/Images";
import whitePlane from "../assets/whitePlane.png";
import blackPlane from "../assets/blackPlane.png";

import ProjectList from "../pages/ProjectList";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import SwiperLanding from "./SwiperLanding";
import Navbar from './Navbar';


const Home = () => {
  return (
    <div className="relative" style={{ backgroundColor: "#142143" }}>
      <img src="/logo.png" alt="logo" style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: "30px", paddingBottom: "20px", minWidth: "200px", maxWidth: '300px', width: '100%'}}/>
      <div className="logo"></div>
      <section
        id="home"
        className="bg-cover bg-center relative p-6"
        style={{
          // backgroundImage: `url(${team})`,
        }}
      >
        <SwiperLanding />
        <iframe
              className="vidyo aspect-video"
              src="https://www.youtube.com/embed/oh_W9UNMhMQ?autoplay=1"
              frameBorder="0"
              allow="encrypted-media"
              allowFullScreen
            />
        <Navbar />
        {/* <div className="absolute bottom-20 left-20">
          <button
            onClick={() => setShowVideo(true)}
            className="relative flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl transform transition-all duration-300 group"
          >
            <FaRegPlayCircle size={50} className="relative z-10" />
          </button>
        </div> */}

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
