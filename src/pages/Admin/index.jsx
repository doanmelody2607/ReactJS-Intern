import DashBoardPage from "components/Admin/DashBoard";
import ListCarsPage from "components/Admin/ListCars";
import ListUsersPage from "components/Admin/ListUsers";

import React, { useEffect } from "react";
import "./Admin.scss";
import {
  BrowserRouter,
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { SiMercedes } from "react-icons/si";
import { FaCarSide, FaHome, FaUserFriends } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import CreatePage from "components/Admin/ListCars/Create";
import EditPage from "components/Admin/ListCars/Edit";
Admin.propTypes = {};

function Admin(props) {
  const history = useHistory();
  const match = useRouteMatch();
  const isLogin = localStorage.getItem("admin");
  if (!isLogin) history.push(`${match.url}/login`);
  function handleLogout() {
    localStorage.removeItem("admin");
    window.location.reload(false);
  }
  return (
    <Router>
      <Route
        render={({ location, history }) => (
          <div className="content d-flex">
            <div className="content__siderbar">
              <SideNav
                onSelect={(selected) => {
                  const to = `${match.url}/` + selected;
                  if (location.pathname !== to) {
                    history.push(to);
                  }
                }}
              >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="dashboard">
                  <NavItem eventKey="dashboard">
                    <NavIcon>
                      <FaHome style={{ fontSize: 25 }} />
                    </NavIcon>
                    <NavText>Home</NavText>
                  </NavItem>
                  <NavItem eventKey="listcars">
                    <NavIcon>
                      <SiMercedes style={{ fontSize: 25 }} />
                    </NavIcon>
                    <NavText>ListCars</NavText>
                  </NavItem>
                  <NavItem eventKey="typecars">
                    <NavIcon>
                      <FaCarSide style={{ fontSize: 25 }} />
                    </NavIcon>
                    <NavText>TypeCars</NavText>
                  </NavItem>
                  <NavItem eventKey="listusers">
                    <NavIcon>
                      <FaUserFriends style={{ fontSize: 25 }} />
                    </NavIcon>
                    <NavText>ListUsers</NavText>
                  </NavItem>
                  <NavItem onClick={handleLogout}>
                    <NavIcon>
                      <FiLogOut style={{ fontSize: 25 }} />
                    </NavIcon>
                    <NavText>Log in</NavText>
                  </NavItem>
                </SideNav.Nav>
              </SideNav>
            </div>
            <main className="content__main p-4">
              <Route
                exact
                path={`${match.url}/dashboard`}
                component={(props) => <DashBoardPage />}
              />
              <Route
                exact
                path={`${match.url}/listusers`}
                component={(props) => <ListUsersPage />}
              />
              <Route
                exact
                path={`${match.url}/listcars`}
                component={(props) => <ListCarsPage />}
              />
              <Route
                exact
                path={`${match.url}/create`}
                component={(props) => <CreatePage />}
              />
              <Route
                exact
                path={`${match.url}/listcars/:carId`}
                component={(props) => <EditPage />}
              />
            </main>
          </div>
        )}
      />
    </Router>
  );
}

export default Admin;
