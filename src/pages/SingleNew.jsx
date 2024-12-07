import { useParams } from "react-router-dom";
import memory1 from "../assets/memory_1.jpg";
import memory2 from "../assets/memory_2.jpg";
import memory3 from "../assets/memory_3.jpg";
import memory4 from "../assets/memory_4.jpg";
import memory5 from "../assets/memory_5.jpg";
import memory6 from "../assets/memory_6.jpg";
import React from "react";

const SingleNew = () => {
  const { id } = useParams();
  const news = {
    title: "Breaking News: Market Hits Record High",
    date: "December 6, 2024",
    author: "John Doe",
    image: memory1,
    content: `
      The stock market has reached an unprecedented high today, with major indices showing significant growth. 
      Experts attribute this to improved economic indicators and increased investor confidence.
      This milestone marks a turning point in the recovery process following global economic challenges.
      
      Analysts are optimistic about continued growth, though they caution against potential market corrections.
    `,
  };

  return (
    <article className="article">
      <img
        src={news.image}
        alt={news.title}
        className="article-img"
      />
      <h2 className="text-3xl text-white font-bold mb-2">{news.title}</h2>
      <div className="flex items-center text-sm text-white mb-4">
        <span>{news.date}</span>
        <span className="mx-2">•</span>
        <span>By {news.author}</span>
      </div>
      <div className="text-white leading-relaxed">
        {news.content.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );

};

export default SingleNew;
