import React, { useEffect } from "react";
import testimonial from "../../assets/testi.png";
import image1 from "../../assets/Group 5982.png";
import playstore from "../../assets/svg.png";
import apple from "../../assets/apple.png";
import CountUp from "react-countup";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import "./home.scss";
import { Link } from "react-router-dom";

const Frame1 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); 
  }, []);

  return (
    <section>
      <header data-aos="fade-right">
        <h2>Best Tech-Commerce Platform In Africa</h2>
        <hr></hr>
      </header>

      <div className="frame-content">
        <div className="left-content">
          <h1 data-aos="fade-right">
            The World's First <br /> Vital{" "}
            <span style={{ color: "#FC8B00" }}>Megamall.</span>
          </h1>
          <p>
            It is a tech-commerce platform that allows you to get a very <br />{" "}
            large variety of products and services from all your favorite <br />{" "}
            vendors and companies locally and globally.
          </p>
          <div className="download-btns">
            <Link className="link" to="/notfound">
              <div className="download-app">
                <img src={playstore} alt="Google Play" /> Download on Google Play
              </div>
            </Link>
            <Link className="link" to="/notfound">
              <div className="download-app">
                <img src={apple} alt="App Store" /> Download on App Store
              </div>
            </Link>
          </div>
          <div className="numbers">
            <div>
              <p className="num">
                <CountUp start={0} end={4.5} duration={15} decimals={1} />
                <span style={{ color: "#004BFF" }}>+</span>
              </p>
              <p>Years Experience</p>
            </div>
            <div>
              <p className="num">
                <CountUp start={0} end={800} duration={10} />
                <span style={{ color: "#004BFF" }}>+</span>
              </p>
              <p>Happy Clients</p>
            </div>
            <div>
              <p className="num">
                <CountUp start={0} end={50} duration={15} />
                <span style={{ color: "#004BFF" }}>+</span>
              </p>
              <p>Organizations</p>
            </div>
            <div className="testimonial">
              <p>Testimonial</p>
              <img src={testimonial} alt="Testimonial" />
            </div>
          </div>
        </div>
        <div className="right-content" data-aos="fade-left">
          <img src={image1} alt="Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Frame1;
