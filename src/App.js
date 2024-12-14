import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import FormSection from "./components/FormSection";

const App = () => {
  return (
    <div className="app flex">
      <Sidebar />
      <div className="main-content flex flex-col w-full">
        <Header />
        <FormSection />
      </div>
    </div>
  );
};

export default App;
