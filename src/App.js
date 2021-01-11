import LoginAdminPage from "components/LoginAdmin";
import CustomerPage from "pages/Customer";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import "aos/dist/aos.css";
import AdminPage from "./pages/Admin";
import productsApi from "api/productsApi";
import { useDispatch } from "react-redux";
import { loadCarList } from "features/Product/productSlice";
import usersApi from "api/usersApi";
import { loadUserList } from "features/SignIn/userSlice";


function App() {
  const dispatch = useDispatch();

  //call api list of car
  useEffect(() => {
    const fetchCarList = async () => {
      try {
        const response = await productsApi.getAll();
        const action = loadCarList(response);
        dispatch(action);
      } catch (error) {
        console.log("Failed to fetch photo list: ", error);
      }
    };
    fetchCarList();
  }, []);

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
