import "./about.scss";
import image1 from "../../assets/Group 5984.png";

const Frame1 = () => {
  return (
    <section>
      <div className="frame1-content">
        <div className="left-content">
          <h1>
            Learn More About Our <br /> <span>Mission.</span>
          </h1>
          <p>
            It is a tech-commerce platform that allows you to get a very <br />{" "}
            large variety of products and services from all your favorite <br />
            vendors and companies locally and globally .{" "}
          </p>
        </div>
        <div className="right-content">
          <img src={image1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Frame1;
