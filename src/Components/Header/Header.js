import React from 'react';
import './header.css';
import {NavLink} from 'react-router-dom';
function Header({modalAction}) {
    let total=0;
    if(localStorage.products!==undefined){
        total = JSON.parse(localStorage.products).length;
    }
    return (
        <header className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-dark">
                <a className="navbar-brand" href="/">BEST PIZZA</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/"><i className="fa fa-home"></i></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/about">ABOUT</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/contact">CONTACT</NavLink>
                        </li>
                        <li id="basket">
                            <i className="fa fa-shopping-cart cart" onClick={() => { modalAction("on") }}></i>
                            <span>{total}</span>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;