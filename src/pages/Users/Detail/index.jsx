import React from "react";
import GoHome from "../../../components/GoHome";
import UserDetail from "../../../components/UserDetail";

import "./styles.css";

function UsersDetail({ data }) {
  return (
    <div className="users-detail">
      <UserDetail user={data} />
      <GoHome />
    </div>
  );
}

export default UsersDetail;
