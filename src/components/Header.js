import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="ContainerHeader">
        <div className="spaceHeader"></div>
        <div className="CartMainHeader">
          <h1 className="Logo">LOGO</h1>
          <div className="HeadarContainer">
            <NavLink to="/" className="customNavLink">
              Home
            </NavLink>
            <NavLink to="/register" className="customNavLink">
              Kayıt ol
            </NavLink>
            <NavLink to="/login" className="customNavLink">
              Giriş
            </NavLink>
          </div>
        </div>
        <div className="spaceHeader"></div>
      </div>
    </>
  );
}

export default Header;
