import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
export const TaskPages = () => {
  const {id}: any = useParams();
  console.log(id)
  return (
    <>
      <Container className="mt-5">
        <Row>
          kk {id}
          <Col lg={12} md={12} sm={12}></Col>
        </Row>
      </Container>
    </>
  );
};
