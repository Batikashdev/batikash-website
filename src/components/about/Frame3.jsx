import { useEffect } from "react";
import image1 from "../../assets/Rectangle 130.png";
import "./about.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Frame3 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); 
  }, []);
  return (
    <section>
    <div className="frame3-content" data-aos="fade-up">
      <div className="left-content">
        <h1>
         Why We Do It
        </h1>
        <p>
        Batikash is fueled by a Passion to Empower
        Batikash isn't driven by just ones and zeros; it's fueled by a passion to empower YOU. We envision a world where:

        -Everyone has access to the resources they need: Whether it's the perfect appliance to elevate your life or the financial tools to build a brighter future, Batikash strives to bridge the gap.

        -Commerce is effortless and accessible: We believe in breaking down barriers and making shopping and financial management a breeze.

        -Startups and businesses can thrive: Our platform is designed to foster the growth of local businesses and fuel the entrepreneurial spirit.
        We're more than a company; we're a catalyst for positive change.  

        </p>
      </div>
      <div className="right-content">
        <img src={image1} alt="" />
      </div>
    </div>
  </section>
  )
}

export default Frame3