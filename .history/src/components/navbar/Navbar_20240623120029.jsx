import "./navbar.scss";
import Logo from "../../assets/BATIKASH-LOGO.png"
import MenuBurger from "../../assets/Vector (1).png"
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";



const Navbar = () => {
  const [menubar, setMenubar] = useState(false)

  const openMenu = () => {
    setMenubar(!menubar)
  }

 
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
         <img src={MenuBurger} alt="" onClick={openMenu}/>
        </div>

        { menubar? <div className="sidebar">
          <div className="cancel"  onClick={openMenu}><IoCloseSharp/></div>
         
          <div className="sidebar-content">
          <NavLink className="link" to="/"><a>Personal</a></NavLink>
          <NavLink  className="link" to="/about"><a>About Us</a></NavLink>
          <NavLink  className="link" to="/contact"><a>Contact Us</a></NavLink>
          <NavLink  className="link" to="/blog"><a>Blog</a></NavLink>
          </div>
          
        </div> : ""}


    
    </div>
    </>
  )
}

export default Navbar