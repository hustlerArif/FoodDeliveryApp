import "./About.css";
import delivery_img from "../../images/location.png";
const About = () => {
  return (
    <div className="about-section">
      <div className="about">
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            Experience the rich and delectable world of Pramod's cuisine at
            your fingertips with the Pramod Food Delivery App! Indulge in the
            authentic flavors of India's favorite snacks, sweets, and savories,
            all conveniently delivered to your doorstep.
          </p>
        </div>
        <div className="about-img">
          <img
            src={"https://pramodshop.com/album/slider/File107_01_202103_54_192PIMG1.webp"}
            alt=""
          />
        </div>
        <div className="about-delivery-img">
          <p>Free Delivery </p>
          <img src={delivery_img} width="200px" alt="" />
          <p>Fast Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default About;
