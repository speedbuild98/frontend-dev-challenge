import React from 'react'

//Icons and Images
import profile from '../../assets/profile.svg';

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__img">
        <img src={profile} className="profile__img-avatar" alt='profile img'/>
        <p className="profile__img-user">@Gallardo</p>
      </div>
      <p className="profile__text">
        ¿Cómo podemos diseñar una educación que tenga como resultado niños más
        responsables? En este artículo compartimos algunas estrategias que
        aumentan la probabilidad de éxito para este objetivo.
      </p>
    </div>
  );
}

export default Profile