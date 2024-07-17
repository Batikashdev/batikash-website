import "./navbar.scss";
import Logo from "../../assets/BATIKASH-LOGO.png";
import MenuBurger from "../../assets/Vector (1).png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [menubar, setMenubar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  const openMenu = () => {
    setMenubar(!menubar);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      setHideNavbar(window.scrollY > 1000); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`${scrolled ? "nav__scrolled" : "nav"} ${hideNavbar ? "nav__hidden" : ""}`}>
        <div className="left-nav">
          <NavLink to="/">
            <img src={Logo} alt="" />
          </NavLink>
        </div>
        <div className="right-nav">
          <NavLink className={({ isActive }) => (isActive ? "link active-link" : "link")} to="/">
            Personal
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "link active-link" : "link")} to="/about">
            About Us
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "link active-link" : "link")} to="/contact">
            Contact Us
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "link active-link" : "link")} to="/blog">
            Blog
          </NavLink>
        </div>
      </nav>

      <div className="mobile-nav">
        <div className="left-nav">
          <NavLink to="/">
            <img src={Logo} alt="" />
          </NavLink>
        </div>
        <div className="right-nav">
          <img src={MenuBurger} alt="" onClick={openMenu} />
        </div>

        {menubar && (
          <div className="sidebar" data-aos="fade-left" data-aos-duration="1000">
            <div className="cancel" onClick={openMenu}>
              <IoCloseSharp />
            </div>
            <div className="sidebar-content" data-aos="fade-left">
              <NavLink className={({ isActive }) => (isActive ? "link active-link" : "link")} to="/">
                Personal
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? "link active-link" : "link")} to="/about">
                About Us
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? "link active-link" : "link")} to="/contact">
                Contact Us
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? "link active-link" : "link")} to="/blog">
                Blog
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
