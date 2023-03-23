import React from "react";

import Sidebar from "../sidebar/Sidebar";
import Router from "../Router";
import Topnav from "../topnav/TopNav";

import { useSelector, useDispatch } from "react-redux";
import ThemeActions from "../../redux/actions/ThemeActions";

import "./layout.css";

import { BrowserRouter, Route } from "react-router-dom";
import { useEffect } from "react";

const Layout = (props) => {
  const themeReducer = useSelector((state) => state.ThemeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");
    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(ThemeActions.setMode(themeClass));
    dispatch(ThemeActions.setColor(colorClass));
  }, [dispatch]);

  // console.log(themeReducer)
  // let x = props.var;
  // console.log(x);
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
            {console.log("props", props.location.pathname)}

            <Sidebar pathname={props.location.pathname} />
            <div className="layout__content" id="paddingChange">
              <Topnav />
              <div className="layout__content-main">
                <Router />
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
