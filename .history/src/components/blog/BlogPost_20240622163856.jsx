import blogimage from "../../assets/Rectangle 135.png";
import "./blog.scss"

const BlogPost = ( author, date, platform, title, body) => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={blogimage} alt="" />
        <div className="card-info">
          <div>
            <p>{author}</p>
            <span>{date}</span>
          </div>
          <div>
            <p>{platform}</p>
          </div>
        </div>
      </div>

      <h3>{title}</h3>

      <p>
        {body}
      </p>
    </div>
  );
};

export default BlogPost;
