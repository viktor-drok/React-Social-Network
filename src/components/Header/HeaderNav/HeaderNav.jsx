import style from "./HeaderNav.module.css";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <>
      <ul className={style.temporaryStyleHeaderNav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/community">Community</Link>
        </li>
        <li>
          <Link to="/pages">Pages</Link>
        </li>
      </ul>
    </>
  );
};

export default HeaderNav;
