import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";
const SuperAdminLogin = lazy(() => import("./user-pages/SuperAdminLogin"));

const Dashboard = lazy(() => import("./dashboard/Dashboard"));

const Banks = lazy(() => import("./banks/Banks"));

const Currencies = lazy(() => import("./currencies/Currencies"));

const Transactions = lazy(() => import("./transactions/Transactions"));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />

          <Route path="/banks" component={Banks} />

          <Route path="/currencies" component={Currencies} />

          <Route path="/transactions" component={Transactions} />

          <Route path="/adminlogin" component={SuperAdminLogin} />

          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
