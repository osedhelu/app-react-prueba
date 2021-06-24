import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {useState} from 'react'
import {useAuth} from "../../service/auth/useAuth";
export const LoginPages = () => {
  const [useUser, setUser]: any = useState({})
//  const handleChange = handleInputChange.bind() 
  const auth: any = useAuth()
  const handleLogin = (e: any) => {
    auth.login()
    e.preventDefault();
  }
  const handleInputChange = ({target}: any) => {
    const value: any = target.type === 'checkbox' ? target.checkbox : target.value;
    const name: any = target.name; 
    console.log({[name]: value})
    setUser({[name]: value})
  } 
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={4} md={6} sm={12}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" name='email' value={useUser.email} onChange={handleInputChange} placeholder="Direccion Email" />
              </Form.Group>
              <Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" name='password' value={useUser.password} onChange={handleInputChange} placeholder="Password" />
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
