import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./App.scss";
import AppRoutes from "./AppRoutes";
import Navbar from "./shared/Navbar";
import Sidebar from "./shared/Sidebar";
import SettingsPanel from "./shared/SettingsPanel";
import { withTranslation } from "react-i18next";
import UserClass from "../authHandler";
import { SnackbarProvider } from "notistack";

class App extends Component {
  state = {
    user: [],
  };
  componentDidMount() {
    // if (UserClass.isAuthenticated()) {
    const user = UserClass.getUser();
    const userJson = {
      name: user.user.name,
      email: user.user.email,
    };
    this.setState({
      user: userJson,
    });
    // }
    this.onRouteChanged();
  }
  logout = (event) => {
    event.preventDefault();
    UserClass.logout();
    this.props.history.push("/adminlogin");
  };
  render() {
    let navbarComponent = !this.state.isFullPageLayout ? (
      <Navbar logout={this.logout} />
    ) : (
      ""
    );
    let sidebarComponent = !this.state.isFullPageLayout ? (
      <Sidebar user={this.state.user} />
    ) : (
      ""
    );
    let SettingsPanelComponent = !this.state.isFullPageLayout ? (
      <SettingsPanel />
    ) : (
      ""
    );
    return (
      <div className="container-scroller">
        {navbarComponent}
        <div className="container-fluid page-body-wrapper">
          {sidebarComponent}
          <div className="main-panel">
            <div className="content-wrapper">
              <SnackbarProvider maxSnack={3}>
                <AppRoutes />
              </SnackbarProvider>
              {SettingsPanelComponent}
            </div>
            {/* { footerComponent } */}
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    console.log("ROUTE CHANGED");
    const { i18n } = this.props;
    const body = document.querySelector("body");
    if (this.props.location.pathname === "/layout/RtlLayout") {
      body.classList.add("rtl");
      i18n.changeLanguage("ar");
    } else {
      body.classList.remove("rtl");
      i18n.changeLanguage("en");
    }
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = [
      "/user-pages/login-1",
      "/adminlogin",
      "/user-pages/register-1",
      "/user-pages/lockscreen",
      "/error-pages/error-404",
      "/error-pages/error-500",
      "/general-pages/landing-page",
    ];
    for (let i = 0; i < fullPageLayoutRoutes.length; i++) {
      if (this.props.location.pathname === fullPageLayoutRoutes[i]) {
        this.setState({
          isFullPageLayout: true,
        });
        document
          .querySelector(".page-body-wrapper")
          .classList.add("full-page-wrapper");
        break;
      } else {
        this.setState({
          isFullPageLayout: false,
        });
        document
          .querySelector(".page-body-wrapper")
          .classList.remove("full-page-wrapper");
      }
    }
  }
}

export default withTranslation()(withRouter(App));
