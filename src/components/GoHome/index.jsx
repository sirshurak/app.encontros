import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import AppContext from "../../contexts/AppContext";

import "./styles.css";

function GoHome() {
  return (
    <AppContext.Consumer>
      {({ changePage }) => (
        <button
          id="go-home"
          className="link"
          type="button"
          onClick={() => changePage("Home")}
        >
          <FontAwesomeIcon
            icon={faLongArrowAltLeft}
            size="2x"
            color="#3498db"
          />
        </button>
      )}
    </AppContext.Consumer>
  );
}
export default GoHome;
