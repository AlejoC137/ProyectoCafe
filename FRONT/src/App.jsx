import { Route , Routes } from 'react-router-dom'; // Import Route from react-router-dom
import './App.css'
import  Home  from "./body/views/home/Home.jsx";
import  WifiPortal  from "./body/views/wifiPortal/WifiPortal.jsx";
import  NewProjectPortal  from "./body/views/newProjectPortal/NewProjectPortal.jsx";
import  MenuProjectoCafe  from "./body/views/menuProjectoCafe/MenuProjectoCafe.jsx";
import  MenuPC  from "./body/views/menuPC/MenuPC.jsx";
import  MenuCheckListCocina  from "./body/views/menuCheckList/MenuCheckListCocina.jsx";
import  MenuCheckListCafe  from "./body/views/menuCheckList/MenuCheckListCafe.jsx";
import  MenuCheckListDes  from "./body/views/menuCheckList/MenuCheckListDes.jsx";
import  LenguajeSelect  from "./body/views/lenguajeSelect/LenguajeSelect.jsx";
import Proyectistas from './body/components/proyectistas/Proyectistas.jsx';
import RecetaCard from './body/components/card/RecetaCard.jsx';

function App() {

  return (
    <>
    <Routes>

        <Route path="/home" element={<Home/>} />
        <Route path="/wifiportal" element={<WifiPortal/>} />
        <Route path="/newproject" element={<NewProjectPortal/>} />
        <Route path="/menuprojectocafe" element={<MenuProjectoCafe/>} />
        <Route path="/menupc" element={<MenuPC/>} />
        <Route path="/RecetaCard" element={<RecetaCard/>} />
      
      
      {/* items */}
        <Route path="/itemsCocina" element={<MenuCheckListCocina/>} />
        <Route path="/itemsCafe" element={<MenuCheckListCafe/>} />
        {/* <Route path="/itemsDes" element={<MenuCheckListDes/>} /> */}
      {/* items */}
      
      
        <Route path="/menupc/:edit" element={<MenuPC/>} />
        <Route path="/lenguajeSelect" element={<MenuPC/>} />
        <Route path="/proyectistas" element={<Proyectistas/>} />
        {/* <Route path="/home" element={<Home />} /> */}

    </Routes>
    </>
  )
}

export default App
