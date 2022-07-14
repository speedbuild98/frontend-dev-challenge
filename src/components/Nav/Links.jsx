import React from 'react'

//Icons and Images
import arrowRigth from '../../assets/arrowRigth.svg';

const Links = (props) => {
  return (
      <a className='navmenu__container-a' href={props.link}>{props.text}<img alt='Arrow icon' className='navmenu__container-icon' src={arrowRigth}/></a>
  )
}

export default Links