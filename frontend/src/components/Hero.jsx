import "../styles/Hero.css";
import { AiFillHome } from "react-icons/ai"; // Import the home icon from react-icons

const Hero = ({ pageTitle }) => {
  return (
    <header className="hero">
      <div className="hero-content">
        <a href="/" className="home-icon">
          <AiFillHome size={30} />
        </a>
        <div className="separator"></div>
        <h1 className="page-title">{pageTitle}</h1>
      </div>
    </header>
  );
};

export default Hero;
