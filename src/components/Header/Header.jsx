import style from "./Header.module.css";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderLogIn from "./HeaderLogIn/HeaderLogIn";

const Header = () => {
  return (
    <header className={style.temporaryStyleHeader}>
      <HeaderLogo />
      <HeaderNav />
      <HeaderSearch />
      <HeaderLogIn />
    </header>
  );
};

export default Header;
