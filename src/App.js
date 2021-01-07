import LoginAdminPage from "components/LoginAdmin";
import CustomerPage from "pages/Customer";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import AdminPage from "./pages/Admin";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/admin/login" component={LoginAdminPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/" component={CustomerPage} />
      </Switch>
    </Router>
  );
}
export default App;
