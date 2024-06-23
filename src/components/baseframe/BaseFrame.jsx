import image1 from "../../assets/iPhone 12 Pro.png";
import playstore from "../../assets/svg.png";
import apple from "../../assets/apple.png";
import "./baseframe.scss";
import { Link } from "react-router-dom";

const BaseFrame = () => {
  return (
    <section className="baseframe" style={{padding:"40px 0px",}}>
      <div className="baseframe-content">
      <header>
        <p>Best Tech-Commerce </p>
        <hr></hr>
        <p>Platform In Africa</p>
      </header>

      <div className="baseframe-image">
        <img src={image1} alt="" />
      </div>

      <div className="download-btns">
        <Link className="link" to="/notfound">
        <div className="download-app">
          <img src={playstore} alt="" /> Download on Google Play
        </div>
        </Link>

        <Link className="link" to="/notfound">
        <div className="download-app">
          <img src={apple} alt="" /> Download on App Play
        </div>
        </Link>
       
        
      </div>

      </div>
      
    </section>
  );
};

export default BaseFrame;
