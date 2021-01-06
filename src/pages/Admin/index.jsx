import LoginAdminPage from "components/LoginAdmin";
import React, { useEffect } from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";

Admin.propTypes = {};

function Admin(props) {
  const history = useHistory();
  const match = useRouteMatch();
  const isLogin = localStorage.getItem('admin');
  console.log({ match });
  useEffect(() => {
    if (!isLogin) history.push(`${match.url}/login`);
  }, []);
  return (
    <BrowserRouter>
      <h1>Đây là home page</h1>
      <Router>
        <Switch>
            
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default Admin;
