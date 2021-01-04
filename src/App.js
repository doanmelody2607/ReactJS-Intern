import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ReactPage from "./pages/ReactPage";
import SignUpPage from "./pages/SignUp";
import SignInPage from "./pages/SignIn";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={ReactPage} />
        <Route path="/signin" exact component={SignInPage} />
        <Route path="/signup" exact component={SignUpPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
