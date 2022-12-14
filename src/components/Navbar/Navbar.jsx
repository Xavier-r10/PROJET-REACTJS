import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import './Navbar.css'
import logo from '../../assets/logo.png';

const Navbarmenu = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);

    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };


    let boxClass = ["main-menu menu-right menuq1"];

    if (isMenu) {
        boxClass.push('menuq2');
    }
    else {
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const [isMenuSubMenu1, setMenuSubMenu1] = useState(false);
    const [isMenuSubMenu2, setMenuSubMenu2] = useState(false);
    const [isMenuSubMenu3, setMenuSubMenu3] = useState(false);

    const toggleSubmenu = () => {
        setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    const toggleSubmenu1 = () => {
        setMenuSubMenu1(isMenuSubMenu1 === false ? true : false);
    };
    const toggleSubmenu2 = () => {
        setMenuSubMenu2(isMenuSubMenu2 === false ? true : false);
    };
    const toggleSubmenu3 = () => {
        setMenuSubMenu3(isMenuSubMenu3 === false ? true : false);
    };


    let boxClassSubMenu = ["sub__menus"];
    let boxClassSubMenu1 = ["sub__menus"];
    let boxClassSubMenu2 = ["sub__menus"];
    let boxClassSubMenu3 = ["sub__menus"];

    if (isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }
    else if (!isMenuSubMenu) {
        boxClassSubMenu.push('');
    }
    if (isMenuSubMenu1) {
        boxClassSubMenu1.push('sub__menus__Active');
    }
    else if (!isMenuSubMenu1) {
        boxClassSubMenu1.push('');
    }
    if (isMenuSubMenu2) {
        boxClassSubMenu2.push('sub__menus__Active');
    }
    else if (!isMenuSubMenu2) {
        boxClassSubMenu2.push('');
    }
    if (isMenuSubMenu3) {
        boxClassSubMenu3.push('sub__menus__Active');
    }
    else if (!isMenuSubMenu3) {
        boxClassSubMenu3.push('');
    }

    return (
        <div className="header22">
            <header className="header__middle">
                <div className="container22">
                    <div className="row">

                        {/* Add Logo  */}
                        <div className="header__middle__logo">
                            <NavLink exact activeClassName='is-active' to="/">
                                <img src={logo} alt="logo" style = {{transform:'scale(2)'}}/>
                            </NavLink>
                        </div>

                        <div className="header__middle__menus">
                            <nav className="main-nav " >

                                {/* Responsive Menu Button */}
                                {isResponsiveclose === true ? <>
                                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                                </> : <>
                                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                                </>}

                                <ul className={boxClass.join(' ')}>

                                    <li className="menu-item" >
                                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Accueil</NavLink>
                                    </li>
                                    <li className="menu-item" >
                                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/function`}> Fonctionnalités </NavLink>
                                    </li>
                                    <li className="menu-item" >
                                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/registration`}> Inscription </NavLink>
                                    </li>
                                    <li className="menu-item" >
                                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/login`}> Se connecter </NavLink>
                                    </li>   
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Navbarmenu;
                                    


                                    