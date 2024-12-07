import React from "react";
import 'react-slideshow-image/dist/styles.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';

// import { Slide } from 'react-slideshow-image';
// import { Carousel } from "@material-tailwind/react";

import memory1 from "../assets/memory_1.jpg";
import memory2 from "../assets/memory_2.jpg";
import memory3 from "../assets/memory_3.jpg";
import memory4 from "../assets/memory_4.jpg";
import memory5 from "../assets/memory_5.jpg";
import memory6 from "../assets/memory_6.jpg";


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '300px', // Ensure this is large enough
  width: '100%',  // Optionally, specify a width
};


const ImagesList = () => {
  const news = [
    {
      id: 1,
      title: "Title",
      description: "Description",
      images: [memory1, memory2],
    },
    {
      id: 2,
      title: "Title",
      description: "Description",
      images: [memory3, memory4],
    },
    {
      id: 3,
      title: "Title",
      description: "Description",
      images: [memory5, memory6],
    },
  ];

  return (
    <div className="p-6 bg-[#142143] text-white">
      <h1 className="text-3xl font-bold text-center mb-10">Projects</h1>
      <div className="asdf">
        {news.map((item) => (
          <div
            key={item.id}
          // className="rounded-lg shadow-lg bg-gray-800 hover:shadow-2xl transition-shadow overflow-hidden"
          >
            <Swiper
              direction="horizontal"
              slidesPerView={1}
              scrollbar={{ draggable: true }}

            >
              {item.images.map((slideImage, index) => {
                console.log(slideImage); // Debug the resolved URL
                return (
                  <SwiperSlide key={index}>
                    <a href={`/news/${item.id}`}>
                      <img src={slideImage} alt="image" />
                    </a>
                  </SwiperSlide>
                );
              })}
              <div className="p-6">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="mt-2 text-gray-300">{item.description}</p>
              </div>
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  );


};

export default ImagesList;
