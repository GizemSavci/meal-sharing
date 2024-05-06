import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/Logo2.jpg';
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo-section">
            <Link to="/">
                <img src={logoImage} alt="Logo image for meal sharing app" className="logo-image"/>
            </Link>
        </div>
    )
}

export default Logo;