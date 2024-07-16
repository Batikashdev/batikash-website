import "./about.scss";
import image1 from "../../assets/Group 5984.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Frame1 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); 
  }, []);
  return (
    <section>
      <div className="frame1-content">
        <div className="left-content" data-aos="fade-up">
          <h1>
            Learn More About Our <br /> <span>Mission.</span>
          </h1>
          <p>
            It is a tech-commerce platform that allows you to get a very <br />{" "}
            large variety of products and services from all your favorite <br />
            vendors and companies locally and globally .{" "}
          </p>
        </div>
        <div className="right-content" data-aos="fade-right">
          <img src={image1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Frame1;
