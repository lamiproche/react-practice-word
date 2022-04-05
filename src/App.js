import React from "react";
import Header from "./components/Header";
import DayList from "./components/DayList";
import Day from "./components/Day";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Empty from "./components/Empty";
import CreateWord from "./components/CreateWord";
import CreateDay from "./components/CreateDay";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          <Route path="/create">
            <CreateWord />
          </Route>
          <Route path="/dayadd">
            <CreateDay />
          </Route>
          <Route>
            <Empty />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
