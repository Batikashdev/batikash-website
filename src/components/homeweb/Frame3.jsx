import { useEffect } from "react";
import image1 from "../../assets/Group 5983.png";
import "./home.scss"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Frame3 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section >
        <div className="frame3-content" data-aos="fade-up">
        <div className="right-content">
            <h1 style={{color:"#033454"}}>Get to invest in many industry with <span>bati-leverage</span></h1>
            <p style={{color:" rgb(0, 0, 0, 0.6)"}}>Become more than just a customer –  be an investor!<br/>
Enjoy juicy ROI with Bati-Leverage, an innovative investment feature designed to empower your financial growth.<br/>Sign up to invest in a diverse range of sectors, like fish farming and many more!  Don't settle for average returns –  Bati-Leverage puts the power of diversification and growth in your hands.
</p>
        </div>
        <div className="left-content">
            <img src={image1} alt=""/>
        </div>
       
        </div>
        
    </section>
  )
}

export default Frame3