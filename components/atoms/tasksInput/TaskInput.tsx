"use client";
import styled from "@emotion/styled";
import { FormLabel } from "@mui/material";
import { FC } from "react";
import { TaskInput } from "../../../types/componentTypes";

const CustomInput = styled.input`
  width: 400px;
  padding: 0.3125rem;
  font-size: 1rem;
  border: none;
  color: "#fff";
`;

const TaskInput: FC<TaskInput> = (props) => {
  const { id, name, placeholder, autofocus } = props;
  return (
    <>
      <FormLabel htmlFor={id}>{placeholder}</FormLabel>
      <CustomInput
        id={id}
        name={name}
        placeholder={placeholder}
        autoFocus={autofocus}
      />
    </>
  );
};

export default TaskInput;
