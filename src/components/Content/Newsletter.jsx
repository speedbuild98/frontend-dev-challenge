import React from 'react'

//Images
import newletterImg from '../../assets/newletterImg.svg';

const Newsletter = () => {
  
  function alertMsg(){
    alert('¡Gracias por suscribirte!')
  }

  return (
    <div className='newsletter'>
        <img className='newsletter__img' src={newletterImg} alt="computer img" />
        <div className='newsletter__caja'>
          <div className="newsletter__caja-p">
            <p className="newsletter__caja-p-title">Noticias</p>
            <p className="newsletter__caja-p-text">No te pierdas ninguna novedad</p>
          </div>
          <input className="newsletter__caja-input" type="mail" placeholder='Inserte su correo'></input>
          <button className="newsletter__caja-button" onClick={alertMsg}>Suscribirse</button>
        </div>
    </div>
  )
}

export default Newsletter