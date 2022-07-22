//Dependencies
import React, { useState } from "react";

//Components
import iconQuote from "../../assets/quote.svg";

//Data
import PeopleData from "../Data/PeopleData";

const Quote = () => {
  const [index, setIndex] = useState(0);
  const { name, text } = PeopleData[index];

  const checkNumber = (number) => {
    if (number > PeopleData.length - 1) {
      return 0;
    }
    if (number < 0) {
      return PeopleData.length - 1;
    }
    return number;
  };

  const nextQuote = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevQuote = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <article className="quote">
      <img className="quote-img" src={iconQuote} alt="quote img" />
      <p className="quote-text"> {text} </p>
      <h4 className="quote-name">~ {name} ~</h4>
      <div className="quote__buttons">
        <span onClick={prevQuote} className="quote__buttons-dot"></span>
        <span
          onClick={nextQuote}
          className="quote__buttons-dot quote__buttons-dot--active"
        ></span>
        <span onClick={nextQuote} className="quote__buttons-dot"></span>
      </div>
    </article>
  );
};

export default Quote;
