
import "./contact.scss"
import image1 from "../../assets/Group 5986.png"
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaFacebook  } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";


const Frame2 = () => {
  return (
    <div className="contact-frame2_wrapper">
        <div className="left-content">
            <h2>Contact us</h2>
            <ul> Send us mail:
                <li>  <FaEnvelope className="icon"/> example@batikash.com</li>
            </ul>

            <ul> Call us on
                <li> <FaPhoneAlt  className="icon"/> +234 90 999 9999 999</li>
            </ul>

            <ul> Social Media
                <li><a href=""><BsInstagram  className="icon"/>http://www.instagram.com/batikash</a></li>
                <li><a href=""><FaXTwitter  className="icon"/>http://www.twitter.com/batikash</a></li>
                <li><a href="">< FaLinkedin  className="icon"/>http://www.linedin.com/batikash</a></li>
                <li><a href=""><FaFacebook  className="icon" />http://www.facebook.com/batikash</a></li>
            </ul>
        </div>
        <div className="right-content">
            <img src={image1} alt=""/>
        </div>
    </div>
  )
}

export default Frame2