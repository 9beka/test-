import React from "react";
import { Route, Routes } from "react-router-dom";
import Wrapper from "./Layout/Wrapper/Wrapper";
import Main from "./Pages/Main/Main";

const Views = () => {
  return (
    <Routes>
      <Route path="/test-/" element={<Wrapper />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
};

export default Views;
