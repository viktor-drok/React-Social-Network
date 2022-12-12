import style from "./AddMyPost.module.css";

const AddMyPost = (e) => {
  e.preventDefault();
  console.log("hi");
};

const CreateMyPost = () => {
  return (
    <div className={style.temporaryStyleAddMyPost}>
      <form onSubmit={AddMyPost}>
        <label>
          <input type="text" />
        </label>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default CreateMyPost;
