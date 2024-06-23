import { Link } from "react-router-dom";
import BlogPost from "../components/blog/BlogPost";
import Frame1 from "../components/blog/Frame1";
import "../components/blog/blog.scss";
import blogpost from "../components/blog/dummydate";

const Blog = () => {
  return (
    <div>
      <Frame1 />
      {blogpost.map((data, index) => (
        <div className="blog-section" key={index}>
          <Link className="link" to="/post:id/">
          <BlogPost
            author={data.author}
            date={data.date}
            title={data.title}
            body={data.body}
            platform={data.platform}
          /></Link>
          
        </div>
      ))}
    </div>
  );
};

export default Blog;
