import "./navbar.scss";
import Logo from "../../assets/BATIKASH-LOGO.png"
import { NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <nav>
        <div className="left-nav">
          <NavLink to="/"> <img src={Logo} alt=""/></NavLink>
        </div>
        <div className="right-nav">
          <NavLink className="link" to="/"><a>Personal</a></NavLink>
          <NavLink  className="link" to="/about"><a>About Us</a></NavLink>
          <NavLink  className="link" to="/contact"><a>Contact Us</a></NavLink>
          <NavLink  className="link" to="/blog"><a>Blog</a></NavLink>
        </div>
    
    </nav>
  )
}

export default Navbar