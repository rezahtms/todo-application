"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import { FC, useContext } from "react";
import { TaskContext } from "../../../contexts/TaskContext";
import { TodoContext } from "../../../contexts/TodoProvider";
import ColumnActions from "../../molecules/columnActions/ColumnActions";
import DefinedTask from "../../molecules/definedTask/DefinedTask";

const TasksList: FC<{ queryId: string }> = ({ queryId }) => {
  const { columns, updateDragAndDrop } = useContext(TaskContext);
  const { companiesItem } = useContext(TodoContext);
  const findCompanyById = companiesItem.find(
    (item) => item.companyId === Number(queryId)
  );
  const renderAbleColumn = findCompanyById?.columns?.map((title, index) => ({
    columnId: index + 1,
    title: title,
    companiesTask: findCompanyById?.tasks.filter(
      (item) => item.status === title
    ),
  }));

  return (
    <Container
      maxWidth="xl"
      sx={{ backgroundColor: "#9c27b0", padding: "8px 0" }}
    >
      <Typography variant="h2" fontSize={18} color="#fff">
        Tasks List
      </Typography>
      <div style={{ overflowX: "auto" }}>
        <Stack direction="row" spacing={1} padding="8px 0">
          {renderAbleColumn?.map((item) => (
            <Box
              key={item.columnId}
              sx={{
                minWidth: "31.75vw",
                padding: 0.5,
                border: "1px solid white",
              }}
              onDrop={(e) => {
                e.preventDefault();
                const taskId = e.dataTransfer.getData("text/plain");
                updateDragAndDrop(+taskId, item.title);
              }}
              onDragOver={(e) => e.preventDefault()}
            >
              <ColumnActions title={item.title} columnId={item.columnId} />
              <ul>
                {item.companiesTask?.map((data) => (
                  <li
                    key={data.id}
                    draggable
                    onDragStart={(e) =>
                      e.dataTransfer.setData("text/plain", String(data.id))
                    }
                    onDragEnd={() => {
                      updateDragAndDrop(data.id, item.title);
                      console.log("drag end");
                    }}
                  >
                    <DefinedTask {...data} />
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Stack>
      </div>
    </Container>
  );
};

export default TasksList;
