import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

const NavBarPage = () => {
  return (
    <header>
      <div className="container">
        <div className="content flex-all">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="err" />
            </Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to={"/"}>الصفحة الرئيسية</Link>
            </li>
            <li>
              <Link to={"/guardian"}>ولي الامر</Link>
            </li>
            <li>
              <Link to={"/student"}>طالب</Link>
            </li>
            <li>
              <Link to={"/teacher"}>معلم</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBarPage;
