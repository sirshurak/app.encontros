import React from "react";
import AppContext from "../../contexts/AppContext";

function UserInfoClick({ user, children }) {
  return (
    <AppContext.Consumer>
      {({ changePage }) => (
        <button
          onClick={() => changePage("UsersDetail", user)}
          type="button"
          className="link"
        >
          {children}
        </button>
      )}
    </AppContext.Consumer>
  );
}

export default UserInfoClick;
