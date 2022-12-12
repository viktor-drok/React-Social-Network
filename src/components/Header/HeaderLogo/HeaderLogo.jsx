import style from "./HeaderLogo.module.css";
import { NavLink } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <div className={style.temporaryStyleHeaderLogo}>
      <NavLink to="/">MySocialNetwork</NavLink>
    </div>
  );
};

export default HeaderLogo;
