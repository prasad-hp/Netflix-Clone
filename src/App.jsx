import React from 'react'
import HomePage from './Pages/HomePage'
import './App.css'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import LoginScreen from './Pages/LoginScreen';

function App() {
  const user = null;

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/Login' element={<LoginScreen />} />
          <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
