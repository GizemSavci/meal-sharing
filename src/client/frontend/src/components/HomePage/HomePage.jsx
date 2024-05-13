//import MealsList from "../MealsList/MealsList"
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";


function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <div className="homepage-container">
                <Hero></Hero>
                
                <div className="horizontal-grid">
                    { /* <MealsList numMeals={2} ></MealsList> */ }
                </div>
                <div className="button-container">
                    <button onClick={() => {
                            navigate("/meals");
                        }}
                        >
                            See all meals
                    </button>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default HomePage;