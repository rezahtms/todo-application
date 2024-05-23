"use client";
import React, { FC, useContext } from "react";

import { Box, IconButton, ListItemText, Stack } from "@mui/material";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { CompanyItemProps } from "../../../types/componentTypes";
import { TodoContext } from "../../../contexts/TodoProvider";
const CompanyItem: FC<CompanyItemProps> = ({
  companyId,
  companyName,
  number,
}) => {
  const { deleteCompany, handleEditFeedback } = useContext(TodoContext);
  return (
    <Stack
      component="li"
      spacing={1}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      border="1px solid red"
      padding="0 10px"
      color="#fff"
    >
      <Box>
        <Link href={`/${companyId}`}>
          <ListItemText primary={`${number} - ${companyName}`} />
        </Link>
      </Box>
      <Box>
        <IconButton
          onClick={() =>
            handleEditFeedback({
              companyId: companyId,
              companyName: companyName,
              tasks: [],
            })
          }
        >
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => deleteCompany(companyId)}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Stack>
  );
};

export default CompanyItem;
