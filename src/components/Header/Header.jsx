import style from "./Header.module.css";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderLogIn from "./HeaderLogIn/HeaderLogIn";

const Header = () => {
  return (
    <div className={style.temporaryStyleHeader}>
      <HeaderLogo />
      <HeaderNav />
      <HeaderSearch />
      <HeaderLogIn />
    </div>
  );
};

export default Header;
