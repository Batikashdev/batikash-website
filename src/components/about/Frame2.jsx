import { useEffect } from "react";
import image1 from "../../assets/Rectangle 129.png";
import "./about.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Frame2 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); 
  }, []);
  return (
    <section>
    <div className="frame22-content" data-aos="fade-up">
      
      <div className="right-content">
        <img src={image1} alt="" />
      </div>

      <div className="left-content">
        <h1>
         Who We Are
        </h1>
        <p>
        Batikash is more than just an app; it's your one-stop shop for a simpler, smarter, and more rewarding digital life. We're passionate about empowering you to:
        Shop smarter, Pay with ease, Grow your wealth, Run your business 
        </p>
        <div className="about">
        <span className="sub-title">What Sets Us Apart</span>
        <p><b>We're Innovators</b>: We're constantly pushing boundaries and developing new features like Bati-Leverage (if applicable) to transform the way you interact with your finances and investments.</p>
        <p><b>We're Your Shopping Buddy</b>: We bring you unbeatable deals on a vast selection of appliances, electronics, and gadgets, making it easier to find what you need without breaking the bank.</p>
        <p><b>We're Security Champions</b>: Your trust is paramount. We prioritize industry-leading security measures to safeguard your financial information and transactions.</p>
        <p><b>We're Convenience Personified</b>: Manage your money, shop for what you desire, and explore investment opportunities – all from the palm of your hand with our user-friendly app.</p>
        </div>
        

      </div>
    </div>
  </section>
  )
}

export default Frame2