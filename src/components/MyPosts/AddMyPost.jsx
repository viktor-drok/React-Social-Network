import style from "./AddMyPost.module.css";
import Post from "./Post/Post";
import { useState } from "react";

const AddMyPost = () => {
  const [post, setPost] = useState({
    users: [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        age: 42,
        gender: "male",
      },
      {
        id: 2,
        firstName: "viktor",
        lastName: "drok",
        age: 33,
        gender: "male",
      },
    ],
  });

  function submitForm(e) {
    e.preventDefault();
    let postsLength = post.users.length;
    setPost({
      ...post.users.push({
        firstName: 222,
        id: postsLength + 1,
      }),
      ...post,
      firstName: e.target.value,
    });
    console.log("posts", post.users);
  }

  return (
    <div className={style.temporaryStyleAddMyPost}>
      <form onSubmit={submitForm}>
        <label>
          <input
            placeholder="Your first and lastname"
            type="text"
            onChange={(e) => submitForm}
          />
        </label>
      </form>
      <ul>
        <Post post={post} />
      </ul>
    </div>
  );
};

export default AddMyPost;
