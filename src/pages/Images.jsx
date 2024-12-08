import React from "react";
import img1 from "../assets/memory_1.jpg";
import img2 from "../assets/memory_2.jpg";
import img3 from "../assets/memory_3.jpg";
import img4 from "../assets/memory_4.jpg";


const ImagesList = () => {
  const news = [
    {
      id: 1,
      title: "News Title 1",
      description: "Short description for news 1.",
      image: img1,
    },
    {
      id: 2,
      title: "News Title 2",
      description: "Short description for news 2.",
      image: img2,
    },
    {
      id: 3,
      title: "News Title 3",
      description: "Short description for news 3.",
      image: img3,
    },
    {
      id: 4,
      title: "News Title 3",
      description: "Short description for news 4.",
      image: img4,
    },
  ];

  const videos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
  ];

  return (
    <div className="min-h-screen p-6 bg-[#142143] text-white">
      <div className="container mx-auto grid gap-6 lg:grid-cols-3">
        {/* Left Section: News */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2">
          {news.map((item) => (
            <div
              key={item.id}
              className="rounded-lg shadow-lg bg-gray-800 hover:shadow-2xl transition-shadow overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="mt-2 text-gray-300">{item.description}</p>
                <a
                  href={`/news/`+item.id}
                  className="mt-4 text-blue-500 hover:text-blue-300 font-medium"
                >
                  More Info
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: Videos */}
        <div className="grid grid-rows-2 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden"
            >
              <iframe
                src={video}
                title={`YouTube video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagesList;

