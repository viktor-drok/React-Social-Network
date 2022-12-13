// import style from "./PostTest.module.css";

const Post = ({ post }) => {
  // console.log(post.users);
  return post.users.map((user) => {
    return (
      <li key={user.id}>
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <p>{user.age}</p>
        <p>{user.gender}</p>
      </li>
    );
  });
};

export default Post;
