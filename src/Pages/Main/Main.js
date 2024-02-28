import React from "react";
import "./Main.scss";
import Options from "../../Components/Filters/Options/Options";
import FilterForm from "../../Components/Filters/FilterForm/FilterForm";
const Main = () => {
  return (
    <>
      <div className="main__wrapper">
        <div className="main__wrapper__fon"></div>
        <Options />
        <FilterForm />
      </div>
    </>
  );
};

export default Main;
