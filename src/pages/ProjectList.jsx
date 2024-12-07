import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import zamindar1 from "../assets/zamindar_4.png";
import zamindar2 from "../assets/zamindar_2.png";
import zamindar3 from "../assets/zamindar_3.png";

import boyqush1 from "../assets/boyqush_1.png";
import boyqush2 from "../assets/boyqush_2.png";
import boyqush3 from "../assets/boyqush_3.png";

import burgutkoz from "../assets/burgutkoz_1.png";


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}

const ProjectList = () => {
  const news = [
    {
      id: 1,
      title: "Zamindar",
      description: "Description",
      images: [zamindar1, zamindar2, zamindar3],
    },
    {
      id: 2,
      title: "Boyqush",
      description: "Description",
      images: [boyqush1, boyqush2, boyqush3],
    },
    {
      id: 3,
      title: "Burgutko'z",
      description: "Description",
      images: [burgutkoz],
    },
  ];

  return (
    <div className="p-6 bg-[#142143] text-white">
      <h1 className="text-3xl font-bold text-center mb-10">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item) => (
          <div
            key={item.id}
            className="rounded-lg shadow-lg bg-gray-800 hover:shadow-2xl transition-shadow overflow-hidden"
          >
            <Slide>
              {item.images.map((slideImage, index) => (
                <a
                  href={`/project/${item.id}`}
                  key={index}>
                  <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage})` }}>
                  </div>
                </a>
              ))}
            </Slide>
            <div className="p-6">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
