import "./contact.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Frame1 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); 
  }, []);
  return (
    <div className="contact_wrapper">
    <div className="overlay">
        <div className="contact_frame1-content" data-aos="zoom-in">
            <h1>Contact Us</h1>
            <p>BatiKash gives you the freedom to make quick and easy payments, <br/> earn money, spend smart, and save more.</p>
        </div>

     </div>
    </div>
  )
}

export default Frame1