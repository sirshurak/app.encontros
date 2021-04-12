import React from "react";
import useUsers from "../../hooks/UseUsers";
import UsersInfoSideSlider from "../../components/UsersInfoSideSlider";
import UsersInfoVertical from "../../components/UsersInfoVertical";

function Home() {
  const { users: likedUsers } = useUsers("liked");
  const { users: chatUsers } = useUsers("chat");

  return (
    <div className="home">
      <header className="app-header">
        <h1>Conversas</h1>
      </header>
      <UsersInfoSideSlider
        users={likedUsers}
        title={`Te curtiram ${likedUsers?.length ?? ""}`}
        ageTitle="anos"
      />
      <UsersInfoVertical users={chatUsers} title="Conversas" ageTitle="anos" />
    </div>
  );
}

export default Home;
