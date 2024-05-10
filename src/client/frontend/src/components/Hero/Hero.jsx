import heroImage from '../../assets/images/Hero3.jpg';
import './Hero.css';
import HeroTextRotating from "../HeroTextRotating/HeroTextRotating";

const Hero = () => {
    return (
        <div className="hero-section">
            <HeroTextRotating></HeroTextRotating>
            <img src={heroImage} alt="Hero image for meal sharing app"/>
        </div>
    )
}

export default Hero;