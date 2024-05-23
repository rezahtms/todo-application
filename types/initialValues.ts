import { CompanyItem, } from "./componentTypes";
import { TaskContextType, TodoContextType } from "./contextsTypes";
import { TaskEditType, TaskType } from "./stateTypes";

export const initialCompany: CompanyItem = {
  companyId: 0,
  companyName: '',
  tasks: [],
  columns: []

};

export const initialTodoContext: TodoContextType = {
  handleAddNewCompany: (initialCompany: CompanyItem) => { },
  setCompanyItems: () => { },
  companiesItem: [initialCompany],
  deleteCompany: (id: number) => { },
  handleEditFeedback: (item: CompanyItem) => { },
  setDataName: (value: string) => { },
  dataName: '',
  updateNewCompanyName: () => { },
  isEdit: false,

}

export const initialEditTask: TaskEditType = {
  columnId: 0,
  title: ''
}

// Initial TaskContext
export const initialTaskContext: TaskContextType = {
  handleAddColumn: () => { },
  columns: [''],
  handleOpenModal: () => { },
  setIsOpen: () => { },
  isOpen: false,
  handleDeleteColumn: (id: number) => { },
  handleEditColumn: (item: TaskEditType) => { },
  setEditColumn: () => { },
  editColumn: {
    edit: false,
    item: initialEditTask
  },
  updateColumn: (id: number) => { },
  setTask: () => { },
  setTaskStatus: () => { },
  taskStatus: '',
  updateTaskColumn: (task: TaskType) => { },
  updateDragAndDrop: (id: number, newStatus: string) => { },
  deleteTask: (id: number, title: string) => { }

};

export const initialTask: TaskType = {
  id: 0,
  title: '',
  status: '',
  assigned: '',
  defined: ''
}