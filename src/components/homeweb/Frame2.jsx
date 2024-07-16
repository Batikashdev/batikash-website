import { useEffect } from "react";
import image1 from "../../assets/Rectangle.png";
import "./home.scss"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Frame2 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="frame2" style={{background:"#033454"}}>
        <div className="frame2-content">
        <div className="left-content" data-aos="zoom-in-right">
            <img src={image1} alt=""/>
        </div>
        <div className="right-content" data-aos="fade-up">
            <h1>Enjoy <span>fast</span> and <span>reliable</span> payment</h1>
            <p>We prioritize fast and secure transactions.  
            And our system offers real-time settlements, <br/> allowing you to receive funds directly into your  mobile wallet after each sale. <br/>With Batikash, you can say goodbye to delayed payments, tackle cash flow challenges, and operate with peace of mind.
              Join the Batikash platform and unlock the full potential of your startup's success!<br/> </p>
        </div>
        </div>
        
    </section>
  )
}

export default Frame2