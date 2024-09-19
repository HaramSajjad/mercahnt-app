import React, { useRef } from 'react';
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2"
import logo from "../../assets/img/logo.png";
import { Link } from 'react-router-dom';
import "./styles.css";
const AppBar = () => {

    const mobileNavRef = useRef(null);
    const toggleSideBar = () => {
        let width = mobileNavRef.current.style.width;
        if (width === "0px") {
            mobileNavRef.current.style.width = "250px";
            return;
        }
        mobileNavRef.current.style.width = "0px";
        return;

    }

    return (
        <div className='app-bar-container'>
            <div className='app-bar'>
                <Link to="/" className='logo'>
                    <img src={logo} alt="Logo" />
                    <span className='title'>Merchant</span>
                </Link>
                <nav className='nav-bar'>
                    <ul>
                        <li> <Link to="/"> Home </Link> </li>
                        <li> <Link to="/pricing"> Pricing </Link> </li>
                        <li> <Link to="/services"> Services </Link> </li>
                        <li> <Link to="/contact"> Contact </Link> </li>
                    </ul>
                </nav>
                <div className='user-area'>
                    <Link to='/login'> Login </Link> /
                    <Link to='/signup'> Sign Up </Link>
                </div>
                <nav className='mobile-nav-container'>
                    <div className='nav-bar-toggle' onClick={toggleSideBar}>
                        <HiBars3BottomRight />
                    </div>
                    <div ref={mobileNavRef} style={{ width: "0px", overflow: "hidden" }} className="mobile-nav">
                        <div className='nav-bar-toggle nav-close-btn' >
                            <span onClick={toggleSideBar}>
                                <HiOutlineXMark />
                            </span>
                        </div>
                        <div className='mobile-nav-links'>
                            <ul>
                                <li> <Link to="/"> Home </Link> </li>
                                <li> <Link to="/pricing"> Pricing </Link> </li>
                                <li> <Link to="/services"> Services </Link> </li>
                                <li> <Link to="/contact"> Contact </Link> </li>
                                <li><Link to='/login'> Login </Link> </li>
                                <li><Link to='/signup'> Sign Up </Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default AppBar
