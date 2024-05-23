"use client";
import {
  FC,
  ReactElement,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  initialEditTask,
  initialTask,
  initialTaskContext,
} from "../types/initialValues";
import { TodoContext } from "./TodoProvider";
import { TaskContextType } from "../types/contextsTypes";
import { TaskEditType, TaskType } from "../types/stateTypes";

interface TaskProviderProps {
  children: ReactElement | ReactNode;
}

// Create TaskContext
export const TaskContext = createContext<TaskContextType>(initialTaskContext);

const TaskProvider: FC<TaskProviderProps> = ({ children }) => {
  // Set And Get Data Form LocalStorage
  const { getItems, setItems } = useLocalStorage("column");

  // Defining useState For Column
  const [columns, setColumn] = useState<string[]>(getItems());
  const { dataName, setDataName } = useContext(TodoContext);
  // State For open and close Modal
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //State For Edit Column
  const [editColumn, setEditColumn] = useState<{
    edit: boolean;
    item: TaskEditType;
  }>({ edit: false, item: initialEditTask });

  const [task, setTask] = useState<TaskType>(initialTask);
  const [taskStatus, setTaskStatus] = useState<string>("");
  const { setCompanyItems } = useContext(TodoContext);

  useEffect(() => {
    const getColumns = getItems();
    setColumn(getColumns);
  }, []);

  const handleAddColumn = () => {
    setColumn((current) => [...current, dataName]);

    setCompanyItems((current) =>
      current.map((item) => ({
        ...item,
        columns: Array.from(new Set([...(item.columns || []), dataName])),
      }))
    );
    setDataName("");
  };

  // Editing Column Info In List Component
  const handleEditColumn = (item: TaskEditType) => {
    setEditColumn({ edit: true, item: item });
  };

  // Updating Select Column
  const updateColumn = (id: number) => {
    // const newColumn = [...columns];
    // const newColumn = setCompanyItems((current) =>
    //   current.map((item) => ({
    //     ...item,
    //     columns: columns.map((column) => column),
    //   }))
    // );
    // newColumn[editColumn.item.columnId - 1] = dataName;
    // setCompanyItems((current) =>
    //   current.map((item) => ({
    //     ...item,
    //     columns: item.columns.map((columnName, index) =>
    //       index + 1 === id ? newColumn : columnName
    //     ),
    //   }))
    // );
    setEditColumn({ ...editColumn, edit: false });
    setDataName("");
  };

  // Updating Task Column
  const updateTaskColumn = (task: TaskType) => {
    setCompanyItems((current) =>
      current.map((item) => ({
        ...item,
        tasks: [...item.tasks, task],
      }))
    );
  };

  // handle Delete Column
  const handleDeleteColumn = (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      setCompanyItems((current) =>
        current.map((item) => ({
          ...item,
          columns: item.columns.filter((column, index) => index + 1 !== id),
        }))
      );
      setEditColumn({ ...editColumn, edit: false });
      setDataName("");
    }
  };

  // setIsOpen for Open Modal
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  // Update Task Status In Drag And Drop
  const updateDragAndDrop = (id: number, newStatus: string) => {
    setCompanyItems((current) =>
      current.map((item) => ({
        ...item,
        tasks: item.tasks.map((task) =>
          task.id === id ? { ...task, status: newStatus } : task
        ),
      }))
    );
  };
  const deleteTask = (id: number, title: string) => {
    const isConfirm =
      confirm(`Are you sure you want to delete the item named ${title}?
    `);
    if (isConfirm)
      setCompanyItems((current) =>
        current.map((item) => ({
          ...item,
          tasks: item.tasks.filter((task) => task.id !== id),
        }))
      );
  };

  // updating
  useEffect(() => {
    setItems(columns);
  }, [columns]);

  return (
    <TaskContext.Provider
      value={{
        handleAddColumn: handleAddColumn,
        columns: columns,
        handleOpenModal: handleOpenModal,
        isOpen: isOpen,
        setIsOpen: setIsOpen,
        handleDeleteColumn: handleDeleteColumn,
        handleEditColumn: handleEditColumn,
        editColumn: editColumn,
        setEditColumn: setEditColumn,
        updateColumn: updateColumn,
        setTask: setTask,
        setTaskStatus: setTaskStatus,
        taskStatus: taskStatus,
        updateTaskColumn: updateTaskColumn,
        updateDragAndDrop: updateDragAndDrop,
        deleteTask: deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
