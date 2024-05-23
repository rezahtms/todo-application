"use client";
import { Box, Container, List, Typography } from "@mui/material";
import CompanyItem from "../companyItem/CompanyItem";
import { useContext } from "react";
import { TodoContext } from "../../../contexts/TodoProvider";

const CompaniesList = () => {
  const { companiesItem } = useContext(TodoContext);

  return (
    <Container
      maxWidth="xl"
      sx={{ backgroundColor: "#9c27b0", padding: "8px 0" }}
    >
      <Typography variant="h2" fontSize={18} color="#fff">
        Companies List
      </Typography>
      <Box>
        <List sx={{ display: "flex", flexDirection: "column", gap: 0.4 }}>
          {companiesItem.map((company: any, index: any) => (
            <CompanyItem
              key={company.companyId}
              number={index + 1}
              companyId={company.companyId}
              companyName={company.companyName}
            />
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default CompaniesList;
