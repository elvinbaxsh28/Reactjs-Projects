import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import "./sidebar.css";
import logo from "../../assets/images/seniorlogohr.svg";
import logo2 from "../../assets/images/favicon.svg";
import sidebar_items from "../../assets/JsonData/sidebar_routes.json";
// import Layout from "../layout/Layout";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const SidebarItem = (props) => {
  let x = props.var;
  console.log(x);
  return (
    <div style={{ paddingLeft: x ? "20px" : "0" }} className="sidebar__item">
      {/* <div className={`sidebar__item-inner ${active}`}> */}
      {/* {console.log("activeeeeeeeeeeeee", props.active)} */}
      <div className="sidebar__item-inner ">
        <i className={props.icon}></i>
        <span style={{ display: x ? "block" : "none" }}>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false); // UseState
  const toggle = () => {
    setIsOpen(!isOpen);
  //   if (isOpen === false) {
  //     document.getElementById("").style.paddingLeft = "300px";
  //   } else {
  //     document.getElementById("").style.paddingLeft = "80px";
  //   }
  };

  return (
    <div style={{ width: isOpen ? "300px" : "80px" }} className="sidebar">
      <div className="collapse-button" onClick={toggle}>
        Menu
      </div>
      <div className="sidebar__logo">
        <img
          style={{ display: isOpen ? "block" : "none" }}
          src={logo}
          alt="Company logo"
        />
        <img
          style={{ display: isOpen ? "none" : "block" }}
          src={logo2}
          alt="Company logo"
        />
      </div>
      {sidebar_items.map((item, index) => (
        <NavLink to={item.route} key={index}>
          <SidebarItem
            title={item.display_name}
            icon={item.icon}
            active={item.route === props.pathname}
            var={isOpen}
          />
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
