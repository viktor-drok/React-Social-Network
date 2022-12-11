import style from "./HeaderNav.module.css";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <div className={style.temporaryStyleHeaderNav}>
      <NavLink to="/src/Pages/HomePage">Home</NavLink>
      <NavLink to="/src/Pages/CommunityPage">Community</NavLink>
      <NavLink to="/src/Pages/PagesPage">Pages</NavLink>
    </div>
  );
};

export default HeaderNav;
