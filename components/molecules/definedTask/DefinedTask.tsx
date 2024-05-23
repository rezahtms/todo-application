"use client";
import { IconButton, Typography } from "@mui/material";
import { FC, useContext, useRef } from "react";
import { TaskType } from "../../../types/stateTypes";
import { TaskContext } from "../../../contexts/TaskContext";
import DeleteIcon from "@mui/icons-material/Delete";
const DefinedTask: FC<TaskType> = (props) => {
  const { title, assigned, defined, status, id } = props;
  const { deleteTask } = useContext(TaskContext);
  return (
    <li
      draggable
      style={{
        backgroundColor: "#E15656",
        border: "2px solid  rgba(65, 65, 65, 0.493)",
        padding: "4px",
        margin: "8px 0",
        borderRadius: 0.6,
        color: "#fff",
      }}
    >
      <IconButton onClick={() => deleteTask(id, title)}>
        <DeleteIcon fontSize="small" />
      </IconButton>
      <Typography paragraph>Title : {title}</Typography>
      <Typography paragraph>assigned to : {assigned}</Typography>
      <Typography paragraph>defined : {defined}</Typography>
    </li>
  );
};

export default DefinedTask;
// {
//   status === "todo"
//     ? "#E15656"
//     : status === "doing"
//     ? "#6FA3EB"
//     : "#57A773"
// }
