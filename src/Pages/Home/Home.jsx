import style from "./Home.module.css";
import AddMyPost from "../../components/MyPosts/AddMyPost";

const Home = () => {
  return (
    <div className={style.temporaryStyleHome}>
      <AddMyPost />
    </div>
  );
};

export default Home;
