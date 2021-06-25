import { createRef } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { taskService } from "../../service";
const model = new taskService();
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
  };
  const save = () => {
    if (info.action === "new") {
      const aa = model.save(state);
      aa.then((resp) => {
        console.log(resp);
      }).catch((err) => {
        console.error(err);
      });
    } else {
      state._id = info._id;
      model
        .edit(state)
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          console.error(err);
        });
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
