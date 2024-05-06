import HomePage from './components/HomePage/HomePage';
import  MealDetail from './components/MealDetail/MealDetail';
import { Navbar } from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { About, Share, Meals } from './components/index';
import NoPage from './components/NoPage/NoPage';


function App() {

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/share" element={<Share />}/>
          <Route path="/meals" element={<Meals />} />
          <Route path="/meals/:id" element={<MealDetail />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App;