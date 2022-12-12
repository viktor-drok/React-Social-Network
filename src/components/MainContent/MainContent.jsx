import style from "./MainContent.module.css";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Community from "../../Pages/Community/Community";
import Pages from "../../Pages/Pages/Pages";

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="community" element={<Community />} />
      <Route path="pages" element={<Pages />} />
    </Routes>
  );
};

export default MainContent;

// <div className={style.temporaryStyleMainContent}>
//   <h1>Hello</h1>
// </div>
