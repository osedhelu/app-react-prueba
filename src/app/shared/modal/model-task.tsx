import axios from "axios";
import { createRef } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export const ModalTask = (props: any) => {
  const relf = createRef();
  let { info } = props;
  let state: any = {
    name: info.name,
    task: info.task,
  };
  const handleChange = ({ target }: any) => {
    const value: any = target.value;
    const name: any = target.name;
    state[name] = value;
    console.log(state);
  };
  const save = () => {
    console.log(process.env)
    if (info.action === "new") {
      axios
        .post("http://192.168.10.21:8080/task", state)
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("edit");
    }
  };
  
  return (
    <Modal
      {...props}
      size="lg"
      ref={relf}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {info.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <Form.Control
            size="lg"
            name="name"
            onChange={handleChange}
            value={state.name}
            type="text"
            placeholder="actividad"
          />
          <br />
          <Form.Control
            size="lg"
            value={state.task}
            name="task"
            onChange={handleChange}
            type="text"
            placeholder="Descripcion"
          />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => save()}>Create</Button>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
