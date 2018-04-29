import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";
import reducers from "./reducers";
// import reducers from "./reducers";
import PreviousGamesList from "./containers/PreviousGamesList";
import NewGame from "./containers/NewGame";
import Header from "./components/Header";
import CurrentGame from "./containers/CurrentGame";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/games/:id" component={CurrentGame} />
          <Route path="/previousGames/" component={PreviousGamesList} />
          {/*Needs to be after /posts/new since it has the wildcard ":id" condition */}
          <Route path="/" component={NewGame} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
