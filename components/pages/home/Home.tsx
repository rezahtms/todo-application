"use client";
import React, { useContext } from "react";
import CompaniesList from "../../organisms/companiesList/CompaniesList";
import { CompanyItem } from "../../../types/componentTypes";
import { TodoContext } from "../../../contexts/TodoProvider";
import AddData from "../../organisms/addData/AddData";

const Home = () => {
  const {
    dataName: companyName,
    handleAddNewCompany,
    setDataName: setCompanyName,
    updateNewCompanyName,
  } = useContext(TodoContext);
  const addNewCompany = () => {
    const newCompanyItem: CompanyItem = {
      companyId: Date.now(),
      companyName: companyName,
      columns: [],
      tasks: [],
    };
    handleAddNewCompany(newCompanyItem);
    setCompanyName("");
  };
  return (
    <>
      <AddData
        inputPlaceholder="please Inter Your company Name"
        buttonContent="Add New Company"
        handleFormSubmit={addNewCompany}
        updateFormSubmit={() => updateNewCompanyName()}
      />
      <CompaniesList />
    </>
  );
};

export default Home;
