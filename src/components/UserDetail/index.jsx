import React from "react";

import "./styles.css";

function UserDetail({ user }) {
  return (
    <section id="user-detail">
      <div className="img-box">
        <figure>
          <img src={user?.photo} alt="" />
          <div
            className="bg"
            style={{ backgroundImage: `url("${user?.photo}")` }}
          />
        </figure>
      </div>
      <h2>{user?.username}</h2>
      <p>{user?.city}</p>
      <div className="more-info">
        <div>
          <p>{user?.gender}</p>
          <p>{user?.sexualOrientation}</p>
        </div>
        <div>
          <p>{user?.age}</p>
        </div>
      </div>
    </section>
  );
}

export default UserDetail;
