import { Box, Button, Checkbox, Typography } from "@mui/material";
import { darkTheme } from "../App";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToDo } from "./ToDoList";
import { Dispatch, SetStateAction, useRef } from "react";

type props = {
  todo: ToDo;
  all: ToDo[];
  setToDos: Dispatch<SetStateAction<ToDo[]>>;
};

function NewToDo({ todo, all, setToDos }: props) {
  const text = useRef<HTMLDivElement>(null); // Referencia do texto para cortar
  return (
    <Box
      width="100%"
      minHeight={50}
      marginBottom={2}
      bgcolor={darkTheme.palette.secondary.dark}
      display="flex"
      justifyContent="center"
      padding={3}
    >
      <Checkbox
        defaultChecked={todo.complete}
        style={{ color: "black", width: "10%" }}
        onChange={() => {
          if (text.current!.style.textDecoration === "line-through") {
            text.current!.style.textDecoration = "none";
          } else {
            text.current!.style.textDecoration = "line-through";
          }
        }}
      />
      <div
        style={{
          width: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        ref={text}
      >
        <Typography
          color="black"
          whiteSpace="normal"
          style={{ wordBreak: "break-word" }}
        >
          {todo.what}
        </Typography>
      </div>
      <Button
        variant="text"
        style={{ width: "10%" }}
        onClick={() => setToDos(all.filter((a) => a._id !== todo._id))}
      >
        <DeleteIcon />
      </Button>
    </Box>
  );
}

export default NewToDo;
