import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import SignUpPage from "./pages/SignUp";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import SignInPage from "./features/SignIn/Main";
import Products from "./components/Products";
import CartPage from "./pages/CartPage";
import data from './appData';

function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/signin" exact component={SignInPage} />
        <Route path="/signup" exact component={SignUpPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
