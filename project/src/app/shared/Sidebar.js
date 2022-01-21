import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { Trans } from "react-i18next";
import "./sidebar.css";
class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach((i) => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(this.state).forEach((i) => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: "/apps", state: "appsMenuOpen" },
      { path: "/basic-ui", state: "basicUiMenuOpen" },
      { path: "/advanced-ui", state: "advancedUiMenuOpen" },
      { path: "/form-elements", state: "formElementsMenuOpen" },
      { path: "/tables", state: "tablesMenuOpen" },
      { path: "/maps", state: "mapsMenuOpen" },
      { path: "/icons", state: "iconsMenuOpen" },
      { path: "/charts", state: "chartsMenuOpen" },
      { path: "/user-pages", state: "userPagesMenuOpen" },
      { path: "/error-pages", state: "errorPagesMenuOpen" },
      { path: "/general-pages", state: "generalPagesMenuOpen" },
      { path: "/ecommerce", state: "ecommercePagesMenuOpen" },
    ];

    dropdownPaths.forEach((obj) => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true });
      }
    });
  }

  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a
              href="!#"
              className="nav-link"
              onClick={(evt) => evt.preventDefault()}
            >
              <div className="nav-profile-image">
                <img
                  src={require("../../assets/images/fainance/CBOS.jpg")}
                  alt="profile"
                />
                <span className="login-status online"></span>{" "}
                {/* change to offline or busy as needed */}
              </div>
              <div className="nav-profile-text">
                <span
                  className="font-weight-bold mb-2"
                  style={{
                    textAlign: "right",
                    maxWidth: 122,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  {this.props.user.name}
                </span>
                <span
                  className="text-small"
                  style={{ textAlign: "right", color: "grey" }}
                >
                  <Trans>{this.props.user.email}</Trans>
                </span>
              </div>
              <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
            </a>
          </li>
          <li
            className={
              this.isPathActive("/dashboard") ? "nav-item active" : "nav-item"
            }
          >
            <Link
              className="nav-link d-flex"
              style={{ flex: 1, justifyContent: "space-between" }}
              to="/dashboard"
            >
              <span className="menu-title">
                <Trans>{"الاحصائيات"}</Trans>
              </span>
              <i
                style={{ marginLeft: 0 }}
                className="mdi mdi-chart-line menu-icon"
              ></i>
            </Link>
          </li>

          <li
            className={
              this.isPathActive("/transactions")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link
              className="nav-link d-flex"
              style={{ flex: 1, justifyContent: "space-between" }}
              to="/transactions"
            >
              <span className="menu-title">
                <Trans>{"العمليات"}</Trans>
              </span>
              <i
                style={{ marginLeft: 0 }}
                className="mdi mdi-settings menu-icon"
              ></i>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/currencies") ? "nav-item active" : "nav-item"
            }
          >
            <Link
              className="nav-link d-flex"
              style={{ flex: 1, justifyContent: "space-between" }}
              to="/currencies"
            >
              <span className="menu-title">
                <Trans>{"اسعار الصرف"}</Trans>
              </span>
              <i
                style={{ marginLeft: 0 }}
                className="mdi mdi-cash menu-icon"
              ></i>
            </Link>
          </li>

          <li
            className={
              this.isPathActive("/banks") ? "nav-item active" : "nav-item"
            }
          >
            <Link
              className="nav-link d-flex"
              style={{ flex: 1, justifyContent: "space-between" }}
              to="/banks"
            >
              <span className="menu-title">
                <Trans>{"البنوك"}</Trans>
              </span>
              <i
                style={{ marginLeft: 0 }}
                className="mdi mdi-bank menu-icon"
              ></i>
            </Link>
          </li>

          <li
            className={
              this.isPathActive("/bank-users") ? "nav-item active" : "nav-item"
            }
          >
            <Link
              className="nav-link d-flex"
              style={{ flex: 1, justifyContent: "space-between" }}
              to="/bank-users"
            >
              <span className="menu-title">
                <Trans>{"المستخدمين"}</Trans>
              </span>
              <i
                style={{ marginLeft: 0 }}
                className="mdi mdi-account menu-icon"
              ></i>
            </Link>
          </li>

          {/* <li
            className={
              this.isPathActive("/reports") ? "nav-item active" : "nav-item"
            }
          >
            <Link
              className="nav-link d-flex"
              style={{ flex: 1, justifyContent: "space-between" }}
              to="/reports"
            >
              <span className="menu-title">
                <Trans>{"التقارير"}</Trans>
              </span>
              <i
                style={{ marginLeft: 0 }}
                className="mdi mdi-receipt menu-icon"
              ></i>
            </Link>
          </li> */}
          <li
            className={
              this.isPathActive("/basic-ui") ? "nav-item active" : "nav-item"
            }
          >
            <div
              style={{
                flex: 1,
                justifyContent: "space-between",
                textAlign: "right",
              }}
              className={
                this.state.basicUiMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("basicUiMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-title">{"التقارير"}</span>
              {/* <i className="menu-arrow"></i> */}
              <i
                style={{ marginLeft: 0 }}
                className="mdi mdi-receipt menu-icon"
              ></i>
            </div>
            <Collapse in={this.state.basicUiMenuOpen}>
              <ul
                style={{ paddingRight: 0 }}
                dir="rtl"
                className="nav flex-column sub-menu"
              >
                <li className="nav-item">
                  {" "}
                  <Link
                    // style={{ paddingRight: 0 }}
                    className={
                      this.isPathActive("/basic-ui/buttons")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/basic-ui/buttons"
                  >
                    {"البنوك"}
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    // style={{ paddingRight: 0 }}
                    className={
                      this.isPathActive("/basic-ui/dropdowns")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/basic-ui/dropdowns"
                  >
                    {"العملات"}
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    // style={{ paddingRight: 0 }}
                    className={
                      this.isPathActive("/basic-ui/typography")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/basic-ui/typography"
                  >
                    {"المعاملات"}
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }
}

export default withRouter(Sidebar);
