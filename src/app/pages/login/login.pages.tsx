import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useAuth, _Storage } from "../../service";
import axios from "axios";
import {ENV} from "../../../env";
export const LoginPages = () => {
  const auth: any = useAuth();
  let loginString: any = {};
  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log(loginString);
    axios
      .post(`${ENV.URL}/login`, loginString)
      .then(({ data }: any) => {
        console.log(data);
        if (data.ok) {
          auth.login(data.data);
          _Storage.add("token", data.token);
        } else {
          auth.logout();
        }
      })
      .catch((err) => console.error(err));
  };
  const handleInputChange = ({ target }: any) => {
    const value: any =
      target.type === "checkbox" ? target.checkbox : target.value;
    const name: any = target.name;
    loginString[name] = value;
  };
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={4} md={6} sm={12}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  value={loginString.email}
                  onChange={handleInputChange}
                  placeholder="Direccion Email"
                />
              </Form.Group>
              <Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    name="password"
                    value={loginString.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                  />
                </Form.Group>
              </Form.Group>
              <Button
                variant="primary btn-block"
                type="submit"
                onClick={handleLogin}
              >
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
