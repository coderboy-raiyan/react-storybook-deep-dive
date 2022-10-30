import React from "react";
import "./Profile.css";

const Profile = ({ role }) => {
  return (
    <div className="profile">
      <img
        className="profile__image"
        src="https://avatars.githubusercontent.com/u/76396442?v=4"
        alt=""
      />
      <div className="profile__info">
        <h1>Hi I'm Raiyan {role}</h1>
        <h3>Professional Software engineer</h3>
      </div>
    </div>
  );
};

export default Profile;
