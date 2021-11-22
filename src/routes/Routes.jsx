import { Route, Switch } from "react-router-dom";
import { Navabar } from "../components/Navbar";

export const Routes = () => {
  return (
    <>
      <Navabar />
      <Switch>
        <Route exact path="/">
          <h1>home</h1>
        </Route>
        <Route path="/randommeal">
          <h1>random meal</h1>
        </Route>
        <Route>
          <h1>page not found</h1>
        </Route>
      </Switch>
    </>
  );
};
