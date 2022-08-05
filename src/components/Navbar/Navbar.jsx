import React from 'react';
import "./Navbar.scss";

import { useRef } from 'react';
import { useLocation, useNavigate, matchPath } from "react-router-dom"

import SearchIcon from "../../assets/Svgs/SearchIcon";
import NotificationIcon from "../../assets/Svgs/NotificationIcon";
import UserIcon from "../../assets/Svgs/UserIcon";
import DownArrow from "../../assets/Svgs/DownArrow";
import Logout from '../../assets/Svgs/Logout';
import { Link } from 'react-router-dom';

import useToken from '../../hooks/useToken';
// import usePathPattern from '../../hooks/usePathPattern';

// const routes = ['/', '/store', '/products', '/users', '/cash', '/statistics', '/history', 'settings'];

function Navbar() {
    const logout = useRef();

    const openHandler = () => {
        logout.current.classList.toggle('toggle-modal');
    }

    const navigate = useNavigate()
    const [token, setToken] = useToken()
    function handleLogOut() {
        navigate("/", { replace: true });
        setToken(false);
    }

    const { pathname } = useLocation();

    return (
        <header className="navbar">
            <div className="navbar__title">
                {pathname === "/" ? "Dashboard" : pathname === "/store" ? "Do'kon" : pathname === "/products" ? "Mahsulotlar" : pathname === "/users" ? "Foydalanuvchilar" : pathname === "/cash" ? "Kassa" : pathname === "/statistics" ? "Hisobotlar bo'limi" : pathname === "/history" ? "History" : pathname === "/settings" ? "Sozlamalar" : ""}
            </div>
            <ul className="navbar__list">
                <li className="navbar__item">
                    <SearchIcon />
                </li>

                <li className="navbar__item">
                    <NotificationIcon />
                </li>

                <li ref={logout} className="navbar__item user-icon" onClick={openHandler}>
                    <UserIcon />

                    <div className="logout-modal">
                        <div className="triangle"></div>
                        <div className="profile-info">
                            <UserIcon />
                            <div className="user-info">
                                <p className="name">Zilola Talipova</p>
                                <Link to="/user/profile" className='see-profile'>Profilni ko'rish</Link>
                            </div>
                        </div>
                        <button className="logout" onClick={handleLogOut}>
                            <Logout />
                            <span>Chiqish</span>
                        </button>
                    </div>
                </li>

                <li className="navbar__item">
                    <DownArrow />
                </li>
            </ul>
        </header>
    )
}

export default Navbar