import style from "./HeaderLogIn.module.css";
import { NavLink } from "react-router-dom";

const HeaderLogIn = () => {
  return (
    <div className={style.temporaryStyleHeaderLogIn}>
      <NavLink to="/LogIn">log in</NavLink>
    </div>
  );
};

export default HeaderLogIn;
