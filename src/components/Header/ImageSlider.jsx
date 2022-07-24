//Dependencies
import React, { useState } from "react";

//Data
import { SliderData } from "../Data/SliderData";

//Unicons
import * as Unicons from "@iconscout/react-unicons";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  setInterval(() => {
    nextSlide();
    console.log("cambio");
  }, 1000000000);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      {SliderData.map((slide, index) => {
        return (
          <div
            className={
              index === current ? "slider__slide--active" : "slider__slide"
            }
            key={index}
          >
            {index === current && (
              <img className="slider__img" src={slide.image} alt="img slider" />
            )}
          </div>
        );
      })}
      <div className="slider__text">
        <h1 className="slider__text-h1">
          Su viaje de <p className="slider__text-h1--pink">salud emocional </p>
          empieza aqui
        </h1>
        <p className="slider__text-p">
          Conoce nuestro profesionales con licencia
        </p>
        <p className="slider__text-p slider__text-p--2">
          Todos se someten a un proceso seguro de verificación y acreditación,
          además de adherirse a estrictos códigos de ética y confidencialidad.
        </p>
      </div>
      <a id="arrow" className="slider-arrow" href="#arrow">
        <Unicons.UilArrowDown color="#f778b9" className="slider-arrow-icon"/>
      </a>
    </div>
  );
};

export default ImageSlider;
