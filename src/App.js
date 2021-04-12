import React, { useState, useRef, useCallback } from "react";
import Navigator from "react.cordova-navigation_controller";
import "bootstrap/dist/css/bootstrap.min.css";
// Learn more about the Navigator: https://www.npmjs.com/package/react.cordova-navigation_controller

import "./app.css";

import AppContext from "./contexts/AppContext";

// --pages--//
import Home from "./pages/Home/index";
import UsersDetail from "./pages/Users/Detail";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [currentData, setCurrentData] = useState();
  const navigator = useRef();

  const menuClick = useCallback(
    (goToPage) => {
      if (navigator.current) navigator.current.changePage(goToPage);
    },
    [navigator]
  );

  const changeCurrentPageCallback = useCallback(
    (page) => {
      setCurrentPage(page);
    },
    [setCurrentPage]
  );

  const currentActive = (page) => (currentPage === page ? "active" : undefined);
  const getCurrentData = (page) =>
    currentPage === page ? currentData : undefined;

  const changePageCallback = useCallback(
    (page, data) => {
      setCurrentData(data);
      menuClick(page);
    },
    [setCurrentData, menuClick]
  );

  const providerValue = { changePage: changePageCallback };

  return (
    <div className="App">
      <AppContext.Provider value={providerValue}>
        <main>
          <Navigator
            onRef={(ref) => {
              navigator.current = ref;
            }} // Required
            top="0px"
            onChangePage={changeCurrentPageCallback}
          >
            <Home
              key="Home"
              levelPage={0}
              data={getCurrentData("Home")}
              top="0px"
              backgroundColor="inherit"
            />
            <UsersDetail
              key="UsersDetail"
              backgroundColor="inherit"
              levelPage={1}
              data={getCurrentData("UsersDetail")}
            />
          </Navigator>
        </main>
        <footer className="footer-menu">
          <ul>
            <li>
              <button
                onClick={() => menuClick("Home")}
                className={currentActive("Home")}
                type="button"
              >
                Conversas
              </button>
            </li>
          </ul>
        </footer>
      </AppContext.Provider>
    </div>
  );
}

export default App;
