import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginPages, HomePages, TaskPages, TaskOnePages } from "./pages";
import { RoutesPrivate } from "./service/index.service";
import { NavbarShared } from "./shared";
export const AppRouter = () => {
  return (
    <>
      <Router>
        <NavbarShared />
        <Switch>
          <Route exact path="/login" component={LoginPages} />
          <RoutesPrivate exact path="/task/:id" component={TaskPages} />
          <RoutesPrivate exact path="/task" component={TaskOnePages} />
          <RoutesPrivate exact path="/home" component={HomePages} />
          <RoutesPrivate exact path="/" component={HomePages} />
          <Route path="*">
            <h1>Error 404</h1>
          </Route>
        </Switch>
      </Router>
    </>
  );
};
