import { FaRegStar, FaStar } from "react-icons/fa";
import './StarIcon.css';

function StarIcon({ filled }) {
    return (
        <div className="star-icon">
            {filled ? <FaStar /> : <FaRegStar />}
        </div>
    );
}

export default StarIcon;