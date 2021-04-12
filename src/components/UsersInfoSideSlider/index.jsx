import React from "react";
import SideSlider from "../SideSlider";
import UserInfo from "../UserInfo";
import UserInfoClick from "../UserInfoClick";

import "./styles.css";

function UsersChatSideSlider({ users, title, ageTitle }) {
  return (
    <div id="users-info-side-slider">
      <SideSlider title={title}>
        {users?.length &&
          users.map((user, key) => (
            <UserInfoClick user={user} key={key}>
              <UserInfo {...user} variant="horizontal" ageTitle={ageTitle} />
            </UserInfoClick>
          ))}
      </SideSlider>
    </div>
  );
}

export default UsersChatSideSlider;
