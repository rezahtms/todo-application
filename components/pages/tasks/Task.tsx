"use client";
import { FC, useContext } from "react";
import { TaskContext } from "../../../contexts/TaskContext";
import AddData from "../../organisms/addData/AddData";
import TasksList from "../../organisms/tasksList/TasksList";
import Modal from "../../organisms/modal/Modal";

interface TaskProps {
  queryId: string;
}
const Task: FC<TaskProps> = ({ queryId }) => {
  const { handleAddColumn, updateColumn } = useContext(TaskContext);
  return (
    <>
      <AddData
        inputPlaceholder="Please Enter Your Column Title"
        buttonContent="Add Column"
        handleFormSubmit={handleAddColumn}
        updateFormSubmit={() => updateColumn()}
      />
      <TasksList queryId={queryId} />
      <Modal />
    </>
  );
};

export default Task;
