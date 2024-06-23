import BaseFrame from "../components/baseframe/BaseFrame"
import Frame1 from "../components/homeweb/Frame1"
import Frame2 from "../components/homeweb/Frame2"
import Frame3 from "../components/homeweb/Frame3"
import Frame4 from "../components/homeweb/Frame4"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Frame1/>
        <Frame2/>
        <Frame3/>
        <Frame4/>
        <BaseFrame/>
        <Footer/>

    </div>
  )
}

export default Home