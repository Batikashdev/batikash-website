import image1 from "../../assets/blog.png"
import "./blog.scss"
const Frame1 = () => {
  return (
    <div className="blog-frame1_wrapper">
      <div className="blog-frame_content">
      <div className="left">
          <h1>Batiskash Blog</h1>
          <p>Story's form us and are teams that help you learn more about us and the best ways to use BatiKash </p>
        </div>
        <div className="right">
          <img src={image1} alt=""/>
        </div>
      </div>
        
    </div>
  )
}

export default Frame1