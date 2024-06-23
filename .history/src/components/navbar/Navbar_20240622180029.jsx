import "./navbar.scss";
import Logo from "../../assets/BATIKASH-LOGO.png"
import MenuBurger from "../../assets/ector (1).png"
import { NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <>
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

    <div className="mobile-nav">
        <div className="left-nav">
          <NavLink to="/"> <img src={Logo} alt=""/></NavLink>
        </div>
        <div className="right-nav">
         <img src={MenuBurger} alt=""/>
        </div>

        <div >
          <NavLink className="link" to="/"><a>Personal</a></NavLink>
          <NavLink  className="link" to="/about"><a>About Us</a></NavLink>
          <NavLink  className="link" to="/contact"><a>Contact Us</a></NavLink>
          <NavLink  className="link" to="/blog"><a>Blog</a></NavLink>
        </div>


    
    </div>
    </>
  )
}

export default Navbar