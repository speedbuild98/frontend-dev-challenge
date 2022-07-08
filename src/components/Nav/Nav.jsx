import React, {useState} from 'react';

//components
import Links from './Links';


//Icons and Images
import logoMenu from '../../assets/logoMenu.svg';
import searchIcon from '../../assets/searchIcon.svg';
import searchIcon2 from '../../assets/searchIcon2.svg';
import menuIcon from '../../assets/menuIcon.svg';
import xIcon from '../../assets/xIcon.svg';


function Nav() {


const [nav, setNav] = useState(false);
const handleClick = () => setNav(!nav);

  return (
    <nav>
      <div className='navbar'>
             <div className='navbar__button' onClick={handleClick}>
                  <a href="#">
                        <img className='navbar__button-img' src={!nav ? menuIcon : xIcon} alt="Menu Icon" /> 
                  </a>
             </div>
            <img className='navbar__logo' src={logoMenu} alt="Logo Menu" />
            <img src={searchIcon} alt="Logo Menu" />
      </div>
      
      <div className='navmenu'>
            <div className='navmenu__search'>
                  <input className='navmenu__search-input' autoFocus placeholder='Buscar' type="text" />
                  <img className='navmenu__search-img' src={searchIcon2} alt="" />
            </div>
            <div className='navmenu__container'>
                  <a className="navmenu__container-title" href="#">Embarazo</a>
                  <Links link="#" text="Quiero ser mamá"/>
                  <Links link="#" text="Voy a ser mamá"/>
                  <Links link="#" text="Parto"/>
            </div>
            <div className='navmenu__container'>
                  <a className="navmenu__container-title" href="#">Embarazo</a>
                  <Links link="#" text="Quiero ser mamá"/>
                  <Links link="#" text="Voy a ser mamá"/>
                  <Links link="#" text="Parto"/>
            </div>
            <div className='navmenu__container'>
                  <a className="navmenu__container-title" href="#">Embarazo</a>
                  <Links link="#" text="Quiero ser mamá"/>
                  <Links link="#" text="Voy a ser mamá"/>
                  <Links link="#" text="Parto"/>
            </div>
            <div className='navmenu__container'>
                  <a className="navmenu__container-title" href="#">Embarazo</a>
                  <Links link="#" text="Quiero ser mamá"/>
                  <Links link="#" text="Voy a ser mamá"/>
                  <Links link="#" text="Parto"/>
            </div>
      </div>
    </nav>
  )
}

export default Nav