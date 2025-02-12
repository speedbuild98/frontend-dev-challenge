//Dependencies
import React, { useState } from "react";

//Components
import Links from "./Links";

//Unicons
import * as Unicons from "@iconscout/react-unicons";

//Icons and Images
import logoMenu from "../../assets/logoMenu.svg";
import searchIcon from "../../assets/searchIcon.svg";
import searchIcon2 from "../../assets/searchIcon2.svg";
import menuIcon from "../../assets/menuIcon.svg";
import xIcon from "../../assets/xIcon.svg";

function Nav() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [search, setSearch] = useState(false);
  const handleClick2 = () => setSearch(!search);

  return (
    <nav>
      <div className={!search ? "navbar navbar--hidden" : "navbar navbar--active"}>
        <div className="navbar__button" onClick={handleClick}>
          <img
            className="navbar__button-img"
            src={!nav ? menuIcon : xIcon}
            alt="Menu Icon"
          />
        </div>
        <img className="navbar__logo" src={logoMenu} alt="Logo Menu" />
        <img
          onClick={handleClick2}
          className={
            !search
              ? "navbar__button-search navbar__button-search--visible"
              : "navbar__button-search navbar__button-search--hidden"
          }
          src={searchIcon}
          alt="Logo Menu"
        />
      </div>

      <div
        className={
          !search
            ? "navbar__searchmenu navbar__searchmenu--hidden"
            : "navbar__searchmenu navbar__searchmenu--visible"
        }
      >
        <input
          placeholder="Buscar..."
          className="navbar__searchmenu-input"
          type="text"
        />
      </div>

      <div
        className={
          !nav ? "navmenu navmenu--hidden" : "navmenu navmenu--visible"
        }
      >
        <div
          className={
            !nav ? "navmenu__search hidden" : "navmenu__search visible"
          }
        >
          <input
            className="navmenu__search-input"
            autoFocus
            placeholder="Buscar..."
            type="text"
          />
          <img className="navmenu__search-img" src={searchIcon2} alt="" />
        </div>
        <div
          className={
            !nav ? "navmenu__container hidden" : "navmenu__container visible"
          }
        >
          <a className="navmenu__container-title" href="/#">
            Embarazo
          </a>
          <Links link="/#" text="Quiero ser mamá" />
          <Links link="/#" text="Voy a ser mamá" />
          <Links link="/#" text="Parto" />
        </div>
        <div
          className={
            !nav ? "navmenu__container hidden" : "navmenu__container visible"
          }
        >
          <a className="navmenu__container-title" href="/#">
            Educación
          </a>
          <Links link="/#" text="Aprende a ser mamá" />
          <Links link="/#" text="Educación para bebés" />
          <Links link="/#" text="Educación para niños" />
        </div>

        <div
          className={
            !nav ? "navmenu__social hidden" : "navmenu__social visible"
          }
        >
          <a className="navmenu__social-icon" href="/#">
            <Unicons.UilLinkedin />
          </a>
          <a className="navmenu__social-icon" href="/#">
            <Unicons.UilFacebook />
          </a>
          <a className="navmenu__social-icon" href="/#">
            <Unicons.UilInstagramAlt />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
