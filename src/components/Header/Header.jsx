import React from 'react'

//components
import ImageSlider from './ImageSlider';
import {SliderData} from './SliderData'

const Header = () => {

  return (
    <header className="header">
      <ImageSlider slides= {SliderData} />
    </header>
  );
}

export default Header