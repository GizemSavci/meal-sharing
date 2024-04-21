import { useState } from 'react'
import './App.css'
import MealsList from './components/MealsList/MealsList';
import ExperimentalComponet from './components/ExperimentalComponet/ExperimentalComponet';
function App() {

  return (
    <>
      <div>
        <ExperimentalComponet />
        <MealsList />

      </div>
    </>
  )
}

export default App;
