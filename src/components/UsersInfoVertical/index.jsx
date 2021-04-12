import React from "react";
import { Container } from "react-bootstrap";
import UserInfo from "../UserInfo";
import UserInfoClick from "../UserInfoClick";

import "./styles.css";

function UsersInfoVertical({ users, title, ageTitle }) {
  return (
    <section id="users-info-vertical">
      <Container>
        <h2>{title}</h2>
        {users?.length &&
          users.map((user, key) => (
            <UserInfoClick user={user} key={key}>
              <UserInfo {...user} variant="vertical" ageTitle={ageTitle} />
            </UserInfoClick>
          ))}
      </Container>
    </section>
  );
}

export default UsersInfoVertical;
