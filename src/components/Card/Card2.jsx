//Dependencies
import React from "react";

const Card2 = (props) => {
  return (
    <div className="card--2">
      <img className="card--2__img" src={props.img} alt={props.alt} />
      <div className="card--2__info">
        <p className="card--2__info-topic">{props.topic}</p>
        <p className="card--2__info-title">{props.title}</p>
        <p className="card--2__info-text">{props.text}</p>
      </div>
    </div>
  );
};

export default Card2;