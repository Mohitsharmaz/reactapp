import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  const [mode, setmode] = useState("Dark Mode");

  const clickme = () => {
    console.log("clicked");
    if (document.body.style.backgroundColor === "white") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setmode("Light Mode");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setmode("Dark Mode");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={clickme}
              />
              <label
                style={{ color: "white" }}
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {mode}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
