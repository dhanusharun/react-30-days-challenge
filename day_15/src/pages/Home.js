import React, { useReducer } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

const todo = [
  {
    id: 1,
    task: "Say good morning",
    status: "NOTSTARTED",
  },
  {
    id: 2,
    task: "Say good afternoon",
    status: "NOTSTARTED",
  },
  {
    id: 3,
    task: "Say good night",
    status: "NOTSTARTED",
  },
];

const reducerMethod = (todos, action) => {
  switch (action.type) {
    case "add":
      return [...todos, action.newTodo];
    case "edit":
      return [...todos];
    case "delete":
      return todos.filter(obj => obj.id !== action.id);
    default:
      return;
  }
};

const Home = () => {
  const [todos, dispatch] = useReducer(reducerMethod, todo);

  const handleAdd = () => {
    var todo = {
      id: 4,
      task: "newTask",
      status: "NOTSTARTED",
    };
    dispatch({
      type: "add",
      newTodo: todo,
    });
  };

  const handleUpdate = (id) => {
    dispatch({
      type: "edit",
      updatedTodo:  todos.map((obj) => {
        if (obj.id === id) {
          obj.status = "COMPLETED";
        }
        return obj;
      })
    });
  };

  const handledelete = (id) => {
    dispatch({
      type: "delete",
      id:  id
    });
  };
  
  return (
    <>
      <div>
        <Container className="d-flex justify-content-center align-items-center">
          <Row className="justify-content-md-center ">
            <Col md="4"></Col>
            <Col md="4">To do App using reducer</Col>
            <Col md="4">
              <Button className="p-1" onClick={handleAdd}>
                Add new
              </Button>
            </Col>
            <Col md="12">{"\n"}</Col>
            <Col md="12">{"\n"}</Col>
            {todos.map((obj) => (
              <>
                <Col md="1" className="border">
                  {obj.id}
                </Col>
                <Col md="5" className="border">
                  {obj.task}
                </Col>
                <Col md="3" className="border">
                  {obj.status}
                </Col>
                <Col md="2" className="border">
                  <Button variant="secondary" onClick={() => { handleUpdate(obj.id) }}>
                    Completed
                  </Button>
                </Col>
                <Col md="1" className="border">
                  <Button variant="danger" onClick={() => {handledelete(obj.id)}}>Delete</Button>
                </Col>
              </>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
