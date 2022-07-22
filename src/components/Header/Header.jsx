//Dependencies
import React from "react";

//Components
import ImageSlider from "./ImageSlider";
import { SliderData } from "../Data/SliderData";

const Header = () => {
  return (
    <header className="header">
      <ImageSlider slides={SliderData} />
    </header>
  );
};

export default Header;
