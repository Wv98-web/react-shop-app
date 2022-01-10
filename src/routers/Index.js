import React, { Component } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Footer from "../components/Footer/Tarbar";
import Home from "../pages/Home/Home";
import User from "../pages/User/User";
import Cart from "../pages/Cart/Cart";
import NotFound from "../pages/NotFound/NotFound";

const routerList = [
  { path: "/home", component: Home },
  {
    path: "/user",
    component: User,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/NotFound",
    component: NotFound,
  },
];

export class RouterConfig extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            {routerList.map((item, index) => {
              return <Route key={index} path={item.path} exact component={item.component} />;
            })}
            <Redirect from="/" to="/home" />
          </Switch>
        </div>

        <Footer />
      </BrowserRouter>
    );
  }
}

export default RouterConfig;
