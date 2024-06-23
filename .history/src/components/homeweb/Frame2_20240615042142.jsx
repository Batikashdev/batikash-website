import image1 from "../../assets/Rectangle.png";
import "./home.scss"

const Frame2 = () => {
  return (
    <section className="frame2" style={{background:"#033454"}}>
        <div className="frame2-content">
        <div className="left-content">
            <img src={image1} alt=""/>
        </div>
        <div className="right-content">
            <h1>Enjoy <span>fast</span> and <span>reliable</span> payment</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Elit <br/> tempor sem ornare nisl egestas egestas facilisi. <br/> Est libero sit sit eu ac odio quisque. Aliquam <br/> mattis aliquam eget a sagittis.</p>
        </div>
        </div>
        
    </section>
  )
}

export default Frame2