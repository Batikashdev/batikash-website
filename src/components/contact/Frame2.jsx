
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
                <li><a href="https://www.instagram.com/batikashng?igsh=MWEzMnF4cGpuMnh4aA=="><BsInstagram  className="icon"/>instagram.com</a></li>
                <li><a href="https://x.com/batikash?s=21"><FaXTwitter  className="icon"/>www.twitter.com</a></li>
                <li><a href="https://www.linkedin.com/company/batikash/">< FaLinkedin  className="icon"/>www.linkedin.com</a></li>
                <li><a href="https://www.facebook.com/share/8WeCjSyGBGHPRRRo/?mibextid=LQQJ4d"><FaFacebook  className="icon" />www.facebook.com</a></li>
            </ul>
        </div>
        <div className="right-content">
            <img src={image1} alt=""/>
        </div>
    </div>
  )
}

export default Frame2