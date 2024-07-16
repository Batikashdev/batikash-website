import { useEffect } from "react";
import image1 from "../../assets/ywsfc.png";
import "./home.scss"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Frame4 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section >
        <div className="frame4-content" data-aos="fade-up">
       
        <div className="left-content">
            <img src={image1} alt=""/>
        </div>
        <div className="right-content">
            <h1 style={{color:"#033454"}}>with <span>BatiKash</span> you can purchase the <span>impossible</span></h1>
            <p style={{color:" rgb(0, 0, 0, 0.6)"}}>Forget limitations. Batikash empowers you to chase your aspirations.  <br/>Whether it's the latest tech gadget that pushes boundaries or the perfect appliance to elevate your home, Batikash makes it possible.<br/>With amazing deals, secure transactions, and a vast selection, Batikash puts the power to purchase what once seemed out of reach right at your fingertips.  So, don't hold back – explore the possibilities and discover how Batikash can help you transform your dreams into reality.
            </p>
        </div>
       
        </div>
        
    </section>
  )
}

export default Frame4