"use client";
import { styled } from "@mui/material";
import { FC } from "react";
import { AddCompanyInputProps } from "../../../types/componentTypes";

const CustomInput = styled("input")({
  border: "none",
  borderBottom: "2px solid white",
  outline: "none",
  padding: "0 4px",
  width: "30%",
  backgroundColor: "transparent",
  fontSize: "14px",
  color: "#fff",
});
const AddInputData: FC<AddCompanyInputProps> = ({
  name,
  onChange,
  value,
  placeholder,
}) => {
  return (
    <CustomInput
      autoFocus
      placeholder={placeholder}
      name={name}
      onChange={(event) => onChange(event.target.value)}
      value={value}
    />
  );
};

export default AddInputData;
