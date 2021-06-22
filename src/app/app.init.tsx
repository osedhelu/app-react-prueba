import "bootstrap/dist/css/bootstrap.min.css";
import { AppRouter } from "./app.router";
import { AuthPrivider } from "./service/auth/usePrivider";

export const App = () => {
  return (
    <>
      <AuthPrivider>
        <AppRouter />
      </AuthPrivider>
    </>
  );
};
