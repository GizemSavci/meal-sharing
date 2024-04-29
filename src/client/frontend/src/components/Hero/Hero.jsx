import heroImage from '../../assets/images/Hero2.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-section">
            <img src={heroImage} alt="Hero image for meal sharing app"/>
        </div>
    )
}

export default Hero;