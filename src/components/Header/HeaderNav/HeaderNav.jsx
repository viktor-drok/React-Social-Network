import style from "./HeaderNav.module.css";
import { Link, Outlet } from "react-router-dom";

const HeaderNav = () => {
  return (
    <>
      <ul className={style.temporaryStyleHeaderNav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Community">Community</Link>
        </li>
        <li>
          <Link to="/Pages">Pages</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default HeaderNav;
