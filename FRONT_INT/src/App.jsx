import { Route , Routes } from 'react-router-dom'; // Import Route from react-router-dom
import  Home  from "./body/views/home/Home.jsx";
import './App.css'


function App() {

  return (
    <>
    <Routes>

<Route path="/" element={<Home/>} />

    </Routes>
    </>
  )
}

export default App

