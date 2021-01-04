import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ReactPage from "./pages/ReactPage";
import SignUpPage from "./pages/SignUp";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import SignInPage from "./pages/SignIn";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/sign-in" exact component={SignInPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
