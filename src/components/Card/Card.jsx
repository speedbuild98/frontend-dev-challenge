//Dependencies
import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img className="card__img" src={props.img} alt={props.alt} />
      <div className="card__info">
        <p className="card__info-topic">{props.topic}</p>
        <p className="card__info-title">{props.title}</p>
        <p className="card__info-text">{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
