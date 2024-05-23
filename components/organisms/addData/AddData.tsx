"use client";
import { Button, Container, Stack } from "@mui/material";
import AddInputData from "../../atoms/addInputData/AddInputData";
import { FC, FormEvent, useContext } from "react";
import { AddCompanyProps } from "../../../types/componentTypes";
import { TodoContext } from "../../../contexts/TodoProvider";
import { TaskContext } from "../../../contexts/TaskContext";

const AddData: FC<AddCompanyProps> = ({
  inputPlaceholder,
  buttonContent,
  handleFormSubmit,
  updateFormSubmit,
}) => {
  const {
    isEdit,
    dataName: dataName,
    setDataName: setData,
  } = useContext(TodoContext);
  const { editColumn } = useContext(TaskContext);
  const isEditColumn = editColumn.edit;
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isEdit || isEditColumn) {
      updateFormSubmit();
    } else {
      handleFormSubmit();
    }
  };

  return (
    <Container
      maxWidth="xl"
      sx={{ background: "#9c27b0", color: "#fff", padding: "8px 0" }}
    >
      <Stack
        component="form"
        spacing={1}
        direction="row"
        onSubmit={handleSubmit}
      >
        <AddInputData
          name="data-name"
          onChange={(event) => setData(event)}
          value={dataName}
          placeholder={inputPlaceholder}
        />
        <Button type="submit" variant="contained">
          {isEdit || isEditColumn ? "Edit" : buttonContent}
        </Button>
      </Stack>
    </Container>
  );
};

export default AddData;
