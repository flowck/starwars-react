import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/people"></Redirect>
        </Route>

        <Route exact path="/people">
          <h1>People</h1>
        </Route>

        <Route exact path="/people/:id">
          <h1>A person</h1>
        </Route>
      </Switch>
    </Router>
  );
}
