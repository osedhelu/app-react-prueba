import { useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { ModalTask } from "../../shared";
const data = [
  { _id: "01", task: "nasjdijf", name: "hsakdhfj" },
  { _id: "02", task: "nasjdijf", name: "hsakdhfj" },
  { _id: "03", task: "nasjdijf", name: "hsakdhfj" },
];
export const TaskOnePages = () => {
  const state = {
    data,
  };
  const [modalShow, setModalShow] = useState(false);
  const [InfoShow, setInfoShow] = useState({});
  const editTask = (data: any) => {
    data.title = "Edit Task";
    data.action = "edit";
    setInfoShow(data);
    setModalShow(true);
  };
  const newTask = () => {
    setModalShow(true);
    setInfoShow({ title: "New Task", action: "new" });
  };
  const save = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <Button variant="success" onClick={() => newTask()}>
              Nueva
            </Button>
          </Col>
          <Col lg={12}>
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>actividad</th>
                  <th>Descripcion</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                {state.data.map((resp: any) => (
                  <tr key={resp._id}>
                    <td>{resp._id}</td>
                    <td>{resp.name}</td>
                    <td>{resp.task}</td>
                    <td>
                      <Button onClick={() => editTask(resp)} variant="primary">
                        Edit
                      </Button>
                      {"   "}
                      <Button variant="danger">Remove</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <ModalTask
        show={modalShow}
        info={InfoShow}
        save={(data: any) => save(data)}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};
