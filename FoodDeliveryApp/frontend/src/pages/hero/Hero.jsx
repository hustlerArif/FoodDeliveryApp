import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-section">
      <div className="hero-title">
        <h1>
          Pramod's Delicious Food, <br /> delivered right at your doorstep!
        </h1>
        <p>
          Experience the rich and delectable world of Pramod's cuisine at your
          fingertips with the Pramod Food Delivery App! Indulge in the
          authentic flavors of India's favorite snacks, sweets, and savories,
          all conveniently delivered to your doorstep.
        </p>
        <button className="order-now-btn" onClick={() => navigate("/login")}>
          Login now
        </button>
      </div>
      <div className="hero-image">
        <img
          src="https://pramodshop.com/images/bgg.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
