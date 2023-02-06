import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";
import Search from "./Search";

const Header = (props) => {
  const { setUserCart, setAdminAccess } = props;
  const handleLogout = () => {
    localStorage.clear();
    props.setToken("");
    setUserCart([]);
    setAdminAccess(false);
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to={"/"} className="head-links">
            <img src="https://res.cloudinary.com/dulsfxtjz/image/upload/v1674588307/Ice%20Factory%20Outfitters/images_wzlgn3.png" 
              width="250"
              height="120"/>
          </Link>
        </div>
        {/* <h2 className="delete-later">Ice Factory Outfitters</h2> */}

        <div className="search-bar">
          <form>
            <input
              type="search"
              name="search"
              placeholder="Search the Factory"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="search-button"
              onClick={(e) => {
                handleSearch(e);
              }}
            >
              Search
            </button>
          </form>
        </div>

        <div className="login-cart"></div>
        {!props.token ? (
          <div className="register-login">
            <i className="fa-solid fa-user"></i>
            <Link to={"/LoginRegister"} className="head-links">
              Login/Register
            </Link>
          </div>
        ) : (
          <div className="logged-in">
            <div className="profile">
              <Link to={"/profile"} className="head-links">
                My Profile
              </Link>
            </div>

            <div className="logout" onClick={handleLogout}>
              <Link to={"/"} className="head-links">
                Logout
              </Link>
            </div>
          </div>
        )}
        <div className="cart">
          <Link to={"/cart"} className="head-links" >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcfOIzMtjuoYFvoUTDFM6caEqipyhWzUrMO5YWn72mECSyKH1-TwP083me1gmj9Nbk5XU&usqp=CAU" 
              width="43"
              height="40"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
