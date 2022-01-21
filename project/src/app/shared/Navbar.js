import React, { Component } from "react";
// import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

class Navbar extends Component {
  toggleOffcanvas() {
    document.querySelector(".sidebar-offcanvas").classList.toggle("active");
  }
  toggleRightSidebar() {
    document.querySelector(".right-sidebar").classList.toggle("open");
  }
  render() {
    return (
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          {/* <Link className="navbar-brand brand-logo" to="/"><img src={require('../../assets/images/logo.svg')} alt="logo" /></Link> */}
          <Link className="navbar-brand brand-logo" to="/">
            <span>{"  SudaBank  "}</span>
            <img
              style={{ height: 40, width: 40 }}
              src={require("../../assets/images/fainance/unnamed.jpg")}
              alt="logo"
            />
          </Link>
          <Link className="navbar-brand brand-logo-mini" to="/">
            <img
              style={{ height: 40, width: 40 }}
              src={require("../../assets/images/fainance/unnamed.jpg")}
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            onClick={() => document.body.classList.toggle("sidebar-icon-only")}
          >
            <span className="mdi mdi-menu"></span>
          </button>
          <ul
            className="navbar-nav navbar-nav-right"
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <li
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
              className="nav-item nav-logout d-none d-flex"
            >
              <span
                style={{
                  fontSize: 20,
                  color: "#27367f",
                  fontWeight: "700",
                  paddingBottom: 3,
                }}
              >
                {"بنك السودان المركزي"}
              </span>
            </li>
            <li className="nav-item nav-logout d-none d-lg-block">
              <a className="nav-link" href="!#" onClick={this.props.logout}>
                <span>
                  <i
                    style={{ color: "#27367f" }}
                    className="mdi mdi-power mdi-36px"
                  ></i>
                </span>
              </a>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            onClick={this.toggleOffcanvas}
          >
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
