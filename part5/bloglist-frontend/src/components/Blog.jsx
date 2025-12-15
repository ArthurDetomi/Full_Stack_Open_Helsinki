import { useState, useImperativeHandle } from "react";

const Blog = ({ blog, likeBlog, deleteBlog }) => {
  const [visible, setVisible] = useState(false);

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <BlogContainer
      blog={blog}
      blogStyle={blogStyle}
      handleClick={handleClick}
      likeBlog={likeBlog}
      deleteBlog={deleteBlog}
      visible={visible}
    />
  );
};

export const BlogContainer = ({
  blog,
  blogStyle,
  handleClick,
  likeBlog,
  deleteBlog,
  visible,
}) => {
  return (
    <div style={blogStyle} className="blog-item">
      {blog.title} {blog.author}{" "}
      <button onClick={handleClick}>{visible ? "hide" : "view"}</button>
      {visible && (
        <div className="blog-desc">
          <p>{blog.url}</p>
          <p>
            likes {blog.likes ?? 0}{" "}
            <button onClick={() => likeBlog(blog.id)}>like</button>
          </p>
          <p>{blog.user.name}</p>
          <button onClick={() => deleteBlog(blog.id)}>delete</button>
        </div>
      )}
    </div>
  );
};

export default Blog;
