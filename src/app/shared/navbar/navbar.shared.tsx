import {Navbar, Container, Nav} from 'react-bootstrap'
import { NavLink} from 'react-router-dom'
export const NavbarShared = () => {
  return ( <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">App Task</Navbar.Brand>
    <Nav className="me-auto">
      <NavLink exact className='nav-link' to="/home" activeClassName="active">Home</NavLink>
      <NavLink className='nav-link' to="/task" activeClassName="active">Task</NavLink>
      <NavLink className='nav-link' to="/login" activeClassName="active">Login</NavLink>
    </Nav>
    </Container>
  </Navbar>
    </>
    );
};
