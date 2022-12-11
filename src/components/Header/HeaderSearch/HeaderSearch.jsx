import style from "./HeaderSearch.module.css";

const HeaderSearch = () => {
  return (
    <form className={style.temporaryStyleHeaderSearch}>
      <label>
        <input type="text" placeholder="Search..." />
      </label>
    </form>
  );
};

export default HeaderSearch;
