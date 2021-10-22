import { PeopleList } from "@/modules/People";
import { ListSarships } from "@/modules/Starships";
import { Route, Switch, Redirect } from "react-router-dom";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/people"></Redirect>
      </Route>

      <Route exact path="/people">
        <PeopleList />
      </Route>

      <Route exact path="/people/:id">
        <h1>A person</h1>
      </Route>

      <Route exact path="/starships">
        <ListSarships />
      </Route>
    </Switch>
  );
}
