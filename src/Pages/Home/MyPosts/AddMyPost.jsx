import { useState } from "react";
import style from "./AddMyPost.module.css";

const CreateMyPost = () => {
  const [post, setPost] = useState({
    firstName: "dfgfd",
    lastName: "dfhdfh",
    age: 0,
    gender: null,
  });

  const AddMyPost = (e) => {
    e.preventDefault();
    setPost({
      ...post,
      firstName: "555",
    });
  };

  console.log(post);

  const Post = () => {
    return (
      <div>
        <h2>
          {post.firstName} {post.lastName}
        </h2>
        <p>{post.age}</p>
        <p>{post.gender}</p>
      </div>
    );
  };

  return (
    <div className={style.temporaryStyleAddMyPost}>
      <form onSubmit={AddMyPost}>
        <label>
          <input type="text" />
        </label>
        <button type="submit">Add Post</button>
      </form>
      <Post />
    </div>
  );
};

export default CreateMyPost;
