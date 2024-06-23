import image1 from "../../assets/ywsfc.png";
import "./home.scss"

const Frame4 = () => {
  return (
    <section >
        <div className="frame4-content">
       
        <div className="left-content">
            <img src={image1} alt=""/>
        </div>
        <div className="right-content">
            <h1 style={{color:"#033454"}}>with <span>BatiKash</span> you can purchase the <span>impossible</span></h1>
            <p style={{color:" rgb(0, 0, 0, 0.6)"}}>Lorem ipsum dolor sit amet consectetur. Elit <br/> tempor sem ornare nisl egestas egestas facilisi. <br/> Est libero sit sit eu ac odio quisque. Aliquam <br/> mattis aliquam eget a sagittis.</p>
        </div>
       
        </div>
        
    </section>
  )
}

export default Frame4