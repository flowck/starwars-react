import { ListSarships } from "@/modules/Starships";
import { CharacterList } from "@/modules/Character";
import { Route, Switch, Redirect } from "react-router-dom";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/characters"></Redirect>
      </Route>

      <Route exact path="/characters">
        <CharacterList />
      </Route>

      <Route exact path="/characters/:id">
        <h1>Characters</h1>
      </Route>

      <Route exact path="/starships">
        <ListSarships />
      </Route>
    </Switch>
  );
}
