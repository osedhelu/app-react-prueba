import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../service";
export const NavbarShared = () => {
  const auth: any = useAuth();
  const cerrarSeccion = () => {
    auth.logout()
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">App Task</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink
              exact
              className="nav-link"
              to="/home"
              activeClassName="active"
            >
              Home
            </NavLink>
            <NavLink className="nav-link" to="/task" activeClassName="active">
              Task
            </NavLink>
            <NavLink className="nav-link" to="/login" activeClassName="active">
              Login
            </NavLink>
            <Nav.Link className="nav-link" onClick={cerrarSeccion}>
              Sign Out
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
