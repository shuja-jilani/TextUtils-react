import React from "react";
import PropTypes from "prop-types";
// import { useState } from 'react';
import { Link } from "react-router-dom";

// ` se template literal aur usme $ se javascript
//props ka scene ye h ki jo main app.js h usse hum content bhejenge aur wahi phir yahan daal diya jaega
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        {/* <a className="navbar-brand" href="#">
          {props.title}
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              {/* <a className="nav-link active" aria-current="page" href="#">
                Home
              </a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
              {/* <a className="nav-link" href="#">
                {props.aboutText}
              </a> */}
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form> */}
          <div
            className={`mx-2 form-check form-switch text-${props.mode === "light" ? "dark" : "light"
              }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode}
              role="switch"
              id="flexSwitchCheckDefault"
              aria-checked
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Blue Dark Mode
            </label>
          </div>
          <div
            className={`mx-2 form-check form-switch text-${props.mode === "light" ? "danger" : "light"
              }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.redMode}
              role="switch"
              id="flexSwitchCheckDefault"
              aria-checked
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Red Dark Mode
            </label>
          </div>
          <div
            className={`mx-2 form-check form-switch text-${props.mode === "light" ? "success" : "light"
              }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.greenMode}
              role="switch"
              id="flexSwitchCheckDefault"
              aria-checked
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Green Dark Mode
            </label>
          </div>
          <div
            className={`mx-2 form-check form-switch text-${props.mode === "light" ? "purple" : "light"
              }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.purpleMode}
              role="switch"
              id="flexSwitchCheckDefault"
              aria-checked
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Purple Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
//bootstrap mein primary blue hota h , success green hota h aur danger red
Navbar.propTypes = {
  //proptypes ka kaam h prop ka datatype set krna
  title: PropTypes.string.isRequired, //isrequired h agr aur nhi dala to error
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  //agar by chance props bheje hi nhi to
  title: "Set title here",
  aboutText: "About",
};
