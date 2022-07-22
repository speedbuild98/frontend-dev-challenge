//Dependencies
import React from "react";

//Unicons
import * as Unicons from "@iconscout/react-unicons";

//Images
import ad2 from "../../assets/ad2.svg";

const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <div className="newsletter__container">
          <div className="newsletter__container__modal">
            <Unicons.UilX
              onClick={() => setShowModal((prev) => !prev)}
              className="newsletter__container__modal-icon"
            />
            <h5 className="newsletter__container__modal-title">
              ¡Gracias por subscribirte!
            </h5>
            <img
              className="newsletter__container__modal-ad"
              src={ad2}
              alt="ad"
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
