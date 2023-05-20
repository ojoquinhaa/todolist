import { Box, Button, TextField } from "@mui/material";
import { darkTheme } from "../App";
import { Dispatch, SetStateAction, useState } from "react";
import { ToDo } from "./ToDoList";
type props = {
  todos: ToDo[];
  setToDos: Dispatch<SetStateAction<ToDo[]>>;
  setActivated: Dispatch<SetStateAction<boolean>>;
};
function AddToDo({ todos, setToDos, setActivated }: props) {
  const [what, setWhat] = useState<string>("");
  return (
    <Box
      width="100%"
      minHeight={50}
      marginBottom={2}
      bgcolor={darkTheme.palette.background.paper}
      display="flex"
      justifyContent="center"
      padding={3}
    >
      <TextField
        variant="outlined"
        label="Novo"
        style={{ width: "80%" }}
        value={what}
        onChange={(e) => setWhat(e.target.value)}
      />
      <Button
        variant="outlined"
        onClick={() => {
          setToDos([
            ...todos,
            { _id: todos.length, what: what, complete: false },
          ]);
          setActivated(false);
        }}
      >
        Confirmar
      </Button>
    </Box>
  );
}
export default AddToDo;
