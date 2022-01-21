import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Spinner from "../app/shared/Spinner";
import { withSnackbar } from "notistack";
const SuperAdminLogin = lazy(() => import("./user-pages/SuperAdminLogin"));

const Dashboard = lazy(() => import("./dashboard/Dashboard"));

const Banks = lazy(() => import("./banks/Banks"));

const Currencies = lazy(() => import("./currencies/Currencies"));

const Transactions = lazy(() => import("./transactions/Transactions"));

const Users = lazy(() => import("./users/Users"));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route
            path="/adminlogin"
            component={(props) => <SuperAdminLogin {...props} />}
          />

          <Route exact path="/dashboard" component={AuthDash} />

          <Route path="/banks" component={AuthBanks} />

          <Route path="/currencies" component={AuthCurrencies} />

          <Route path="/transactions" component={AuthTrans} />

          <Route path="/bank-users" component={AuthUsers} />

          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default withSnackbar(AppRoutes);

function AuthDash() {
  return (
    <RequireAuth>
      <Dashboard />
    </RequireAuth>
  );
}

function AuthBanks() {
  return (
    <RequireAuth>
      <Banks />
    </RequireAuth>
  );
}

function AuthTrans() {
  return (
    <RequireAuth>
      <Transactions />
    </RequireAuth>
  );
}
function AuthUsers() {
  return (
    <RequireAuth>
      <Users />
    </RequireAuth>
  );
}

function AuthCurrencies() {
  return (
    <RequireAuth>
      <Currencies />
    </RequireAuth>
  );
}
