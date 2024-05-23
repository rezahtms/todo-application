"use client";
import { FC, createContext, useEffect, useState } from "react";
import { CompanyItem, TodoProviderProps } from "../types/componentTypes";
import { initialCompany, initialTodoContext } from "../types/initialValues";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { TodoContextType } from "../types/contextsTypes";
// Create Todo Context
export const TodoContext = createContext<TodoContextType>(initialTodoContext);

const TodoProvider: FC<TodoProviderProps> = ({ children }) => {
  // Use LocalStorage For Set And Get Items
  const { getItems, setItems } = useLocalStorage("companies");
  // CompanyName state
  const [dataName, setDataName] = useState<string>("");
  // Companies Lists
  const [companies, setCompanies] = useState<CompanyItem[]>(getItems());

  const [feedbackEdit, setFeedbackEdit] = useState<{
    item: CompanyItem;
    edit: boolean;
  }>({ item: initialCompany, edit: false });

  // Get All Items
  useEffect(() => {
    const getCompaniesList = getItems();
    setCompanies(getCompaniesList);
  }, []);

  // Set New Company Items
  const addNewCompany = (newItem: CompanyItem) => {
    setCompanies((current) => [...current, newItem]);
  };

  // Handle Edit Feedback
  const handleEditFeedback = (item: CompanyItem) => {
    setFeedbackEdit({ item: item, edit: true });
    setDataName(item.companyName);
  };

  // Update the selected company name
  const updateNewCompanyName = () => {
    setCompanies((current) =>
      current.map((companyItem) =>
        companyItem.companyId === feedbackEdit.item.companyId
          ? { ...companyItem, companyName: dataName }
          : companyItem
      )
    );
    setFeedbackEdit({ ...feedbackEdit, edit: false });
    setDataName("");
  };

  // Delete Company By
  const handleDeleteCompany = (id: number) => {
    const isConfirm = window.confirm("Are You Sure delete Item?");
    if (isConfirm)
      setCompanies((cur) => cur.filter((item) => item.companyId !== id));
  };

  // Set   Companies To LocalStorage
  useEffect(() => {
    setItems(companies);
  }, [companies]);

  return (
    <TodoContext.Provider
      value={{
        handleAddNewCompany: addNewCompany,
        companiesItem: companies,
        deleteCompany: handleDeleteCompany,
        handleEditFeedback,
        setDataName: setDataName,
        dataName: dataName,
        updateNewCompanyName,
        isEdit: feedbackEdit.edit,
        setCompanyItems: setCompanies,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
