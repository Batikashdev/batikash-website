import "./footer.scss"
import image1 from '../../assets/Group 5958.png'
import Logo from '../../assets/BATIKASH-LOGO.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

const footer = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <footer>
        <div className="newsletter-footer">
            <div className="left-content" data-aos="fade-left">
                <img src={image1} alt=""/>
            </div>
            <div className="right-content" data-aos="fade-up">
                <h2>Let us send you offerings</h2>
                <div className="input">
                    <input placeholder="Input your email address in here"/>
                    <button data-aos="zoom-in" data-aos-duration="3000">Subscribe Now</button>
                </div>
            </div>
        </div>
        <div className="main-footer">
            <ul> FEATURE
                <li>E- Commerce</li>
                <li>Fintech</li>
                <li>Investment</li>
            </ul>

            <ul> RESOURCES
                <li>Blog</li>
               
            </ul>

            <ul> WE ARE SOCIAL
                <li><a href="https://x.com/batikash?s=21">X</a></li>
                <li><a  href="https://www.instagram.com/batikashng?igsh=MWEzMnF4cGpuMnh4aA==">Instagram</a></li>
                <li><a  href="https://www.facebook.com/share/8WeCjSyGBGHPRRRo/?mibextid=LQQJ4d">Facebook</a></li>
                <li><a  href="https://www.linkedin.com/company/batikash/">Linkedin</a></li>
                
            </ul>

            <ul> SUPPORT
                <li>Help & Support</li>
                <li>Contact Us</li>
            </ul>

            <ul> COMPANY
                <li>Privacy Policy</li>
                <li>Terms Of Service</li>
                
            </ul>

            
        </div>
        <div className="base-footer">
            <img src={Logo} alt=""/>
            <div className="copyright"> &copy; 2024 Batikash.All right reserved</div>
           

        </div>
    </footer>
  )
}

export default footer