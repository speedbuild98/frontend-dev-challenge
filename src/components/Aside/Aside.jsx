//Dependencies
import React from 'react'

//Components
import Card2 from '../Card/Card2';

//Icons and Images
import profile from "../../assets/profile.svg";
import imgContent1 from "../../assets/sliderImage2.svg";
import imgContent2 from "../../assets/sliderImage3.svg";
import imgContent3 from "../../assets/sliderImage4.svg";
import ADTWO from "../../assets/ADTWO.svg";
import card from "../../assets/cardImage.svg";

const Aside = () => {
  return (
    <aside className="aside">
      <div className="profile profile--2">
      <div className="profile__img">
        <img src={profile} className="profile__img-avatar" alt="profile img" />
        <p className="profile__img-user">@Gallardo</p>
      </div>
      <p className="profile__text">
        ¿Cómo podemos diseñar una educación que tenga como resultado niños más
        responsables? En este artículo compartimos algunas estrategias que
        aumentan la probabilidad de éxito para este objetivo.
      </p>
    </div>

    <Card2
        img={card}
        alt={"card img"}
        topic={"Nutrición"}
        title={"Colapso mental: cuando siento el peso del mundo sobre mí"}
        text={
          "A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…"
        }
      />

      <Card2
        img={imgContent2}
        alt={"card img"}
        topic={"Nutrición2"}
        title={"Colapso mental: cuando siento el peso del mundo sobre mí"}
        text={
          "A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…"
        }
      />

      <Card2
        img={imgContent3}
        alt={"card img"}
        topic={"Nutrición3"}
        title={"Colapso mental: cuando siento el peso del mundo sobre mí"}
        text={
          "A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…"
        }
      />

      <img className="main__img" src={ADTWO} alt="Ad img" />

      <Card2
        img={card}
        alt={"card img"}
        topic={"Nutrición"}
        title={"Colapso mental: cuando siento el peso del mundo sobre mí"}
        text={
          "A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…"
        }
      />

      <Card2
        img={imgContent2}
        alt={"card img"}
        topic={"Nutrición2"}
        title={"Colapso mental: cuando siento el peso del mundo sobre mí"}
        text={
          "A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…"
        }
      />

      <Card2
        img={imgContent3}
        alt={"card img"}
        topic={"Nutrición3"}
        title={"Colapso mental: cuando siento el peso del mundo sobre mí"}
        text={
          "A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…"
        }
      />

      <Card2
        img={card}
        alt={"card img"}
        topic={"Nutrición4"}
        title={"Colapso mental: cuando siento el peso del mundo sobre mí"}
        text={
          "A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…"
        }
      />

      <img className="main__img" src={ADTWO} alt="Ad img" />
    </aside>
  )
}

export default Aside