import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {useAuth} from "../../service/auth/useAuth";
export const LoginPages = () => {
  const auth: any = useAuth()
  const handleLogin = (e: any) => {
    auth.login()
    e.preventDefault();
  }
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={4} md={6} sm={12}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Direccion Email" />
              </Form.Group>
              <Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form.Group>
              <Button variant="primary btn-block" type="submit" onClick={handleLogin}>
                Login
              </Button>
            </Form>
          </Col>
          <Col lg={8} md={6} sm={12}></Col>
        </Row>
      </Container>
    </>
  );
};
