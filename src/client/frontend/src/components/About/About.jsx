import about1 from '../../assets/images/about1.jpg';
import about2 from '../../assets/images/about2.jpg';
import './About.css';
import { useNavigate } from 'react-router-dom';

export const About = () => {
    const navigate = useNavigate();

    return (
        <div className="about-container">
            <div className="left-container">
                <div className='block-container'>
                <h2>Our Value</h2>
                    <p>
                        We care meaningful relationships over a food.<br></br>
                        Best way to learn is cultural change over a food.<br></br>
                        Fuel your mind and soul while fueling your tum-tum.<br></br>
                        Be brave. Invite. Share. Grow.
                    </p>
                    <button onClick={()=>{
                        navigate('/meals');
                    }}
                    >
                        See meals
                    </button>
                </div>    
                <img src={about1} alt='food passing over someone in a festive dinner' />
            </div>
            <div className="right-container"> 
                <div className='block-container'>
                <h2>Our Mission</h2>
                    <p>
                        Help individuals to make new friends.<br></br>
                        Make memories last long in the heart.<br></br>
                        Cultural grow. Get to know the country by traveling for food.<br></br>
                        Be brave. Invite. Share. Grow.
                    </p>
                    <button onClick={()=>{
                        navigate('/share');
                    }}
                    >
                        Share a meal
                    </button>
                </div>
                <img src={about2} alt='people having fun in a festive dinner' />
            </div>
            <div>
            </div>
        </div>
    );
};