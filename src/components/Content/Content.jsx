//Dependencies
import React from "react";

//Components
import Post from "../Post/Post";
import Card from "../Card/Card";
import Quotes from "../Quotes/Quotes";

//Images
import imgContent1 from "../../assets/sliderImage2.svg";
import imgContent2 from "../../assets/sliderImage3.svg";
import imgContent3 from "../../assets/sliderImage4.svg";
import ADONE from "../../assets/ADONE.svg";
import card from "../../assets/cardImage.svg";

const Content = () => {
  return (
    <main className="main container">
      <Post
        img={imgContent1}
        imgDescription={"Aquí estará la leyenda de la foto"}
        title={"1.Asignarles tareas sencillas"}
        p={
          "La primera idea o estrategia para ayudar a los niños a ser responsables es asignarles tareas sencillas. Para que la situación sea más fácil, puede ser conveniente que un adulto también las haga. Por ejemplo, ayudar a lavar los platos o hacer la colada con alguno de los progenitores es una buena manera de empezar. Será el primer paso para que adquieran autonomía: ser sus modelos. "
        }
        pStrong={
          "Pueden recoger los platos mientras uno de los progenitores los empieza a lavar"
        }
        p2={
          " Pueden hacer lo mismo con su propia colada, que separen su ropa blanca de la oscura y la lleven hacia los cubos correspondientes. De esta forma, progresivamente, los niños pueden comenzar a adquirir responsabilidades, lo que se trasladará también al uso de la tecnología, hacer los deberes, gestionar mejor su tiempo (trabajos para clase, tiempo para los amigos, juegos, etc.)."
        }
      />

      <img className="main__img" src={ADONE} alt="Ad img" />

      <Post
        img={imgContent2}
        imgDescription={"Aquí estará la leyenda de la foto"}
        title={"2.Asignarles tareas sencillas"}
        p={
          "La primera idea o estrategia para ayudar a los niños a ser responsables es asignarles tareas sencillas. Para que la situación sea más fácil, puede ser conveniente que un adulto también las haga. Por ejemplo, ayudar a lavar los platos o hacer la colada con alguno de los progenitores es una buena manera de empezar. Será el primer paso para que adquieran autonomía: ser sus modelos. "
        }
        pStrong={
          "Pueden recoger los platos mientras uno de los progenitores los empieza a lavar"
        }
        p2={
          " Pueden hacer lo mismo con su propia colada, que separen su ropa blanca de la oscura y la lleven hacia los cubos correspondientes. De esta forma, progresivamente, los niños pueden comenzar a adquirir responsabilidades, lo que se trasladará también al uso de la tecnología, hacer los deberes, gestionar mejor su tiempo (trabajos para clase, tiempo para los amigos, juegos, etc.)."
        }
      />

      <img className="main__img" src={ADONE} alt="Ad img" />

      <Post
        img={imgContent3}
        imgDescription={"Aquí estará la leyenda de la foto"}
        title={"3.Asignarles tareas sencillas"}
        p={
          "La primera idea o estrategia para ayudar a los niños a ser responsables es asignarles tareas sencillas. Para que la situación sea más fácil, puede ser conveniente que un adulto también las haga. Por ejemplo, ayudar a lavar los platos o hacer la colada con alguno de los progenitores es una buena manera de empezar. Será el primer paso para que adquieran autonomía: ser sus modelos. "
        }
        pStrong={
          "Pueden recoger los platos mientras uno de los progenitores los empieza a lavar"
        }
        p2={
          " Pueden hacer lo mismo con su propia colada, que separen su ropa blanca de la oscura y la lleven hacia los cubos correspondientes. De esta forma, progresivamente, los niños pueden comenzar a adquirir responsabilidades, lo que se trasladará también al uso de la tecnología, hacer los deberes, gestionar mejor su tiempo (trabajos para clase, tiempo para los amigos, juegos, etc.)."
        }
      />

      <Quotes />

      <img className="main__img" src={ADONE} alt="Ad img" />

      <Card
        img={card}
        alt={"card img"}
        topic={"Nutrición"}
        title={"Colapso mental: cuando siento el peso del mundo sobre mí"}
        text={
          "A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…"
        }
      />

      <Card
        img={imgContent2}
        alt={"card img"}
        topic={"Nutrición2"}
        title={"Colapso mental: cuando siento el peso del mundo sobre mí"}
        text={
          "A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…"
        }
      />

      <Card
        img={imgContent3}
        alt={"card img"}
        topic={"Nutrición3"}
        title={"Colapso mental: cuando siento el peso del mundo sobre mí"}
        text={
          "A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…"
        }
      />

      <Card
        img={card}
        alt={"card img"}
        topic={"Nutrición4"}
        title={"Colapso mental: cuando siento el peso del mundo sobre mí"}
        text={
          "A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…"
        }
      />

      <Card
        img={imgContent2}
        alt={"card img"}
        topic={"Nutrición5"}
        title={"Colapso mental: cuando siento el peso del mundo sobre mí"}
        text={
          "A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…"
        }
      />

      <Card
        img={imgContent3}
        alt={"card img"}
        topic={"Nutrición6"}
        title={"Colapso mental: cuando siento el peso del mundo sobre mí"}
        text={
          "A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…"
        }
      />
    </main>
  );
};

export default Content;
