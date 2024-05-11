//import noPage from '../../assets/images/Error.png';
import notPage from '../../assets/images/MealShare404.jpg';
import './NoPage.css';



const notFound = () => {
    return (
        <div className='no-page'>
            <h1>404 Page not found</h1>
            <img src={notPage} alt='no page image with an empty plate'/>
            <h3>We can’t seem to find the page you are looking for.</h3>
        </div>
    )
}

export default notFound;