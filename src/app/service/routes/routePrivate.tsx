import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
export const RoutesPrivate = ({ component: Component, rest }: any) => {
  const auth: any = useAuth();
  return (
    <Route {...rest}>{auth.user ? <Component /> : <Redirect to="login" />}</Route>
  );
};
