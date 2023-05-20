import { Box, Button, Typography } from "@mui/material";
import { darkTheme } from "../App";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import NewToDo from "./NewToDo";
import AddToDo from "./AddToDo";

export type ToDo = {
  _id: number;
  what: string;
  complete: boolean;
};

function ToDoList() {
  const [todos, setToDos] = useState<ToDo[]>([]); // Lista de todos os ToDos
  // Variavel para mostrar ou não a div de criação
  const [activated, setActivated] = useState<boolean>(false);
  return (
    <Box
      className="ToDoList"
      bgcolor={darkTheme.palette.divider}
      padding={5}
      maxWidth={800}
      width="90%"
    >
      <Typography
        variant="h4"
        style={{ margin: 20 }}
        align="center"
        color={darkTheme.palette.primary.dark}
      >
        To Do List
      </Typography>
      <hr />
      <Button
        variant="contained"
        style={{ width: "100%", padding: 20, marginBottom: 20 }}
        onClick={() => setActivated(true)}
      >
        <AddIcon />
      </Button>
      {activated ? (
        <AddToDo
          todos={todos}
          setActivated={setActivated}
          setToDos={setToDos}
        />
      ) : null}
      {todos.map((todo: ToDo, index: number) => (
        <NewToDo todo={todo} setToDos={setToDos} all={todos} key={index} />
      ))}
    </Box>
  );
}

export default ToDoList;
