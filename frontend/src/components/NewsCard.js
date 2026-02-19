import React from "react";

const NewsCard = ({ news }) => {
  return (
    <div className="news-item">
      <strong>{news.title}</strong>
      <p style={{fontSize: "0.85em", margin: "8px 0", opacity: 0.8}}>
        {news.source}  {new Date(news.date).toLocaleDateString()}
      </p>
      <p style={{margin: "8px 0"}}>{news.summary}</p>
      <a href={news.url} target="_blank" rel="noopener noreferrer" style={{color: "#00bfff", textDecoration: "none"}}>
        Read more 
      </a>
    </div>
  );
};

export default NewsCard;
