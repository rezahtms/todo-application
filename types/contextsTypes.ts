import { Dispatch, SetStateAction } from "react";
import { CompanyItem } from "./componentTypes";
import { TaskEditType, TaskType } from "./stateTypes";

export interface TodoContextType {
  handleAddNewCompany: (newItem: CompanyItem) => void;
  setCompanyItems: Dispatch<SetStateAction<CompanyItem[]>>,
  companiesItem: CompanyItem[];
  deleteCompany: (id: number) => void;
  dataName: string;
  handleEditFeedback: (item: CompanyItem) => void;
  setDataName: (value: string) => void;
  updateNewCompanyName: () => void;
  isEdit: boolean;
}
export interface TaskContextType {
  handleAddColumn: () => void;
  columns: string[];
  handleOpenModal: () => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  isOpen: boolean,
  handleDeleteColumn: (id: number) => void;
  handleEditColumn: (item: TaskEditType) => void,
  editColumn: { edit: boolean, item: TaskEditType },
  setEditColumn: Dispatch<SetStateAction<{ edit: boolean; item: TaskEditType; }>>;
  updateColumn: (id: number) => void,
  setTask: Dispatch<SetStateAction<TaskType>>,
  setTaskStatus: Dispatch<SetStateAction<string>>,
  taskStatus: string;
  updateTaskColumn: (task: TaskType) => void;
  updateDragAndDrop: (id: number, newStatus: string) => void,
  deleteTask: (id: number, title: string) => void

}


