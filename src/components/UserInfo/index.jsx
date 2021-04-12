import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

function UserInfo({
  variant,
  photo,
  username,
  age,
  ageTitle,
  gender,
  sexualOrientation,
  city,
}) {
  return (
    <section id="user-to-chat" className={variant}>
      <figure>
        <img src={photo} alt="" />
      </figure>
      <div className="info">
        {variant === "horizontal" && <h3 className="username">{username}</h3>}
        <div className="more-info">
          {variant === "vertical" && <h3 className="username">{username}</h3>}
          <span className="age">
            {", "} {age} {ageTitle}
          </span>
          <p>
            <span className="gender">{gender}</span>
            <span className="sexual-orientation">
              {", "}
              {sexualOrientation}
            </span>
          </p>
          <p>
            <span className="city">{city}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

UserInfo.propTypes = {
  variant: PropTypes.oneOf(["horizontal", "vertical"]).isRequired,
  photo: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  ageTitle: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  sexualOrientation: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default UserInfo;
