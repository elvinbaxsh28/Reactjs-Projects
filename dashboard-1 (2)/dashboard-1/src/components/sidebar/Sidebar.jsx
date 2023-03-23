import React from 'react'
import './sidebar.css';
import logo from '../../assets/images/seniorlogohr.svg';
import sidebar_items from '../../assets/JsonData/sidebar_routes.json';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
 import {FaBars,} from "react-icons/fa"; 
// import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
// import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';




const SidebarItem = props => {

    return (
        <div className="sidebar__item">
            {/* <div className={`sidebar__item-inner ${active}`}> */}
            {/* {console.log("activeeeeeeeeeeeee",props.active)} */}
           

            <div className="sidebar__item-inner ">
                <i className={props.icon}></i>
                <span>
                {props.title}
                </span>
            </div>
        </div>
    )
}

const isActive = (props) => {
    
    

}
const Sidebar = props => {
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen (!isOpen); 

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={logo} alt="Company logo"/>
            </div>
            <div style={{marginLeft: isOpen ? "250px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
            
            {
                sidebar_items.map((item, index) => (
                    <NavLink to={item.route} key={index}>
                        <SidebarItem
                            title= {item.display_name}
                            icon={item.icon}
                            active = {item.route === props.pathname}
                        />
                    </NavLink>
                ))
            }
        </div>
    )
}


// const Sidebar = ({children}) => {
//     const[isOpen ,setIsOpen] = useState(false);
//     const toggle = () => setIsOpen (!isOpen);
 
//     return(
//     <div className="container">
//            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
//                <div className="top_section">
//                 <div className="sidebar__logo">
//                     <img src={logo} alt="Company logo"/>
//                 </div>
//                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
//                        <FaBars onClick={toggle}/>
//                    </div>
//                </div>
//                {
                 
//                }
//            </div>
//            <main>{children}</main>
//         </div>
//     );

// }

export default Sidebar;



