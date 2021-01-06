import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Set up Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./app/store";
import { Provider } from "react-redux";
// import i18n (needs to be bundled ;))
import "./i18n";
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="Loading ....">
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
