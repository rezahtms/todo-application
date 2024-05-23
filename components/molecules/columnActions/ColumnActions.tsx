import { Stack, Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { FC, useContext } from "react";
import { TaskContext } from "../../../contexts/TaskContext";
import { ColumnActionsProps } from "../../../types/componentTypes";
import { TodoContext } from "../../../contexts/TodoProvider";
const ColumnActions: FC<ColumnActionsProps> = ({ title, columnId }) => {
  const {
    handleOpenModal,
    handleDeleteColumn,
    handleEditColumn,
    setTaskStatus,
    updateColumn,
  } = useContext(TaskContext);
  const { setDataName } = useContext(TodoContext);
  return (
    <Stack direction="row" spacing={1}>
      <Button
        onClick={() => {
          handleOpenModal();
          setTaskStatus(title);
        }}
        variant="contained"
        size="small"
        sx={{ width: "100%" }}
        startIcon={<AddIcon fontSize="small" />}
      >
        {title}
      </Button>
      <IconButton
        size="small"
        color="primary"
        onClick={() => {
          handleEditColumn({
            columnId: columnId,
            title: title,
          });

          setDataName(title);
        }}
      >
        <EditIcon />
      </IconButton>
      <IconButton
        size="small"
        color="error"
        onClick={() => {
          handleDeleteColumn(columnId);
        }}
      >
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};

export default ColumnActions;
