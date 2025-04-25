import { useState } from 'react'
import Technolgy from './technology';
import Skills from './skills';
import './App.css'
import Navbar from './navbar'
import {Routes,Route} from "react-router-dom";
import Intro from './langingpage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    
    <Routes>
    <Route path='/' element={<Intro/>}/>
      <Route path='/technology' element={<Technolgy/>}/>
      <Route path='/skills' element={<Skills/>}/>
    </Routes>
    </>
  )
}

export default App
