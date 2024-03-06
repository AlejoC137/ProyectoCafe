import { useState } from 'react'
import { Route , Routes } from 'react-router-dom'; // Import Route from react-router-dom
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Home  from "./body/views/home/Home.jsx";
function App() {

  return (
    <>
    <Routes>

        <Route path="/home" element={<Home/>} />
        {/* <Route path="/home" element={<Home />} /> */}

    </Routes>
    </>
  )
}

export default App
