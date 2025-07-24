import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Main from "./pages/Main"
import Carousel1 from "./components/Carousel"
import BasicExample from "./components/basicExample"
import Float from "./components/Float"


function App() {

  return (
    <>
    <Header />
    <Carousel1 />
    <BasicExample/>
    <Float/>
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
    
    </>
  )
}

export default App
