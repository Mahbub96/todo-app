import React from "react";
import { Accordion, ButtonGroup, Button } from "react-bootstrap";

function Todo({ todos, handleDelete, handleDone, handleEdit }) {
  return (
    <Accordion className="my-4">
      {todos.map((todo, index) => (
        <Accordion.Item className="my-4" key={index} eventKey={index}>
          <Accordion.Header>{todo.todo}</Accordion.Header>

          {/* for actions buttons  */}
          <ButtonGroup aria-label="Basic example">
            <Button variant="success" onClick={() => handleDone(todo.id)}>
              Done
            </Button>
            <Button variant="info" onClick={() => handleEdit(todo.id)}>
              Edit
            </Button>
            <Button variant="danger" onClick={() => handleDelete(todo.id)}>
              Delete
            </Button>
          </ButtonGroup>

          <Accordion.Body>
            <p>{todo.time} </p>
            <p>{todo.date}</p>
            <br />
            <br />
            {todo.todoDisc}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default Todo;
