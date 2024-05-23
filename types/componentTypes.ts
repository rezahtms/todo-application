import { ReactElement, ReactNode } from "react";
import { TaskType } from "./stateTypes";

// All Component Props Types
export interface CompanyItemProps {
  companyId: number;
  companyName: string;
  number: number;

}

export interface CompanyItem {
  companyId: number;
  companyName: string;
  tasks: TaskType[];
  columns: string[];

}


export interface AddCompanyInputProps {
  name: string;
  onChange: (event: string) => void;
  value: string,
  placeholder: string
}

export interface TodoProviderProps {
  children: ReactElement | ReactNode
}

export interface AddCompanyProps {
  inputPlaceholder: string;
  buttonContent: string;
  handleFormSubmit: () => void,
  updateFormSubmit: () => void

}

export interface TaskInput {
  name?: string,
  placeholder?: string,
  autofocus?: true,
  id?: string
};

export interface ColumnActionsProps {
  columnId: number
  title: string;
}

