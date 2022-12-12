import style from "./Home.module.css";
import CreateMyPost from "./MyPosts/AddMyPost";

const Home = () => {
  return (
    <div className={style.temporaryStyleHome}>
      <CreateMyPost />
    </div>
  );
};

export default Home;
