import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import BaseFrame from "./components/baseframe/BaseFrame";
import Footer from "./components/footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet />
      <BaseFrame/>
      <Footer/>
      
    </>
  );
}