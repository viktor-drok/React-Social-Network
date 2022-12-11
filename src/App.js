import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import MainContent from "./components/MainContent/MainContent";

const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <LeftSidebar />
      <MainContent />
    </div>
  );
};

export default App;
