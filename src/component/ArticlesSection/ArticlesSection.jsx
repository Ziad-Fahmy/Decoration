import React from "react";

import "./ArticlesSection.css";

import ArticlesSection1 from "../../assets/ArticlesSection1.png";
import ArticlesSection2 from "../../assets/ArticlesSection2.png";
import ArticlesSection3 from "../../assets/ArticlesSection3.png";

const ArticlesSection = () => {
  const articlesData = [
    {
      title: "Kitchen Design",
      description: "Let's Get Solution For Building Construction Work",
      date: "20 December, 2022",
      image: ArticlesSection1,
    },
    {
      title: "Living Design",
      description: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "22 December, 2022",
      image: ArticlesSection2,
    },
    {
      title: "Interior Design",
      description: "Best For Any Office & Business Interior Solution",
      date: "25 December, 2022",
      image: ArticlesSection3,
    },
  ];

  const ArticleCard = ({ title, description, date, image }) => {
    return (
      <div className="article-card">
        <img src={image} alt={title} className="article-image" />
        {/* <div className="article-title">{title}</div> */}
        <div className="article-content">
          <h3>{description}</h3>
          <div className="article-meta">
            <span>{date}</span>
            {/* <span>&#8250;</span> */}
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="articles-section">
      <h2>Articles & News</h2>
      <p className="articles-section-p">
        It is a long established fact that a reader will be distracted by the of
        readable content of a page when lookings at its layouts the points of
        using.
      </p>
      <div className="article-container">
        {articlesData.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;
