import testimonial from "../../assets/testi.png";
import image1 from "../../assets/Group 5982.png";
import playstore from "../../assets/svg.png";
import apple from "../../assets/apple.png";

import "./home.scss"

const Frame1 = () => {
  return (
    <section>
      <header>
        <h2>Best Tech-Commerce Platform In Africa</h2>
        <hr></hr>
      </header>

      <div className="frame-content">
        <div className="left-content">
          <h1>The Worlds First  <br/> Vital <span style={{color:"#FC8B00"}}>Megamall.</span></h1>
          <p>
            It is a tech-commerce platform that allows you to get a very <br/> large
            variety of products and services from all your favorite <br/> vendors and
            companies locally and globally .{" "}
          </p>
          <div className="download-btns">
            <div className="download-app"><img src={playstore} alt=""/> Download on Google Play</div>
            <div className="download-app"><img src={apple} alt=""/> Download on App Play</div>
          </div>
          <div className="numbers">
            <div>
              <p className="num">2.5 <span style={{color:"#004BFF"}}>+</span></p>
              <p>Years Experience</p>
            </div>
            <div>
              <p className="num">800<span style={{color:"#004BFF"}}>+</span></p>
              <p>Happy Client</p>
            </div>
            <div>
              <p className="num">50<span style={{color:"#004BFF"}}>+</span></p>
              <p>Organization</p>
            </div>
            <div className="testimonial">
                <p>Testimonial</p>
              <img src={testimonial} alt="" />
            </div>
          </div>
        </div>
        <div className="right-content">
            <img src={image1} alt=""/>
        </div>
      </div>
    </section>
  );
};

export default Frame1;
