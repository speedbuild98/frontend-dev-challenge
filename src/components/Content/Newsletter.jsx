import React from 'react'

//Images
import newletterImg from '../../assets/newletterImg.svg';

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <img className='newsletter__img' src={newletterImg} alt="Newletter Image" />
        <div className='newsletter__caja'>
          <div className="newsletter__caja-p">
            <p className="newsletter__caja-p-title">Title</p>
            <p className="newsletter__caja-p-text">Text</p>
          </div>
          <input className="newsletter__caja-input" type="mail" placeholder='Inserte su correo'></input>
          <button className="newsletter__caja-button">Suscribirse</button>
        </div>
    </div>
  )
}

export default Newsletter