import Footer from "components/Footer";
import Header from "components/Header";
import SignUpPage from "components/SignUp";
import SignInPage from "features/SignIn/Main";
import Homepage from "pages/Homepage";
import React from "react";
import {
  BrowserRouter as Router,
  Route, Switch,
  useRouteMatch
} from "react-router-dom";

Customer.propTypes = {};

function Customer(props) {
  const match = useRouteMatch();
 
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={`${match.url}`} component={Homepage} />
        <Route exact path={`${match.url}signin`} component={SignInPage} />
        <Route exact path={`${match.url}signup`} component={SignUpPage} />
      </Switch>
      <Footer />
    </Router>
  );
}
export default Customer;
