import image1 from "../../assets/Rectangle 130.png";
import "./about.scss"

const Frame3 = () => {
  return (
    <section>
    <div className="frame3-content">
      <div className="left-content">
        <h1>
         Why We Do It
        </h1>
        <p>
        Lorem ipsum dolor sit amet consectetur. Nunc urna consectetur facilisi ipsum duis adipiscing. Habitasse dictum pulvinar eget facilisi vitae tortor et scelerisque metus. In vel felis quis mauris faucibus mauris quis. Quis mattis odio orci ultrices urna congue. A amet lacinia dictumst nisl turpis feugiat. In dapibus donec in orci.
        At ac egestas ultricies in. Mauris tempus et nunc in nisi nunc ut duis. Sodales senectus.
        </p>
      </div>
      <div className="right-content">
        <img src={image1} alt="" />
      </div>
    </div>
  </section>
  )
}

export default Frame3