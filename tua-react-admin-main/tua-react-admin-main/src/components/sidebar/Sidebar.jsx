import React, {useState} from 'react'

import { Link } from 'react-router-dom'

import './sidebar.css'

import logo from '../../assets/images/logo.png'

import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import {FaBars,} from "react-icons/fa"; 

const SidebarItem = props => {

    const active = props.active ? 'active' : ''
    let x = props.var;
    return (
        <div style={{ paddingLeft: x ? "30px" : "0" }} className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span style={{ display: x ? "block" : "none" }}>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

const Sidebar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen (!isOpen);
    //        if (isOpen === false) {
    //   document.getElementById("paddingChange").style.paddingLeft = "300px";
    // } else {
    //   document.getElementById("paddingChange").style.paddingLeft = "80px";
    // }
    }  

    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)

    return (
        <div style={{ width: isOpen ? "300px" : "80px" }} className='sidebar'>
            <div className="sidebar__logo">
                <img 
               style={{ display: isOpen ? "block" : "none" }}
                src={logo} alt="company logo" />
            </div>
            <div style={{marginLeft: isOpen ? "250px" : "29px"}} className="bars">
                <FaBars onClick={toggle}/>
            </div>
            {
                sidebar_items.map((item, index) => (
                    <Link to={item.route} key={index}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                            var={isOpen}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar
